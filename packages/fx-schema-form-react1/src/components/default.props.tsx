import { UiSchema } from "fx-schema-form-core/dist/dts/models/uischema";
import { Ajv } from "ajv";
import Immutable from "immutable";

import { FxUiSchema } from "./index";
/**
 * 默认的组件参数
 */
export interface DefaultProps {
    /**
     * schema对应的$id
     */
    schemaId: string;
    /**
     * form的ID，用于从state中查找数据
     */
    formId?: string;
    /**
     * uiSchema
     */
    uiSchema?: Array<string | FxUiSchema> | FxUiSchema;
    /**
     * 父亲的路径
     */
    parentKeys: string[];
    /**
     * 全局默认配置
     */
    globalOptions: Immutable.Map<string, any>;
    /**
     * ajv的实例
     */
    ajv: Ajv;
    /**
     * 如果是数组，则表示当前数组的下标
     */
    arrayIndex?: number;
    /**
     * 当前formItem的层级
     */
    arrayLevel?: number[];

    formItemData?: any;
    formItemMeta?: any;
}