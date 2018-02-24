/// <reference types="react" />
import { PureComponent } from "react";
import { ValidationMap } from "prop-types";
import { DefaultProps } from "../index";
import { MergeHocOutProps } from "../../hocs/merge";
import { FxUiSchema } from "../../models/index";
export interface Props extends DefaultProps, MergeHocOutProps {
    RootComponent?: any;
    uiSchemas?: Array<string | FxUiSchema>;
}
export declare class SchemaForm extends PureComponent<Props, any> {
    static propTypes: ValidationMap<Props>;
    render(): JSX.Element;
}
