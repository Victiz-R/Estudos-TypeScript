import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaHome, FaInfoCircle, FaPhone, FaBars} from 'react-icons/fa';
import { Button, Nav } from "react-bootstrap";
import "./Sidebar.css";

interface SidebarProps{
  collapsed: boolean;
  toggleSidebar: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ collapsed, toggleSidebar }) => {
  const location = useLocation();

  const menuItens = [
    { name: "Home", path: "/", icon: <FaHome />},
    { name: "Redes Sociais", path: "/Redes", icon: <FaInfoCircle/> },
    { name: "Contatos", path: "/Contato", icon: <FaPhone />},
  ];
  return (
    <div className={`sidebar ${collapsed ? "collapsed": ""}`} >
      <Button variant="primary" onClick={toggleSidebar} className='mb-3 toggle-btn'>
        <FaBars />
      </Button>

      <Nav className='flex-column'>
        {menuItens.map((item) =>(
          <Nav.Item key={item.path} className={location.pathname === item.path ? "active": ""}>
            <Link to={item.path} className='nav-link d-flex align-items-center'>
            <span className='icon me-2'>{item.icon}</span>
            {!collapsed && <span className="label">{item.name}</span>}
            </Link>
          </Nav.Item>

        ))}
      </Nav>
    </div>
  )
}

export default Sidebar