import React, { Component } from 'react';
import { Image, Text, TouchableOpacity } from 'react-native';
import { Card, CardItem } from 'native-base'
import _ from 'lodash';
import images from '../../config/images'
import styles from './styles';
import PropTypes from 'prop-types';

export default class Store extends Component {
    shouldComponentUpdate() {
        return false
    }
    render() {
        const { storeId, tradingName, status } = this.props.item;
        return (<TouchableOpacity style={styles.gridItem} onPress={() => this.props.action(storeId)}>
            <Card style={styles.itemText}>
                <CardItem>
                    <Text style={styles.title} >{tradingName}</Text>
                </CardItem>
                <CardItem style={styles.statusList} >
                    <Text style={styles.status} >status: {status}</Text>
                </CardItem>
            </Card>
        </TouchableOpacity>);
    }
}

Store.propTypes = {
    item: PropTypes.object
}
