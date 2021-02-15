import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, HeaderTitle } from '@react-navigation/stack';

//Pages

import WelcomePage from '../pages/WelcomePage';
import SignIn from '../pages/SignIn'
import SignUp from '../pages/SignUp';

import Privacy from '../pages/PrivacyPlolicy';


import Acceuil from '../pages/Acceuil';

export default function StackAuth() {
    const Stack = createStackNavigator();

    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Splash" component={WelcomePage} options={{ headerShown: false }} />
                <Stack.Screen name="SignIn" component={SignIn} options={{ headerShown: false }} />
                <Stack.Screen name="SignUp" component={SignUp} options={{ headerShown: false }} />
                
                <Stack.Screen name="Acceuil" component={Acceuil}
                    options={{ title: 'Espace Client', headerTitleAlign: 'center' }}
                />
                
                <Stack.Screen name="Condition generales" component={Privacy}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}
