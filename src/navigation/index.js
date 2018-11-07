import React from 'react';
import { createStackNavigator } from 'react-navigation';
import List from '../screens/List';
import Detail from '../screens/Detail';
import Selected from '../screens/Selected';

const StackNavigator = createStackNavigator(
    {
        List: {
            screen: List,
            navigationOptions: { header: null }
        },
        Detail: {
            screen: Detail,
            navigationOptions: { header: null }
        },
        Selected: {
            screen: Selected,
            navigationOptions: { header: null }
        }
    },
    {
        initialRouteName: 'List',
    }
);

export default StackNavigator;
