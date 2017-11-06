
import React from "react";
import { schemaMerge } from "fx-schema-form-core";
import { connect, Dispatch } from "react-redux";
import { compose, shouldUpdate, onlyUpdateForKeys } from "recompose";

import { RC } from "../../types";
import { SchemaFormBaseProps } from "../../components/form/props";
import { mapActionsStateToProps } from "../select";

/**
 * MergeHoc 添加的属性
 */
export interface MergeHocOutProps {
    schemaFormOptions: any;
    mergeSchemaList: any;
    formDefaultData?: any;
}

export interface MergeHocProps extends SchemaFormBaseProps {
    metaState: { isLoading: boolean; isValid: boolean; };
}

/**
 * 使得actions可以直接调用，绑定到dispatch
 * @param dispatch dispatch
 * @param ownProps 属性
 */
const mapDispatchToProps = (dispatch: Dispatch<any>, ownProps: SchemaFormBaseProps) => {
    const { actions } = ownProps;

    for (const key in actions) {
        if (actions.hasOwnProperty(key)) {
            const element = actions[key];

            if (!element.assigned(dispatch)) {
                element.assignTo(dispatch);
            }
        }
    }

    return { actions };
};


/**
 * merge参数中的schema和uiSchema，生成新的对象mergeSchemaList，传入组件的props中
 * @param hocFactory  hoc的工厂方法
 * @param Component   需要包装的组件
 * 加入属性
 * schemaFormOptions  merge只有，返回的options
 * schemaKey          生成的schemaKey
 * mergeSchemaList    合并之后的数据
 */
export const MergeHoc = (hocFactory: any, Component: RC<any, any>): RC<MergeHocProps, any> => {
    @(compose<MergeHocProps, any>(
        onlyUpdateForKeys(["schema"]),
        connect(null, mapDispatchToProps),
    ) as any)
    class MergeComponentHoc extends React.PureComponent<MergeHocProps, any> {
        public render(): JSX.Element {
            let { schema, uiSchema, parentKeys, schemaFormOptions, schemaKey, formData } = this.props, mergeSchemaList;
            let formDefaultData = {};

            console.log("merge render -----");

            if (!schemaKey) {
                schemaKey = (Date.now() + Math.random()).toString();
            }
            // 设置默认值
            schemaFormOptions = schemaFormOptions || {
                avjOptions: {
                    allErrors: true,
                    jsonPointers: true,
                    verbose: true,
                    useDefaults: true,
                    errorDataPath: "property"
                }
            };
            schemaFormOptions.parentKeys = parentKeys || [];
            // 合并schema和uiSchema
            mergeSchemaList = schemaMerge.merge(schemaKey, schema, uiSchema, schemaFormOptions);

            return (
                <Component
                    schemaFormOptions={schemaFormOptions || {}}
                    schemaKey={schemaKey}
                    mergeSchemaList={mergeSchemaList}
                    {...this.props}>
                </Component>
            );
        }
    }

    return MergeComponentHoc;
};
