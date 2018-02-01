import React, { PureComponent } from "react";
import { shouldUpdate, compose } from "recompose";

import { DefaultProps } from "../components";
import { FxUiSchema } from "../models";

import { SchemaForm } from "../components/form";
import { hocFactory } from "../factory";
import { UtilsHocOutProps } from "../hocs/utils";

export interface ArrayFieldProps extends DefaultProps, UtilsHocOutProps {

}

let arrayFieldStyle = {
    width: "100%",
    height: "100%"
};

/**
 * 数组结构的字段解析
 * 这里需要数组元素的个数来做循环
 * 循环生成元素个数的SchemaForm
 */
export class ArrayField extends PureComponent<ArrayFieldProps, any> {
    /**
     * 遍历数据，生成子表单
     * @param idx 数组的索引
     */
    private renderItem(idx: number): JSX.Element | null {
        const { parentKeys, globalOptions, getOptions, arrayLevel = [], ajv, ArrayItemComponent } = this.props,
            uiSchema = this.props.uiSchema as FxUiSchema,
            options = getOptions(this.props, "field", "array");
        let SchemaFormWithHoc: any = SchemaForm;

        // 如果不需要children，则跳出
        if (uiSchema.children === null || !uiSchema.schemaPath) {
            return null;
        }

        // 如果需要对schemaform对hoc包装
        if (options.formItemHocs && options.formItemHocs.constructor === Array) {
            SchemaFormWithHoc = compose(...options.formItemHocs)(SchemaForm);
        }

        return (
            <SchemaFormWithHoc
                key={idx}
                index={idx}
                arrayIndex={idx}
                uiSchema={uiSchema}
                ArrayItemComponent={ArrayItemComponent}
                arrayLevel={arrayLevel.concat([idx])}
                schemaId={uiSchema.schemaPath}
                uiSchemas={uiSchema.children || ["-"]}
                parentKeys={parentKeys}
                globalOptions={globalOptions}
                ajv={ajv} />
        );
    }
    /**
     * 渲染页面
     */
    public render(): JSX.Element | null {
        const { uiSchema, formItemData, getOptions } = this.props, child = [],
            options = getOptions(this.props, "field", "array");
        let SchemaFormWithHoc;

        for (let i = 0; i < +formItemData; i++) {
            child.push(this.renderItem(i));
        }

        // 如果需要对schemaform对hoc包装
        if (options.formHocs && options.formHocs.constructor === Array) {
            SchemaFormWithHoc = compose(...options.formHocs)(({ children }) => {
                return <div style={arrayFieldStyle}>{children}</div>;
            });

            return <SchemaFormWithHoc {...this.props} children={child} />;
        }

        return <div style={arrayFieldStyle}>{child}</div>;
    }
}
