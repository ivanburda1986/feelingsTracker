import {FC} from "react";
import {Pressable, View, Text} from "react-native";
import { Ionicons } from '@expo/vector-icons';
interface Props{
    icon:keyof typeof Ionicons.glyphMap;
    color?:string;
    size: number;
    onPress?: ()=>void;
}

export const IconButton:FC<Props> = ({icon, color, size, onPress}) => {
    return(<View><Pressable onPress={onPress} ><Ionicons name={icon} color={color} size={size}/></Pressable></View>)
}