declare const _default: {
    type: string;
    $id: string;
    title: string;
    default: {};
    required: string[];
    properties: {
        type: {
            type: string;
            enum: number[];
            title: string;
            description: string;
        };
        value: {
            oneOf: ({
                $id: string;
                type: string;
                title: string;
                default?: undefined;
                required?: undefined;
                properties?: undefined;
            } | {
                $id: string;
                type: string;
                title: string;
                default: {};
                required: string[];
                properties: {
                    a: {
                        type: string;
                    };
                    b: {
                        type: string;
                    };
                };
            })[];
        };
    };
};
export default _default;
