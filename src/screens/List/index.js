import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { requestLoadListAction } from '../../actions/listActions'

import styles from './styles';

class List extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>list</Text>
            </View>
        );
    }
}

function mapStateToProps(state) {
    return {};
}
function mapDispatchToProps(dispatch) {
    return {
        requestLoadListActions(payload) {
            dispatch(requestLoadListAction(payload))
        },
    };
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(List);

