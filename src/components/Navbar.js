// == Import dépendances
import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { UidContext } from "./AppContext";

// == Import Composants

// data, styles et utilitaires
import logonav from "../media/logo-nav.svg";
import login from "../media/icons/login.svg";
import Logout from "./Log/Logout";

const Navbar = () => {
  const uid = useContext(UidContext);
  

  return (
    <nav>
      <div className="nav-container">
        <NavLink to="/">
          <div className="logo">
            <img src={logonav} alt="logo navbar" />
          </div>
        </NavLink>
      
      {uid ? (
        <ul>
          <li></li>
          <li className="welcome">
            <NavLink to="/profil">
              <h5>Bienvenue 'valeur dynamique'</h5>
            </NavLink>
          </li>
         <Logout />
        </ul>
      ) : (
        <ul>
          <li></li>
          <li>
            <NavLink to="/profil">
              <img src={login} alt="login" />
            </NavLink>
          </li>
        </ul>
      )}
      </div>
    </nav>
  );
};

export default Navbar;
