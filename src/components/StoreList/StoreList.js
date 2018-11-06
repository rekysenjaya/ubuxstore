import React, { Component } from 'react';
import { FlatList } from 'react-native';
import Store from './Store';

export default class StoreList extends Component {
    renderItem = ({ item }) => {
        return <Store item={item} />;
    };

    render() {
        return (
            <FlatList
                data={this.props.data}
                renderItem={this.renderItem}
                keyExtractor={(item, index) => index}
            />
        );
    }
}
