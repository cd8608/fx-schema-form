import { BaseFactory } from "fx-schema-form-core";
import { reducerFactory, hocFactory, themeFactory } from "./factory";
import { SchemaForm } from "./components";
import { NormalField, ObjectField, ArrayField } from "./fields";
import { TreeMap } from "./libs/tree";
export const defaultTheme = {
    tempFactory: new BaseFactory(),
    fieldFactory: new BaseFactory(),
    widgetFactory: new BaseFactory()
};
defaultTheme.fieldFactory.add("default", NormalField);
defaultTheme.fieldFactory.add("object", ObjectField);
defaultTheme.fieldFactory.add("array", ArrayField);
themeFactory.add("default", defaultTheme);
export { TreeMap, reducerFactory, SchemaForm, hocFactory };
//# sourceMappingURL=index.js.map