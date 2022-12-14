import { Sidebar, Menu, MenuItem, useProSidebar, sidebarClasses } from 'react-pro-sidebar';
import { Link } from 'react-router-dom';
import { SidebarData } from './SidebarData'
import './sidebar.css'

function SideNavBar() {
  const { collapseSidebar } = useProSidebar();

  return (
    <div style={{ display: 'flex', height: '100vh', position: 'fixed'}}>
      <Sidebar
        defaultCollapsed={true}
        collapsedWidth={'0px'}
        width={'240px'}
        rootStyles={{
          [`.${sidebarClasses.container}`]: {
            backgroundColor: "white",
            fontSize: "1.5em"
          },
        }}
      >
        <Menu>
          {SidebarData.map((item, index) => {
            return (
              <MenuItem routerLink={<Link to={item.path} />} key={index}>
                {item.icon}
                <div id="title">{item.title}</div>
              </MenuItem>
            )
          })}
        </Menu>
      </Sidebar>
      <main>
        <button onClick={() => collapseSidebar()}>Menu</button>
      </main>
    </div>
  );
}

export default SideNavBar;