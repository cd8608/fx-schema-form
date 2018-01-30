import { BaseFactory } from "fx-schema-form-core";
import { reducerFactory, hocFactory } from "./factory";
import { FxReducer } from "./reducers/reducer";
import { SchemaFormActions } from "./reducers/schema.form";
import { SchemaForm, DefaultProps, RC, FxUiSchema } from "./components";
import { TreeMap } from "./libs/tree";
import { default as schemaFormDec } from "./libs/dec";
export declare const defaultTheme: {
    tempFactory: BaseFactory<RC<DefaultProps, any>>;
    fieldFactory: BaseFactory<RC<DefaultProps, any>>;
    widgetFactory: BaseFactory<RC<DefaultProps, any>>;
};
export { schemaFormDec, TreeMap, FxReducer, FxUiSchema, SchemaFormActions, reducerFactory, SchemaForm, hocFactory, DefaultProps };