import {FC} from 'react';
import {ActivityIndicator, StyleSheet, Text, View} from "react-native";

interface Props {
    message: string;
}

export const LoadingOverlay: FC<Props> = ({message}) => (
    <View style={styles.container}>
        <Text style={styles.message}>{message}</Text>
        <ActivityIndicator size={"large"}/>
    </View>
);

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center",
        alignItems:"center",
        padding: 32
    },
    message:{
        fontSize: 16,
        marginBottom:12
    }
})