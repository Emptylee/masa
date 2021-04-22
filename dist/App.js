import React from "react";
import Menu from "./components/Menu/menu";
import MenuItem from "./components/Menu/menuItem";
import SubMenu from "./components/Menu/subMenu";
import Icon from './components/Icon/icon';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
library.add(fas);
function App() {
    return (React.createElement("div", { className: "App" },
        React.createElement("header", { className: "App-header" },
            React.createElement(Icon, { icon: "arrow-down", theme: "danger", size: "10x" }),
            React.createElement(Menu, { onSelect: function (index) { return console.log(index); }, defaultOpenSubMenus: ["3"] },
                React.createElement(MenuItem, null, "cool1"),
                React.createElement(MenuItem, { disabled: true }, "cool2"),
                React.createElement(MenuItem, null, "cool3"),
                React.createElement(SubMenu, { title: "dropdown" },
                    React.createElement(MenuItem, null, "dropdown1"),
                    React.createElement(MenuItem, null, "dropdown2"),
                    React.createElement(MenuItem, null, "dropdown3"))))));
}
export default App;
