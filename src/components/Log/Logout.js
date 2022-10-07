// == Import dépendances 
import React from 'react';
import axios from 'axios';
import cookie from 'js-cookie';

// data, styles et utilitaires
import logouticon from "../../media/icons/logout.svg"


const Logout = () => {
  /* fonction qui permet de retirer le cookie en donnant le jwt en key-param */
    const removeCookie = (key) => {
      if (window !== "undefined") {
        cookie.remove(key, { expires: 1 });
      }
    };
  /* methode axios pour joindre mon API a /logout */
    const logout = async () => {
      await axios({
        method: "get",
        url: `${process.env.REACT_APP_API_URL}api/user/logout`,
        withCredentials: true,
      })
        .then(() => removeCookie("jwt"))
        .catch((err) => console.log(err));
      
      window.location = "/";
    };
  
    return (
      <div className="Logout-container">
      <li onClick={logout} >
          <img src={logouticon} alt="logout" />
      </li>
  </div>
    );
  };
  
  export default Logout;