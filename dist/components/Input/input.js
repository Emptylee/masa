import React from "react";
import classNames from "classnames";
export var Input = function (props) {
    //取出属性
    var disabled = props.disabled, size = props.size, icon = props.icon, prepend = props.prepend, append = props.append;
    //根据属性计算不同className
    var classes = classNames();
    return (
    //根据属性返回特定节点
    React.createElement(React.Fragment, null,
        React.createElement("input", { type: "text", className: classes, disabled: disabled })));
};
