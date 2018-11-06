import React, { Component } from 'react';
import { View, Image, TouchableOpacity } from 'react-native';
import _ from 'lodash';
import styles from './styles';
import PropTypes from 'prop-types';

export default class Store extends Component {
    shouldComponentUpdate(nextProps) {
        if (_.isEqual(this.props.item, nextProps.item)) {
            return false;
        }
        return true;
    }

    onPress = () => {
        alert('Clicked ');
    };

    render() {
        const { storeId, tradingName, status } = this.props.item;
        return (
            <TouchableOpacity onPress={() => this.onPress(storeId)}  >
                <View style={styles.item}>
                    <Text style={styles.store}>
                        {tradingName}
                    </Text>
                </View>
            </TouchableOpacity>
        );
    }
}

UserItem.propTypes = {
    item: PropTypes.object
};
