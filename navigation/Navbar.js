import * as React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Ionicons from 'react-native-vector-icons/Ionicons';

// Screens
import MainScreen from "./screens/main-screen";
import FavouriteScreen from "./screens/favourite-screen";
import SearchScreen from "./screens/search-screen";
import ViewScreen from './screens/view-screen';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

// Screen Names
export const SCREEN_NAMES = {
    HOME: 'Home',
    SEARCH: 'Search',
    FAV: 'Favourite',
    VIEW: 'View',
};

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function HomeStackScreen() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name={SCREEN_NAMES.HOME}
                component={MainScreen}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name={SCREEN_NAMES.VIEW}
                component={ViewScreen}
            />
        </Stack.Navigator>
    );
}

function SearchStackScreen() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name={SCREEN_NAMES.SEARCH}
                component={SearchScreen}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name={SCREEN_NAMES.VIEW}
                component={ViewScreen}
            />
        </Stack.Navigator>
    );
}


function Navbar() {
    return (
        <GestureHandlerRootView style={{ flex: 1 }}>
            <NavigationContainer>
                <Tab.Navigator
                    initialRouteName={SCREEN_NAMES.HOME}
                    screenOptions={{
                        headerTitleAlign: 'center',
                        headerStyle: {
                            backgroundColor: '#081526',
                        },
                        headerTitleStyle: {
                            paddingTop: 10,
                            paddingBottom: 5,
                        },
                        headerTintColor: '#ffffff',
                        tabBarStyle: {
                            backgroundColor: '#040911',
                            padding: 5,
                            height: 60,
                            paddingBottom: 6,
                        },
                        tabBarActiveTintColor: '#ffffff',
                        tabBarInactiveTintColor: '#fff',
                    }}
                >
                    <Tab.Screen
                        name={SCREEN_NAMES.HOME}
                        component={HomeStackScreen}
                        options={{
                            tabBarLabel: 'Home',
                            tabBarIcon: ({ focused, color, size }) => (
                                <Ionicons name={focused ? 'home' : 'home-outline'} size={size} color={color} />
                            ),
                        }}
                    />
                    <Tab.Screen
                        name={SCREEN_NAMES.SEARCH}
                        component={SearchStackScreen}
                        options={{
                            headerTitle: 'Search',
                            tabBarIcon: ({ focused, color, size }) => (
                                <Ionicons name={focused ? 'search' : 'search-outline'} size={size} color={color} />
                            ),
                        }}
                    />
                    <Tab.Screen
                        name={SCREEN_NAMES.FAV}
                        component={FavouriteScreen}
                        options={{
                            headerTitle: 'Favourite List',
                            tabBarIcon: ({ focused, color, size }) => (
                                <Ionicons name={focused ? 'heart' : 'heart-outline'} size={size} color={color} />
                            ),
                        }}
                    />
                </Tab.Navigator>
            </NavigationContainer>
        </GestureHandlerRootView>
    );
}

export default Navbar;
