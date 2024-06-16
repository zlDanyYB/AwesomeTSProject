import React from 'react';
import { createStackNavigator, StackNavigationOptions } from '@react-navigation/stack';
import Character from './Character';
import CharacterDetail from './CharacterDetail';

export type MainStackParamList = {
    Character: undefined;
    CharacterDetail: { character_url: string };
};

const Stack = createStackNavigator<MainStackParamList>();

class MainScreen extends React.Component {
    render() {
        const screenOptions: StackNavigationOptions = {
            headerStyle: {
                backgroundColor: '#000',
            },
            headerTintColor: '#53eae3',
        };

        return (
            <Stack.Navigator screenOptions={screenOptions}>
                <Stack.Screen name="Character" component={Character} />
                <Stack.Screen name="CharacterDetail" component={CharacterDetail} />
            </Stack.Navigator>
        );
    }
}

export default MainScreen;
