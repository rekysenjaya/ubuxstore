import React, { Component } from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { Card, CardItem } from 'native-base'
import _ from 'lodash';
import styles from './styles';
import PropTypes from 'prop-types';

export default class Store extends Component {
    shouldComponentUpdate = (nextProps) => {
        if (!_.isEqual(this.props.item, nextProps.item)) {
            return true
        }
        return false
    }
    render() {
        const { tradingName, status } = this.props.item;
        return (<TouchableOpacity style={styles.gridItem} onPress={() => this.props.action(this.props.item)}>
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
    item: PropTypes.object,
    action: PropTypes.func
}
