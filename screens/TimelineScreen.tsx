import {FC} from 'react';
import {StyleSheet, Text, View} from "react-native";
import {sharedStyles} from "../styles";


export const TimelineScreen: FC = () => {
    return (
        <View style={styles.timelineScreen}>
            <Text style={sharedStyles.header1}>Timeline</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    timelineScreen:{
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