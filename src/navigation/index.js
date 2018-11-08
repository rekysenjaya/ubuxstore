import React from 'react';
import { Icon } from 'native-base'
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
        },
        Selected: {
            screen: Selected,
        }
    },
    {
        initialRouteName: 'List',
        navigationOptions: ({ navigation }) => {
            return {
                title: navigation.getParam('title', 'Store Details') || 'Store Details',
                headerStyle: {
                    backgroundColor: '#F17C5F',
                },
                headerTintColor: '#fff',
                headerLeft: <Icon name="arrow-back" style={{ marginLeft: 10, color: '#fff' }} onPress={() => navigation.goBack()} />
            }
        }
    }
);

export default StackNavigator;
