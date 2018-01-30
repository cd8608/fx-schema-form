import { RC, DefaultProps } from "../components";
import { TreeMap } from "./tree";
export interface SchemaFormHocOutProps {
    validateAll: () => Promise<any>;
}
export interface SchemaFormHocSettings {
    rootReducerKey?: string[];
    parentKeys?: string[];
}
export interface SchemaFormProps extends DefaultProps {
    root?: TreeMap;
    data?: any;
}
declare const _default: (settings?: SchemaFormHocSettings) => (Component: any) => RC<SchemaFormProps, any>;
export default _default;