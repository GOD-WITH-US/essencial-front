// == Import dépendances
import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { UidContext } from "./AppContext";
import { useSelector } from "react-redux";

// == Import Composants
import Logout from "./Log/Logout";

// data, styles et utilitaires
import logonav from "../media/logo-nav.svg";
import login from "../media/icons/login.svg";

const Navbar = () => {
  const uid = useContext(UidContext);
  /* je récupére mes userData grace au hook useSelector*/
  const userData = useSelector((state) => state.userReducer );

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
              {/* on consomme notre data sous la forme d'une valeur dynamique {userData.pseudo }*/}
              <h5>Bienvenue {userData.pseudo}</h5>
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
