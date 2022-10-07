import axios from "axios";


export const  GET_USER = "GET_USER";

/* je  vais récupérer mes utilisateur avec en param mon uid
 et je return,je dispatch au reducer qui va les transmettre au store */
export const getUser = (uid) => {
    return (dispatch) => {
    return axios
    .get(`${process.env.REACT_APP_API_URL}api/user/${uid}`)
    .then((res) => {
        dispatch({ type: GET_USER, payload: res.data});
    })
    .catch((err) => console.log(err));
    };
};

