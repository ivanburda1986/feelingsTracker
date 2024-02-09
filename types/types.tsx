import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';

export type RootStackParamList = {
    Home: undefined;
    Conversation: undefined;
    Login: undefined;
    Register: undefined;
    Signup: undefined;
    NotFound: undefined;
    Splash: undefined;
};

export type MessageNavProps<T extends keyof RootStackParamList> = {
    navigation: StackNavigationProp<RootStackParamList, T>;
    route: RouteProp<RootStackParamList, T>;
};