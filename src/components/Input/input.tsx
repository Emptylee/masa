import React, { ReactElement, InputHTMLAttributes } from "react";
import classNames from "classnames";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

type InputSize = "lg" | "sm";
export interface InputProps
  extends Omit<InputHTMLAttributes<HTMLElement>, "size"> {
  //用omit来忽略原生input类型中的size属性 避免与新增的size属性在类型上有矛盾
  disabled?: boolean;
  size?: InputSize;
  icon?: IconProp;
  prepend?: ReactElement;
  append?: ReactElement;
}

export const Input:React.FC<InputProps> = (props)=>{
    //取出属性
    const {disabled,size,icon,prepend,append} = props;
    //根据属性计算不同className
    const classes = classNames()
    return (
        //根据属性返回特定节点
        <>
            <input type="text" className={classes} disabled={disabled} />
        </>
    )
}