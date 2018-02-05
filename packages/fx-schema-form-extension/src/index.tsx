import schemaFormReact from "fx-schema-form-react";

import conditionHoc from "./hocs/condition";
import resetKeyHoc from "./hocs/resetkey";
import consoleHoc from "./hocs/console";
import oneOfHoc from "./hocs/oneof";
import showHoc from "./hocs/show";
import tempHoc from "./hocs/temp";

import { DesignField } from "./fields/design";



const { hocFactory, defaultTheme } = schemaFormReact;

hocFactory.add("condition", conditionHoc.bind(conditionHoc, hocFactory));
hocFactory.add("resetKey", resetKeyHoc.bind(resetKeyHoc, hocFactory));
hocFactory.add("console", consoleHoc.bind(consoleHoc, hocFactory));
hocFactory.add("oneof", oneOfHoc.bind(oneOfHoc, hocFactory));
hocFactory.add("show", showHoc.bind(showHoc, hocFactory));
hocFactory.add("extraTemp", tempHoc.bind(tempHoc, hocFactory));

defaultTheme.fieldFactory.add("design", DesignField as any);
