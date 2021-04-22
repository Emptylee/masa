var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import React, { useState, useContext } from "react";
import classNames from "classnames";
import { MenuContext } from "./menu";
var SubMenu = function (_a) {
    var index = _a.index, title = _a.title, className = _a.className, children = _a.children;
    var context = useContext(MenuContext);
    var openSubMenus = context.defaultOpenSubMenus; //defaultOpenSubMenus不需要undefined 所以直接断言成数组
    var isOpened = index && context.mode === "vertical" ? openSubMenus.includes(index) : false;
    var _b = useState(isOpened), menuOpen = _b[0], setOpen = _b[1];
    var classes = classNames("menu-item submenu-item", className, {
        "is-active": context.index === index,
    });
    var timer;
    var handleMouse = function (e, toggle) {
        clearTimeout(timer);
        e.preventDefault();
        timer = setTimeout(function () {
            setOpen(toggle);
        }, 300);
    };
    var handleClick = function (e) {
        e.preventDefault();
        setOpen(!menuOpen);
    };
    var clickEvents = context.mode === "vertical" ? { onClick: handleClick } : {};
    var hoverEvents = context.mode !== "vertical"
        ? {
            onMouseEnter: function (e) {
                handleMouse(e, true);
            },
            onMouseLeave: function (e) {
                handleMouse(e, false);
            },
        }
        : {};
    var renderChildren = function () {
        //一样的 subMenu里面只能有menu.item
        var submenuClasses = classNames("masa-submenu", {
            "menu-opened": menuOpen,
        });
        var childrenComponent = React.Children.map(children, function (child, i) {
            var childElement = child;
            if (childElement.type.displayName === "MenuItem") {
                return React.cloneElement(childElement, { index: index + "-" + i });
            }
            else {
                console.error("warning:menu has a child which is not a menuItem component");
            }
        });
        return React.createElement("ul", { className: submenuClasses }, childrenComponent);
    };
    return (React.createElement("li", __assign({ key: index, className: classes }, hoverEvents),
        React.createElement("div", __assign({ className: "submenu-item" }, clickEvents), title),
        renderChildren()));
};
SubMenu.displayName = "SubMenu";
export default SubMenu;
