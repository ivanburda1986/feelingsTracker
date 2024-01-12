import {StatusBar} from 'expo-status-bar';
import {View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {LandingPage} from "./screens/LandingPage";

function Navigation(){
  return <NavigationContainer>
    <LandingPage/>
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