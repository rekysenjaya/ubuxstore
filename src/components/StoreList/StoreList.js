import React, { Component } from 'react';
import { FlatList, ListView, Text } from 'react-native';
import _ from 'lodash';
import styles from './styles';
import Store from './Store';
import PropTypes from 'prop-types';

export default class StoreList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            dataSource: new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 }),
            data: []
        };
    }

    componentDidMount = () => {
        const { data } = this.props
        this.setState({
            dataSource: this.state.dataSource.cloneWithRows(data),
            data
        })
    }

    componentWillReceiveProps = (prevProps) => {
        const { data } = this.props
        if (!_.isEqual(data, prevProps.data)) {
            this.setState({
                dataSource: this.state.dataSource.cloneWithRows(prevProps.data),
                data: prevProps.data
            })
        }
    }

    shouldComponentUpdate = (nextProps) => {
        if (!this.props.data.length && nextProps.data.length !== this.props.data.length)
            return true
        return false
    }

    renderItem = (item) => {
        return <Store item={item} action={this.props.action} />;
    };

    render() {
        return (<ListView
            enableEmptySections
            contentContainerStyle={styles.grid}
            dataSource={this.state.dataSource}
            renderRow={this.renderItem}
        />)
    }
}

StoreList.propTypes = {
    data: PropTypes.array,
    action: PropTypes.func
}
