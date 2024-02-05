import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from 'react-native-vector-icons/FontAwesome5';
import AccountNavigation from "./AccountNavigation";
import LoginNavigation from "./LoginNavigation";
import RecordsNavegation from "./RecordsNavigation";
import Login from "../screens/Login";


const Tab = createBottomTabNavigator();

export default function navigation() {
    return (
        <Tab.Navigator initialRouteName="Login">
            <Tab.Screen name="Records" component={RecordsNavegation} options={{
                tabBarLabel: "Registros",
                tabBarIcon: ({ color, size }) => <Icon name="list" color={color} size={size} />
            }} />
            <Tab.Screen name="Account" component={AccountNavigation} options={{
                tabBarLabel: "Mi Cuenta",
                tabBarIcon: ({ color, size }) => <Icon name="user" color={color} size={size} />
            }} />
            <Tab.Screen name="Login" component={LoginNavigation} options={{
                tabBarLabel: "Cerrar Sesión",
                tabBarIcon: ({ color, size }) => <Icon name="door-open" color={color} size={size} />,
                tabBarVisible: false
            }} />
        </Tab.Navigator>
    )
}