import React from "react";
import "./navbar.css";
import { Link, useLocation } from "react-router-dom";
import { FaHome, FaUsers, FaPhone } from "react-icons/fa";

const Navbar: React.FC = () => {
  const location = useLocation();

  const menuItens = [
    { name: "Home", path: "/", icon: <FaHome /> },
    { name: "Redes Sociais", path: "/redes", icon: <FaUsers /> },
    { name: "Contatos", path: "/contato", icon: <FaPhone /> },
  ];

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          Meu site
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            {menuItens.map((item) => (
              <li
                key={item.path}
                className={`nav-item ${
                  location.pathname === item.path ? "active" : ""
                }`}
              >
                <Link
                  to={item.path}
                  className="nav-link d-flex align-items-center"
                >
                  <span className="me-2">{item.icon}</span>
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
