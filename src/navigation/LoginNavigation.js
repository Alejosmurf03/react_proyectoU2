import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import LoginScreen from '../screens/Login'

const Stack = createStackNavigator();

export default function LoginNavigation() {
    return (
        <Stack.Navigator initialRouteName='Login'>
            <Stack.Screen
                name='Login'
                component={LoginScreen}
                options={{
                    title: "",
                    headerTransparent: true
                }}
            />
        </Stack.Navigator>
    )
}