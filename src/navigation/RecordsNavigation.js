import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import RecordsScreen from '../screens/Records';

const Stack = createStackNavigator();

export default function AccountNavigation() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name='Records'
                component={RecordsScreen}
                options={{
                    title:"Registros",
                    headerTitleAlign: "center"
                }}
            />
        </Stack.Navigator>
    )
}