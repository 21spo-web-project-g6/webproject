import { Sidebar, Menu, MenuItem, useProSidebar } from 'react-pro-sidebar';

function SideNavBar() {
  const { collapseSidebar } = useProSidebar();

  return (
    <div style={{ backgroundColor: "var(--main-bg-color)", display: 'flex', height: '100vh' }}>
      <Sidebar>
        <Menu>
          <MenuItem> Documentation</MenuItem>
          <MenuItem> Calendar</MenuItem>
          <MenuItem> E-commerce</MenuItem>
        </Menu>
      </Sidebar>
      <main>
        <button onClick={() => collapseSidebar()}>Collapse</button>
      </main>
    </div>
  );
}

export default SideNavBar;

// import { useState } from 'react';
// import { Link } from 'react-router-dom';
// import { SidebarData } from './SidebarData';
// import './SideNavBar.css'


// const SideNavBar = () => {
//     const [isExpanded, setIsExpanded] = useState(false)
//     return (
//         <div className="side-nav-container">
//             <div className="nav-upper">
//                 <div className="nav-heading">
//                     <div className="nav-brand">
//                         <embed src="icons/logo.svg" alt="logo" />
//                         <h2>ClimateApp</h2>
//                     </div>
//                     <button
//                         className={
//                             isExpanded ? "hamburger hamburger-in" : "hamburger hamburger-out"
//                         }

//                         onClick={() => setIsExpanded(!isExpanded)}
//                     >
//                         <span></span>
//                         <span></span>
//                         <span></span>
//                     </button>
//                 </div>
//                 <div className="nav-menu">
//                     {SidebarData.map((item, i) => {
//                         return (
//                             <li key={i} className="row" >
//                                 <Link to={item.path}>
//                                     {item.icon}
//                                     <span>{item.title}</span>
//                                 </Link>
//                             </li>
//                         )
//                     })}
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default SideNavBar;