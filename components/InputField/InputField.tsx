import {FC} from 'react';
import {KeyboardType, StyleSheet, Text, TextInput, View} from "react-native";
import {Colors} from "../../constants/colors";
import {TextInputProps} from "react-native/Libraries/Components/TextInput/TextInput";

interface TextInputConfig {
    keyboardType: KeyboardType;
    onChangeText: (fieldValue:string)=>void;
    value:string;
    secureTextEntry?:boolean;
    autoCapitalize?: TextInputProps['autoCapitalize'];
}

interface Props {
    label:string;
    textInputConfig:TextInputConfig
    invalid:boolean;
}

export const InputField: FC<Props> = ({label, textInputConfig, invalid}) => {
    let textInputStyles:any = [styles.inputField];

    if(!invalid){
        textInputStyles.push(styles.invalidInputField)
    }else{
        textInputStyles = [styles.inputField];
    }

    return (
        <View>
            <Text style={styles.label}>{label}</Text>
            <TextInput style={textInputStyles} {...textInputConfig} />
        </View>
    );
};

export const styles = StyleSheet.create({
    label:{
        color: Colors.primary500,
        fontWeight:"bold"
    },
    inputField:{
        width: 300,
        maxWidth: 300,
        marginVertical:8,
        paddingHorizontal:8,
        paddingVertical:8,
        fontSize:16,
        borderRadius: 10,
        borderBottomColor: Colors.primary500,
        borderBottomWidth: 2,
        backgroundColor: Colors.bgSecondary,
    },
    invalidInputField:{
        borderBottomColor: Colors.danger,
    }
})