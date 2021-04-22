import React, { ReactElement, InputHTMLAttributes } from "react";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
declare type InputSize = "lg" | "sm";
export interface InputProps extends Omit<InputHTMLAttributes<HTMLElement>, "size"> {
    disabled?: boolean;
    size?: InputSize;
    icon?: IconProp;
    prepend?: ReactElement;
    append?: ReactElement;
}
export declare const Input: React.FC<InputProps>;
export {};
