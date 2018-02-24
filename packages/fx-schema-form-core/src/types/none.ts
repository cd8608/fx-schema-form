import { Ajv } from "ajv";
import { JSONSchema6 } from "json-schema";

import { schemaFieldFactory, schemaKeysFactory, convertKeys } from "../factory";
import { default as ResolveLib } from "../libs/resolve";

/**
 * 解析schema中的type!=array && type!=object的结构
 */
export default (schema: JSONSchema6, schemaKey: string, ajv: Ajv) => {
    const currentSchema = convertKeys(schema, ajv);
    const keys: string[] = ResolveLib.getDataKeys(schemaKey);
    const $id = ResolveLib.getSchemaId(schemaKey);

    if (schemaFieldFactory.has(schemaKey)) {
        if (currentSchema) {
            (currentSchema as any).resolve = true;
        }
        return currentSchema || schema;
    }

    schemaFieldFactory.add(schemaKey, Object.assign({}, currentSchema || schema, {
        keys,
        schemaPath: schemaKey
    }));
    schemaKeysFactory.add([$id].concat(keys).join("/"), schemaKey);

    return currentSchema || schema;
};
