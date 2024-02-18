import {StatusBar} from 'expo-status-bar';
import {Button, View, StyleSheet} from 'react-native';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {AddFeelingScreen} from "./screens/AddFeelingScreen";
import {AuthContext, AuthContextProvider} from "./store/AuthContextProvider";
import {Colors} from "./constants/colors";
import {useCallback, useContext, useEffect, useState} from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as SplashScreen from "expo-splash-screen";
import {LoginScreen} from "./screens/LoginScreen";
import {RegisterScreen} from "./screens/RegisterScreen";
import {IconButton} from "./components/IconButton/IconButton";
import {StackNavigationProp} from "@react-navigation/stack";
import {RootStackParamList} from "./types/types";


const Stack = createNativeStackNavigator();

function AuthenticationStack(){
    const { navigate } = useNavigation<StackNavigationProp<RootStackParamList>>()

    return(<Stack.Navigator
        screenOptions={{
            // headerShown:false,
            headerStyle: { backgroundColor: Colors.bgSecondary },
            headerTintColor: 'fff',
            contentStyle: { backgroundColor: Colors.primary100 },
        }}>
    <Stack.Screen name="Login" component={LoginScreen}         options={( ) => ({
        title: "",
        headerRight: ({ tintColor }) => (
            <Button color={Colors.primary500} title="Register" onPress={() => navigate('Register')}/>

        ),
    })}
    />
    <Stack.Screen name="Register" component={RegisterScreen} options={( ) => ({
        title: "",
        headerLeft: ({ tintColor }) => (
            <Button color={Colors.primary500} title="Login" onPress={() => navigate('Login')}/>

        ),
    })}
    />
  </Stack.Navigator>)
}



function AuthenticatedStack() {
    const authContext = useContext(AuthContext);
    return(<Stack.Navigator
      screenOptions={{
      headerStyle: { backgroundColor: Colors.primary500 },
      headerTintColor: Colors.primary100,
      contentStyle: { backgroundColor: Colors.primary100 },
  }}

    >
    <Stack.Screen
        name="AddFeeling"
        component={AddFeelingScreen}
        options={( ) => ({
          title: "Add New Feeling",
          headerRight: ({ tintColor }) => (
              <IconButton
                  icon="power-outline"
                  size={24}
                  color={tintColor}
                  onPress={() => authContext?.logout()}
              />
          ),
        })}

    />
  </Stack.Navigator>)
}

function Navigation(){
  const authContext = useContext(AuthContext)
  return <NavigationContainer>
    {!authContext?.isAuthenticated && <AuthenticationStack/>}
    {authContext?.isAuthenticated && <AuthenticatedStack/>}
  </NavigationContainer>
}

function Root(){
  const [isAppReady, setIsAppReady] = useState(false);
  const authContext = useContext(AuthContext);

  useEffect(()=>{
    const fetchToken = async()=>{
      const storedToken = await AsyncStorage.getItem("token");

      if(storedToken){
        authContext?.authenticate(storedToken)
      }
      setIsAppReady(true)
    };
    fetchToken()
  },[])

  const onLayoutRootView = useCallback(async()=>{
    if(isAppReady){
      await SplashScreen.hideAsync()
    }
  },[isAppReady])

    if(!isAppReady){
        return null;
    }

  return(<View style={{ flex: 1 }} onLayout={onLayoutRootView}>
    <Navigation/>
  </View>)
}

export default function App() {
  return (
   <>
   <StatusBar style="dark"/>
     <AuthContextProvider>
       <Root/>
     </AuthContextProvider>
   </>
  );
}

const styles = StyleSheet.create({
    navigationButton:{
        color: Colors.primary500
    }
})