import {FC} from 'react';
import {View, Image, StyleSheet} from "react-native";


export const LandingPage: FC = () => {
    return (
<View>
    <Image source={require('../assets/logo.png')} style={styles.logo}/>
</View>
    );
};

const styles = StyleSheet.create({
    logo:{
        width: 200,
        height: 200,
        borderRadius: 100,
    }
})