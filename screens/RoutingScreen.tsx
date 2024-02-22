import {FC} from 'react';
import {StyleSheet} from "react-native";
import {NavigationBottomTabs} from "../components/NavigationBottomTabs/NavigationBottomTabs";


export const RoutingScreen: FC = () => {
    return (
        <NavigationBottomTabs/>
    );
};

const styles = StyleSheet.create({
    addFeelingScreen:{
        flex: 1,
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:'azure'

    },
    buttonContainer:{
        width: "80%",
        borderRadius: 10,
        overflow:"hidden",
        marginBottom: 10
    }
})