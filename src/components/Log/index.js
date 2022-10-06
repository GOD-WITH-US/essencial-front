// == Import dépendances 
import React, { useState } from "react";
// == Import Composants
import SignUpForm from "./SignUpForm";
import SignInForm from "./SignInForm";

/* ici je passe mes props en parametre(props) */
const Log = (props) => {

  /* ici je crée la logique du switch entre s'inscrire et se connecter.  
Je crée les setters pour modifier le state et je choisi un état initial. 
 Je crée le handle (bascule) avec comme réference la target de l'èvenement, 
 qui à comme reference l'id du lien attaché au onClick. 
 Pour finir je dit que si {signUpModal} est true j'affiche signUpForm. 
 Si c'est{signInModal} qui est true alors j'affiche signInForm. */

  const [signUpModal, setsignUpModal] = useState(props.signup);
  const [signInModal, setsignInModal] = useState(props.signin);
 /* ici deuxieme point je passe mes props avec props. */

  const handleModals = (e) => {
    if (e.target.id === "register") {
      setsignInModal(false);
      setsignUpModal(true);
    } else if (e.target.id === "login") {
      setsignInModal(true);
      setsignUpModal(false);
    }
  };

  return (
    <div className="connection-form">
      <div className="form-container">
        <ul>
          <li 
          onClick={handleModals}
          id="register"
          /* ici je rajoute une classe si signUpModal passe a true
          {signUpModal ? "active-btn" : null} */
          className={signUpModal ? "active-btn" : null}
          >
         
     
            S'inscrire
          </li>
          <li 
          onClick={handleModals}
          id="login"
          className={signInModal ? "active-btn" : null}
          >
            Se connecter
          </li>
        </ul>
        {signUpModal && <SignUpForm />}
        {signInModal && <SignInForm />}
      </div>
    </div>
  );
};

export default Log;
