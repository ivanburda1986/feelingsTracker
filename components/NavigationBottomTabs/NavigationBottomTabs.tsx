import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {Ionicons, MaterialCommunityIcons} from '@expo/vector-icons';
import {TimelineScreen} from "../../screens/TimelineScreen";
import {AddFeelingScreen} from "../../screens/AddFeelingScreen";
import {ProfileScreen} from "../../screens/ProfileScreen";
import {Colors} from "../../constants/colors";
import {IconButton} from "../IconButton/IconButton";
import {useContext} from "react";
import {AuthContext} from "../../store/AuthContextProvider";

const BottomTabs = createBottomTabNavigator();


export function NavigationBottomTabs() {
    const authContext = useContext(AuthContext);
    return (
        <BottomTabs.Navigator      screenOptions={({ navigation }) => ({
            headerStyle: { backgroundColor: Colors.bgSecondary },
            headerTintColor: 'green',
            contentStyle: { backgroundColor: Colors.primary100 },
            headerRight: ({ tintColor }) => (
                <IconButton
                    icon="power-outline"
                    size={24}
                    color={tintColor}
                    label="Logout"
                    onPress={() => authContext?.logout()}
                />
            ),
        })}
        >
            <BottomTabs.Screen
                name="TimelineScreen"
                component={TimelineScreen}
                options={{
                    title: "Timeline",
                    tabBarLabel: "Timeline",
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="analytics-outline" size={size} color={color} />
                    ),
                }}
            />
            <BottomTabs.Screen
                name="Add Feeling"
                component={AddFeelingScreen}
                options={{
                    title: "Add Feeling",
                    tabBarLabel: "Add Feeling",
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="happy-outline" size={size} color={color} />
                    ),
                }}
            />
            <BottomTabs.Screen
                name="ProfileScreen"
                component={ProfileScreen}
                options={{
                    title: "Profile",
                    tabBarLabel: "Profile",
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="settings-outline" size={size} color={color} />
                    ),
                }}
            />
        </BottomTabs.Navigator>
    );
}