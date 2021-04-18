import React,{FC,ButtonHTMLAttributes,AnchorHTMLAttributes,ReactNode} from "react";
import classNames from "classnames";

export enum ButtonSize {
  Large = "lg",
  Small = "sm",
}

export enum ButtonType {
  Primary = "primary",
  Default = "default",
  Danger = "danger",
  Link = "link",
}

interface BaseButtonProps {
  className?: string;
  disabled?: boolean;
  size?: ButtonSize;
  btnType?: ButtonType;
  children: ReactNode;
  href?: string;
}

//button的所有原生属性 加上 BaseButtonProps 形成一个新的类型
type NativeButtonProps = BaseButtonProps &
  ButtonHTMLAttributes<HTMLElement>;
type AnchorButtonProps = BaseButtonProps &
  AnchorHTMLAttributes<HTMLElement>;
//ts中 Partial可以将所有参数变成可选
export type ButtonProps = Partial<NativeButtonProps & AnchorButtonProps>;

export const Button: FC<ButtonProps> = (props) => {
  const {
    className,
    btnType,
    disabled,
    size,
    children,
    href,
    ...restProps
  } = props;

  //btn btn-lg btn-primary
  const classes = classNames("btn", className, {
    [`btn-${btnType}`]: btnType,
    [`btn-${size}`]: size,
    disabled: btnType === ButtonType.Link && disabled, //a标签 通过类加disabled button标签通过属性加disabled
  });

  if (btnType === ButtonType.Link && href) {
    return (
      <a className={classes} href={href} {...restProps}>
        {children}
      </a>
    );
  } else {
    return (
      <button className={classes} disabled={disabled} {...restProps}>
        {children}
      </button>
    );
  }
};

Button.defaultProps = {
  disabled: false,
  btnType: ButtonType.Default,
};

export default Button;
