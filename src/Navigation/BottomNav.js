import React from 'react'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import Home from '../pages/Acceuil'
import MyDem from '../pages/MyDemands'
import Retrait from '../pages/Retrait'
import Profile from '../pages/Profile'


import Ionicons from 'react-native-vector-icons/Ionicons';

export default function BottomNav() {

    const Tab = createBottomTabNavigator();

    return (
        <Tab.Navigator
        screenOptions={({ route }) => ({

                tabBarIcon: ({ focused, color, size }) => {
                let iconName;

                if (route.name === 'Accueil') {
                    iconName = focused
                    ? 'home'
                    : 'home-outline';
                } if (route.name === 'Mes Demandes') {
                    iconName = focused ? 'ios-list' : 'ios-list';
                } 
                if (route.name === 'Profile') {
                    iconName = focused ? 'person-circle' : 'person-circle-outline';
                }
                else if (route.name === 'Retrait') {
                    iconName = focused ? 'heart-circle' : 'heart-circle-outline';
                }

                return <Ionicons name={iconName} size={size} color={color} />;
                },
                })}
                tabBarOptions={{
                activeTintColor: '#83A9DA',
                inactiveTintColor: 'gray',
                }}>
                
            <Tab.Screen name="Accueil" component={Home} 
                options={{
                    title: 'Regitre Social Maroc',
                    headerStyle: {
                    backgroundColor: '#83A9DA',
                },
                }}
            />
            <Tab.Screen name="Mes Demandes" component={MyDem}/>
            <Tab.Screen name="Retrait" component={Retrait}/>
            <Tab.Screen name="Profile" component={Profile}/>
        </Tab.Navigator>
    )
}
