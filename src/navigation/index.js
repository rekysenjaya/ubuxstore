import React from 'react';
import { createStackNavigator } from 'react-navigation';
import List from '../screens/List';
import Detail from '../screens/Detail';
import Selected from '../screens/Selected';

const StackNavigator = createStackNavigator(
    {
        List: {
            screen: List,
            navigationOptions: ({ navigation }) => ({
                title: `List`,
            }),
        },
        Detail: {
            screen: Detail,
            navigationOptions: ({ navigation }) => ({
                title: `Detail`,
            }),
        },
        Selected: {
            screen: Selected,
            navigationOptions: ({ navigation }) => ({
                title: `Selected`,
            }),
        }
    }
);

export default StackNavigator;
