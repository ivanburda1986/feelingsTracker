import {FC, useState} from 'react';
import {Button, View, Text} from "react-native";
import {InputField} from "../components/InputField/InputField";
import {isEmailValid} from "../utils/isEmailValid";
import {isPasswordValid} from "../utils/isPasswordValid";
import {isUsernameValid} from "../utils/isUsernameValid";
import {sharedStyles} from "../styles";
import {Credentials, RegisterCredentials} from "./RegisterScreen";

interface Props {
    onSubmit: ({email, password, username}:RegisterCredentials)=>void;
}


type InputFields = 'email'|'password'|'username'

export const RegisterForm: FC<Props> = ({onSubmit}) => {
const [email, setEmail] = useState('');
const [emailValidity, setEmailValidity] = useState(true);
const [password, setPassword] = useState('');
const [passwordValidity, setPasswordValidity] = useState(true);
const [username, setUsername] = useState('');
const [usernameValidity, setUsernameValidity] = useState(true);

    const inputChangedHandler = (inputIdentifier:InputFields, enteredValue:string) => {
        if(inputIdentifier === 'email'){
            setEmail(enteredValue)
        }
        if(inputIdentifier === 'password'){
            setPassword(enteredValue)
        }
        if(inputIdentifier === 'username'){
            setUsername(enteredValue)
        }
    };

    const submitHandler = () => {
        const emailIsValid = isEmailValid(email) ;
        const passWordIsValid = isPasswordValid(password);
        const usernameIsValid = isUsernameValid(username);

        if(!emailIsValid ||!passWordIsValid||!usernameIsValid){
            setEmailValidity(emailIsValid);
            setPasswordValidity(passWordIsValid);
            setUsernameValidity(usernameIsValid)
            return;
        }
        setEmailValidity(emailIsValid);
        setPasswordValidity(passWordIsValid);
        setUsernameValidity(usernameIsValid)

        onSubmit({email,password,username})
    };

   const isFormValid = emailValidity && passwordValidity && usernameValidity;

    return (
        <View>
            <InputField label={"Email"} textInputConfig={{
                autoCapitalize:'none',
                keyboardType: "email-address",
                onChangeText: (fieldValue:string) =>
                    inputChangedHandler("email", fieldValue),
                value: email,
            }} invalid={emailValidity}/>
            <InputField label={"Password"} textInputConfig={{
                autoCapitalize:'none',
                keyboardType: "default",
                onChangeText: (fieldValue:string) =>
                    inputChangedHandler("password", fieldValue),
                value: password,
                secureTextEntry:false
            }} invalid={passwordValidity}/>
            <InputField label={"Username"} textInputConfig={{
                autoCapitalize:'none',
                keyboardType: "default",
                onChangeText: (fieldValue:string) =>
                    inputChangedHandler("username", fieldValue),
                value: username,
            }} invalid={usernameValidity}/>
            {!isFormValid&&(<Text style={sharedStyles.errorText}>Please, correct entered details.</Text>)}
            <Button title={"Confirm"} color="seagreen" onPress={submitHandler}/>
        </View>
    );
};