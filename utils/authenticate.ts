import axios from 'axios';
import {Credentials, RegisterCredentials} from "../screens/RegisterScreen";

const API_KEY = "AIzaSyC8_pdlNlnq_Sj3CxhoG1PY7o2PifWMMMI";
const URL = "https://identitytoolkit.googleapis.com/v1/accounts:";


type Mode = "signUp" | "signInWithPassword"

export const authenticate = async({mode, email, password}:(Credentials|RegisterCredentials)&{mode:Mode}) => {
    const address = `${URL}${mode}?key=${API_KEY}`;
    const response = await axios.post(address,{email, password, returnSecureToken:true})

    console.log(response.data.idToken);
    return response.data.idToken;
}

export const createUser = ({email, password,username}:RegisterCredentials) => {
    return authenticate({mode:"signUp", email, password, username})
}

export const loginUser = ({email, password}:Credentials) => {
    return authenticate({mode:"signInWithPassword", email, password});
};