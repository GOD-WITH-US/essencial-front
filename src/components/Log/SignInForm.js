// == Import dépendances
import React, { useState } from "react";
import axios from "axios";

const SignInForm = () => {
  /* Je déclare deux nouvelles variables d'état, que l'on va appeler email et password
     et qui contiennent des string vide que je vais remplir quand l'user saisi du texte dans l'input*/
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    /* j'initialise deux var que je vais utiliser pour mes message d'erreur 
    elle seront remplie avec un innerHtml dans mon .then */
    const emailError = document.querySelector(".email.error");
    const passwordError = document.querySelector(".password.error");

    /* methode axios pour joindre mon API a /login */
    axios({
      method: "post",
      url: `${process.env.REACT_APP_API_URL}api/user/login`,
      withCredentials: true,
      data: {
        email,
        password,
      },
    })
      .then((res) => {
        console.log(res);
        if (res.data.errors) {
          /* si il y a une erreur j'insere le contenu de ma variable ici avec innerHtml */
          emailError.innerHTML = res.data.errors.email;
          passwordError.innerHTML = res.data.errors.password;
        } else {
          /* si c'est ok on est co retour donc retour acceuil */
          window.location = "/";
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <form action="" onSubmit={handleLogin} id="sign-up-form">
      <label htmlFor="email">Email</label>
      <br />
      {/* je crée un input et a l'aide d'une flechée je récupére la valeur de mon input au changement
             et je la stock */}
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
      <input type="submit" value="Se connecter" />
    </form>
  );
};

export default SignInForm;
