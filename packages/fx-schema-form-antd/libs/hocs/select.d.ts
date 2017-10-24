import { SchemaFormItemBaseProps } from "../components/formitem/props";
import { SchemaFormMeta } from "../libs/meta";
/**
 * 获取formData的数据
 * @param state state
 * @param props 属性
 */
export declare const getAllData: (state: any, props: SchemaFormItemBaseProps) => {};
/**
 * 获取state中的meta数据
 * @param state 全局state
 * @param props 当前component的props
 */
export declare const getData: (state: any, props: SchemaFormItemBaseProps) => any;
/**
 * 获取state中的meta数据
 * @param state 全局state
 * @param props 当前component的props
 */
export declare const getMetaStateData: (state: any, props: SchemaFormItemBaseProps) => SchemaFormMeta;
/**
 * 获取state中的meta数据
 * @param state 全局state
 * @param props 当前component的props
 */
export declare const getMetaData: (state: any, props: SchemaFormItemBaseProps) => SchemaFormMeta;
/**
 * 获取state中的meta数据中的actions
 * @param state 全局state
 * @param props 当前component的props
 */
export declare const getActions: (state: any, props: SchemaFormItemBaseProps) => any;
/**
 * 获取单个字段的信息
 * meta            额外的信息
 * formData        当前表单的所有数据
 * formItemData    当前字段的数据
 */
export declare const mapMetaStateToProps: Reselect.OutputParametricSelector<any, SchemaFormItemBaseProps, {
    meta: any;
    formData: any;
    formItemData: any;
}, (res1: any, res2: any, res3: any) => {
    meta: any;
    formData: any;
    formItemData: any;
}>;
/**
 * 返回actions
 */
export declare const mapActionsStateToProps: Reselect.OutputParametricSelector<any, SchemaFormItemBaseProps, {
    actions: any;
    metaState: any;
}, (res1: any, res2: any) => {
    actions: any;
    metaState: any;
}>;
