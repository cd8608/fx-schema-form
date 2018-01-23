import { Ajv } from "ajv";
import { JSONSchema6 } from "json-schema";

import { schemaFieldFactory, schemaTypeFactory } from "../factory";

/**
 * 解析schema中的字段，缓存到【schemaFieldFactory】中    static getSchemaId(arg0: any): any {
        throw new Error("Method not implemented.");
    }    static getSchemaId: any;


 * 1. 验证schema的合法性
 * 2. 提取成map
 */
export class ResolveLib {
    public mergeSchema: JSONSchema6;

    constructor(private ajv: Ajv, private schema: JSONSchema6, public readonly $id = "") {
        // 验证schema的完整性
        if (!$id) {
            this.initSchema(ajv, schema);
        }
        // 生成map
        this.compileSchema(schema, $id);
    }

    /**
     * 初始化schema
     * 1. 判断$id，如果不存在，报错
     * 2. 验证schema的结构是否正确，不正确报错
     * 3. 若果ajv中不存在schema，则添加进ajv
     * @param ajv     ajv的实例
     * @param schema  schema
     */
    private initSchema(ajv: Ajv, schema: JSONSchema6): JSONSchema6 {
        // 如果没有$id, 直接报错
        if (!schema.$id) {
            throw new Error(`id is required by fx-schema-form-core.`);
        }

        // 验证schema的正确性
        if (!ajv.validateSchema(schema)) {
            throw ajv.errors;
        }

        // 把schema加入到ajv
        if (!ajv.getSchema(schema.$id)) {
            ajv.addSchema(schema);
        }

        return schema;
    }

    /**
     * 遍历schema，生成map
     * 1. 如果schema.type不是string，报错
     * 2. 调用【schemaTypeFactory
     * @param schema  schema
     */
    private compileSchema(schema: JSONSchema6, $id: string): void {
        schemaTypeFactory.get("undefined")(schema, $id || (schema.$id + "#"), this.ajv);

        this.mergeSchema = schema;

        // 如果不存在type，则直接返回
        if (!schema.type) {
            return;
        }

        // 这里只解析type为字符串的结构，不支持数组类型的type
        if (schema.type.constructor !== String) {
            throw new Error(`schema type[${schema.type}] can only be string.`);
        }

        let type: string = schema.type.toString();

        // 这里调用相对应的type的方法，来解析schema
        if (schemaTypeFactory.has(type)) {
            this.mergeSchema = schemaTypeFactory.get(type)(schema, $id || (schema.$id + "#"), this.ajv);
        }
    }

    /**
     * 解析path成成数据的路径
     * 最终schema需要与uiSchema做合并，uiSchema中的key配置的是数组 ["appType', '-','type']，所以需要做一下转换
     * 1. 去掉properties，items关键字转换成【 - 】
     * 2. 第一个字符去掉末尾的【 # 】
     * @example design#/properties/appType => ["appType']
     * @example design#/properties/appType/type => ["appType','type']
     * @example design#/properties/appType/items/properties/type => ["appType', '-','type']
     * @param schemaKey schema的path
     * @param keepFirst 是否需要保留第一个
     */
    public static getDataKeys(schemaKey: string, keepFirst = false): string[] {
        let filterKeyWords = ["items", "properties"];
        let keys = schemaKey.split("/").map((key: string, index: number) => {
            // 第一个替换末尾的#
            if (index === 0 && /#$/g.test(key)) {
                return keepFirst ? key.replace(/#$/g, "") : null;
            }

            // 去掉properties
            if (key === "properties") {
                return null;
            }

            // 转换items成-
            if (key === "items") {
                return "-";
            }

            return key;
        });

        return keys.filter((key: string) => {
            return !!key;
        });
    }

    /**
     * 从schemaPath中获取$id
     * @param schemaKey 当前schema的path
     */
    public static getSchemaId(schemaKey: string): string {
        const keys = schemaKey.split("/");

        if (!keys.length) {
            throw new Error(`${schemaKey} not a valid schemaPath.`);
        }

        return keys[0].replace(/#$/g, "");
    }
}
