import axios from 'axios';
import {Credentials, RegisterCredentials} from "../screens/RegisterScreen";

const API_KEY = "AIzaSyDD2Viu1d9yG8It5kSBrCHa3BaKu_rZj6g";
const URL = "https://identitytoolkit.googleapis.com/v1/accounts:";


type Mode = "signUp" | "signInWithPassword"

export const authenticate = async({mode, email, password, username}:(Credentials|RegisterCredentials)&{mode:Mode}) => {
    const address = `${URL}${mode}?key=${API_KEY}`;
    const response = await axios.post(address,{email, password, username, returnSecureToken:true})

    console.log(response.data.idToken);
    return response.data.idToken;
}

export const createUser = ({email, password,username}:RegisterCredentials) => {
    return authenticate({mode:"signUp", email, password, username})
}

export const loginUser = ({email, password}:Credentials) => {
    return authenticate({mode:"signInWithPassword", email, password});
};