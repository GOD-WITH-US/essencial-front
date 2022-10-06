// == Import dépendances
import React, { useState } from "react";
import axios from "axios";

// == Import Composants
import SignInForm from "./SignInForm";

const SignUpForm = () => {
  /* Je déclare quatre nouvelles variables d'état,qui contiennent des string vide 
   je vais les remplir quand l'user saisi du texte dans l'input*/
  const [formSubmit, setFormSubmit] = useState(false);
  const [pseudo, setPseudo] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [controlPassword, setControlPassword] = useState("");

  /* handle pour prendre en compte l'enregistrement de notre user 
    j'initialise des variables que je vais utiliser pour mes message d'erreur 
    elle seront remplie avec un innerHtml */
  const handleRegister = async (e) => {
    e.preventDefault();
    const terms = document.getElementById("terms");
    const pseudoError = document.querySelector(".pseudo.error");
    const emailError = document.querySelector(".email.error");
    const passwordError = document.querySelector(".password.error");
    const passwordConfirmError = document.querySelector(
      ".password-confirm.error"
    );
    const termsError = document.querySelector(".terms.error");

    /* on réinjecte des strings vide au submit pour supprimer les messages d'erreur apres soumissions du form */
    passwordConfirmError.innerHTML = "";
    termsError.innerHTML = "";

    /* si password n'est pas egal(!==)a controlPassword ou bien (||) différent (!) de terms.checked on stop envoi d'erreur*/
    if (password !== controlPassword || !terms.checked) {
      /* si l'erreur correspond a password n'est pas egal(!==)a controlPassword je renvoi le texte d'erreur*/
      if (password !== controlPassword)
        passwordConfirmError.innerHTML =
          "Les mots de passe ne correspondent pas";

      if (!terms.checked)
        /* si l'erreur correspond a  différent de terms.checked a controlPassword je renvoi le texte d'erreur*/
        termsError.innerHTML = "Veuillez valider les conditions générales";
    } else {
      /* methode axios pour joindre mon API a /register */
      await axios({
        method: "post",
        url: `${process.env.REACT_APP_API_URL}api/user/register`,
        data: {
          pseudo,
          email,
          password,
        },
      })
        .then((res) => {
          console.log(res);
          if (res.data.errors) {
            pseudoError.innerHTML = res.data.errors.pseudo;
            emailError.innerHTML = res.data.errors.email;
            passwordError.innerHTML = res.data.errors.password;
          } else {
            setFormSubmit(true);
          }
        })
        .catch((err) => console.log(err));
    }
  };
  return (
    /* je met un fragment pour avoir ma balise supérieure et je dit que si formsubmit 
    est true alors j'appel signin form et le texte l'invitant a se connecter  */
    <>
      {formSubmit ? (
        <>
          <SignInForm />
          <span></span>
          <h4 className="success">
            Enregistrement réussi, veuillez-vous connecter
          </h4>
        </>
      ) : (
        <form action="" onSubmit={handleRegister} id="sign-up-form">
          <label htmlFor="pseudo">Pseudo</label>
          <br />
          <input
            type="text"
            name="pseudo"
            id="pseudo"
            onChange={(e) => setPseudo(e.target.value)}
            value={pseudo}
          />
          <div className="pseudo error"></div>
          <br />
          <label htmlFor="email">Email</label>
          <br />
          <input
            type="text"
            name="email"
            id="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
          <div className="email error"></div>
          <br />
          <label htmlFor="password">Mot de passe</label>
          <br />
          <input
            type="password"
            name="password"
            id="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
          <div className="password error"></div>
          <br />
          {/* confirmation de mot de passe  */}
          <label htmlFor="password-conf">Confirmer mot de passe</label>
          <br />
          <input
            type="password"
            name="password"
            id="password-conf"
            onChange={(e) => setControlPassword(e.target.value)}
            value={controlPassword}
          />
          <div className="password-confirm error"></div>
          <br />
          {/* acceptation conditions générales avec une checkbox */}
          <input type="checkbox" id="terms" />
          <label htmlFor="terms">
            J'accepte les{" "}
            <a href="/" target="_blank" rel="noopener noreferrer">
              conditions générales
            </a>
          </label>
          <div className="terms error"></div>
          <br />
          <input type="submit" value="Valider inscription" />
        </form>
      )}
    </>
  );
};

export default SignUpForm;
