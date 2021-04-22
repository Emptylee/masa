import Menu from "./menu";
import SubMenu from "./subMenu";
import MenuItem from "./menuItem";
var TransMenu = Menu;
//经过断言后就可以给TransMenu添加属性 这样在主文件中只要导入Menu 不用导入MenuItem和SubMenu了
TransMenu.Item = MenuItem;
TransMenu.SubMenu = SubMenu;
export default TransMenu;
