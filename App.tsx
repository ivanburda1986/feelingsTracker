import {StatusBar} from 'expo-status-bar';
import {View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {LandingScreen} from "./screens/LandingScreen";
import {RegisterScreen} from "./screens/RegisterScreen";

function Navigation(){
  return <NavigationContainer>
    {/*<LandingScreen/>*/}
    <RegisterScreen/>
  </NavigationContainer>
}

function Root(){
  return(<View style={{ flex: 1 }}>
    <Navigation/>
  </View>)
}

export default function App() {
  return (
   <>
   <StatusBar style="light"/>
     <Root/>
   </>
  );
}