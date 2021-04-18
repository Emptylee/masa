import { FC } from "react";
import Menu, { MenuProps } from "./menu";
import SubMenu, { SubMenuProps } from "./subMenu";
import MenuItem, { MenuItemProps } from "./menuItem";

export type IMenuComponent = FC<MenuProps> & {
  Item: FC<MenuItemProps>;
  SubMenu: FC<SubMenuProps>;
};
const TransMenu = Menu as IMenuComponent;

//经过断言后就可以给TransMenu添加属性 这样在主文件中只要导入Menu 不用导入MenuItem和SubMenu了
TransMenu.Item = MenuItem;
TransMenu.SubMenu = SubMenu;

export default TransMenu;
