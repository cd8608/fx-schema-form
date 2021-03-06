
import React, { PureComponent } from "react";
import { connect, Dispatch } from "react-redux";
import { BaseFactory } from "fx-schema-form-core";
import { createSelectorCreator, defaultMemoize } from "reselect";
import Immutable, { is } from "immutable";

import { DefaultProps } from "../components";
import { RC, schemaFormTypes } from "../models";
import { UtilsHocOutProps } from "./utils";
import { TreeMap } from "../libs/tree";

export interface DataHocOutProps extends DefaultProps { }

/**
 * HOC的设定参数
 */
export interface DataHocSettings {
    /**
     * 是否需要root的数据
     */
    root?: boolean;
    /**
     * 是否需要当前的key的数据
     */
    data?: boolean;
    /**
     * 是否需要当前key的长度，只能是array格式
     */
    dataLength?: boolean;
    /**
     * 是否需要当前key对应的meta数据
     */
    meta?: boolean;
    /**
     * 设置当前key下所需要的meta的key值
     */
    metaKeys?: string[];
    /**
     * 是否获取meta的根节点
     */
    treeNode?: boolean;
}

// 自定义选择器创建函数
const fxSelectorCreator: any = createSelectorCreator(defaultMemoize, is);

export const name = "data";
export const hoc = (hocFactory: BaseFactory<RC<DefaultProps, {}>>) => {
    return (settings: DataHocSettings = {
        data: true
    }) => {
        /**
         * 与reduce相关的数据操作
         * 获取formItemData数据
         * 获取formItemMeta数据
         */
        const getItemDataHoc = (parentKeys: string[], rootReducerKey: string[], keys: Array<string | number>) => {
            /**
             * 获取FormItemData的数据
             * @param state 当前的state树
             */
            let getFormItemData = (state: Immutable.Map<string, any>) => {
                let dataKeys: Array<string | number> = [...rootReducerKey, ...parentKeys, "data"];

                // 如果配置中root为ture，则取得所有的数据
                if (settings.root) {
                    return state.getIn(dataKeys);
                }

                // 否则根据单个的keys获取
                dataKeys = [...dataKeys, ...keys];
                if (settings.data && state.hasIn(dataKeys)) {
                    let formItemData = state.getIn(dataKeys);

                    if (formItemData !== undefined) {
                        if (!settings.dataLength) {
                            return formItemData;
                        } else {
                            // 如果是列表，则返回size
                            if (Immutable.List.isList(formItemData)) {
                                return formItemData.size;
                            }

                            return 0;
                        }
                    }
                }
            };

            /**
            * 获取FormItemMeta的数据
            * @param state 当前的state树
            */
            let getFormItemMeta = (state: Immutable.Map<string, any>) => {
                let metaKeys = [...rootReducerKey, ...parentKeys, "meta"];

                if (settings.meta && state.hasIn(metaKeys)) {
                    let rootNode = state.getIn(metaKeys),
                        childNode = rootNode.containPath([...keys]);

                    if (childNode && childNode.value) {
                        if (settings.metaKeys) {
                            return childNode.value.filter((val: any, key: string) => {
                                if (!settings.metaKeys) {
                                    return false;
                                }
                                return settings.metaKeys.indexOf(key) >= 0;
                            });
                        }
                        return childNode.value;
                    }
                }
            };

            /**
            * 获取FormItemMeta的根数据
            * @param state 当前的state树
            */
            let getRoot = (state: Immutable.Map<string, any>) => {
                if (!settings.treeNode) {
                    return null;
                }

                let metaKeys = [...rootReducerKey, ...parentKeys, "meta"];
                let rootNode: TreeMap = state.getIn(metaKeys);
                let childNode = rootNode.containPath([...keys]);

                if (childNode) {
                    return childNode;
                }

                return rootNode.addChild([...keys]);
            };

            /**
             * re-select来缓存数据
             */
            return fxSelectorCreator(
                [getFormItemData, getFormItemMeta, getRoot],
                (formItemData: any, formItemMeta: any, formItemNode: TreeMap) => {
                    const rtn: { formItemData?: any, formItemMeta?: any, formItemNode?: TreeMap } = {};

                    if (formItemData !== undefined && formItemData !== null) {
                        rtn.formItemData = formItemData;
                    }
                    if (formItemMeta !== undefined && formItemMeta !== null) {
                        rtn.formItemMeta = formItemMeta;
                    }
                    if (formItemNode !== undefined && formItemNode !== null) {
                        rtn.formItemNode = formItemNode;
                    }

                    return rtn;
                }
            );
        };

        /**
         * 用于获取数据的hoc
         * @param hocFactory  hoc的工厂方法
         * @param Component   需要包装的组件
         * 加入属性
         * arrayItems
         */
        return (Component: any): RC<DefaultProps, any> => {
            // @(shouldUpdate(() => false) as any)
            class DataComponentHoc extends PureComponent<DefaultProps & UtilsHocOutProps, any> {
                private ComponentWithHoc: any = Component;

                constructor(props: DefaultProps & UtilsHocOutProps) {
                    super(props);

                    const { getOptions } = this.props,
                        { keys = [] } = this.props.uiSchema || {},
                        options = getOptions(this.props, schemaFormTypes.hoc, name);


                    if (!options.rootReducerKey || options.rootReducerKey.constructor !== Array) {
                        console.error("dataHoc missing property rootReducerKey.should be a Array.");
                    } else {
                        // 获取当前的数据hoc
                        this.ComponentWithHoc = connect(getItemDataHoc(this.props.parentKeys, options.rootReducerKey, keys))(Component);
                    }
                }

                public render(): JSX.Element {
                    const ComponentWithHoc = this.ComponentWithHoc;

                    return <ComponentWithHoc {...this.props} />;
                }
            }

            return DataComponentHoc as any;
        };
    };
};

export default {
    name,
    hoc
};
