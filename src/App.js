// == Import Dépendances
import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import axios from "axios";
import Navbar from "./components/Navbar";

// == Import Pages
import Home from "./pages/Home";
import Profil from "./pages/Profil";
import Trending from "./pages/Trending";
import error404 from "./pages/error404";
// == Import Composants
import { UidContext } from "./components/AppContext";

const App = () => {
  /* Je déclare une nouvelle variable d'état avec une valeur a null  */
  const [uid, setUid] = useState(null);

  /* en utilisant useEffect avec le context je rend disponible l'id de l'utilisateur partout dans mon app */
  useEffect(() => {
    const fetchToken = async () => {
      await axios({
        method: "get",
        url: `${process.env.REACT_APP_API_URL}jwtid`,
        withCredentials: true,
      })
        .then((res) => {
          /* console.log(res.data); je récupére bien mon id  */
          setUid(res.data);
        })
        .catch((err) => console.log("No token"));
    };
    fetchToken();
  }, [uid]);

  return (
    <div className="App">
      {/* https://reactjs.org/docs/context.html 
      En utilisant le contexte, j'évite de passer des props à travers des éléments intermédiaires*/}
      <UidContext.Provider value={uid}>
        <div className="header">
          <Navbar />
        </div>

        <div className="Routing">
          <Routes>
            <Route path="/" element={Home()} />
            <Route path="/profil" element={Profil()} />
            <Route path="/trending" element={Trending()} />
            <Route path="*" element={error404()} />
          </Routes>
        </div>
      </UidContext.Provider>
    </div>
  );
};

export default App;
