import React, { useState, useContext, FunctionComponentElement } from "react";
import classNames from "classnames";
import { MenuContext } from "./menu";
import { MenuItemProps } from "./menuItem";

export interface SubMenuProps {
  index?: string;
  title: string;
  className?: string;
}

const SubMenu: React.FC<SubMenuProps> = ({
  index,
  title,
  className,
  children,
}) => {
  const context = useContext(MenuContext);
  const openSubMenus = context.defaultOpenSubMenus as Array<string>; //defaultOpenSubMenus不需要undefined 所以直接断言成数组
  const isOpened =
    index && context.mode === "vertical" ? openSubMenus.includes(index) : false;
  const [menuOpen, setOpen] = useState(isOpened);
  const classes = classNames("menu-item submenu-item", className, {
    "is-active": context.index === index,
  });
  let timer: any;
  const handleMouse = (e: React.MouseEvent, toggle: boolean) => {
    clearTimeout(timer);
    e.preventDefault();
    timer = setTimeout(() => {
      setOpen(toggle);
    }, 300);
  };
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setOpen(!menuOpen);
  };
  const clickEvents =
    context.mode === "vertical" ? { onClick: handleClick } : {};
  const hoverEvents =
    context.mode !== "vertical"
      ? {
          onMouseEnter: (e: React.MouseEvent) => {
            handleMouse(e, true);
          },
          onMouseLeave: (e: React.MouseEvent) => {
            handleMouse(e, false);
          },
        }
      : {};
  const renderChildren = () => {
    //一样的 subMenu里面只能有menu.item
    const submenuClasses = classNames("masa-submenu", {
      "menu-opened": menuOpen,
    });
    const childrenComponent = React.Children.map(children, (child, i) => {
      const childElement = child as FunctionComponentElement<MenuItemProps>;
      if (childElement.type.displayName === "MenuItem") {
        return React.cloneElement(childElement, { index: `${index}-${i}` });
      } else {
        console.error(
          "warning:menu has a child which is not a menuItem component"
        );
      }
    });
    return <ul className={submenuClasses}>{childrenComponent}</ul>;
  };
  return (
    <li key={index} className={classes} {...hoverEvents}>
      <div className="submenu-item" {...clickEvents}>
        {title}
      </div>
      {renderChildren()}
    </li>
  );
};

SubMenu.displayName = "SubMenu";

export default SubMenu;
