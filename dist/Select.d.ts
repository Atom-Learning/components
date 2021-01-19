export declare type Option = {
    label: string;
    value: string;
};
export declare type SelectProps = {
    name: string;
    options: Array<Option>;
    placeholder?: string;
    ref: any;
};
export declare const Select: {
    ({ options, placeholder, name, ref, ...rest }: SelectProps): JSX.Element;
    displayName: string;
};
export declare const Thing: () => JSX.Element;
