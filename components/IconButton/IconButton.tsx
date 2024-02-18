import {FC} from "react";
import {Pressable, View, Text, StyleSheet} from "react-native";
import { Ionicons } from '@expo/vector-icons';
import {Colors} from "../../constants/colors";
interface Props{
    icon:keyof typeof Ionicons.glyphMap;
    label?: string;
    color?:string;
    size: number;
    onPress?: ()=>void;
}

export const IconButton:FC<Props> = ({icon, color,label, size, onPress}) => {
    return(<View style={styles.button}><Pressable style={styles.button}  onPress={onPress}><Text style={styles.text}>{label}</Text><Ionicons name={icon} color={color} size={size}/></Pressable></View>)
}

const styles = StyleSheet.create({
    button:{
      justifyContent:"center",
      alignItems:"center",
        flexDirection:"row",

    },
    text: {
        color: Colors.primary500,
        fontSize: 16,
        marginRight: 3,
        fontWeight: "bold"
    }
})