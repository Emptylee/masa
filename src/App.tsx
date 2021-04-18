import React from "react";
import Button, { ButtonSize, ButtonType } from "./components/Button/button";
import Menu from "./components/Menu/menu";
import MenuItem from "./components/Menu/menuItem";
import SubMenu from "./components/Menu/subMenu";
import Icon from './components/Icon/icon'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
library.add(fas)

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Icon icon="arrow-down" theme="danger" size="10x" />
        {/* <Button disabled>hello</Button>
        <Button
          onClick={(e) => {
            e.preventDefault();
            alert("213");
          }}
          btnType={ButtonType.Default}
        >
          hello
        </Button>
        <Button btnType={ButtonType.Danger}>hello</Button>
        <Button btnType={ButtonType.Primary} size={ButtonSize.Large}>
          hello
        </Button>
        <Button disabled btnType={ButtonType.Link} href="http://www.baidu.com">
          LInk
        </Button> */}
        <Menu
          onSelect={(index) => console.log(index)}
          defaultOpenSubMenus={["3"]}
          
        >
          <MenuItem>cool1</MenuItem>
          <MenuItem disabled>cool2</MenuItem>
          <MenuItem>cool3</MenuItem>
          <SubMenu title="dropdown">
            <MenuItem>dropdown1</MenuItem>
            <MenuItem>dropdown2</MenuItem>
            <MenuItem>dropdown3</MenuItem>
          </SubMenu>
        </Menu>
      </header>
    </div>
  );
}

export default App;
