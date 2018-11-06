import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';

import styles from './styles';

class Selected extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>Selected</Text>
            </View>
        );
    }
}

function mapStateToProps(state) {
    return {};
}
function mapDispatchToProps(dispatch) {
    return {};
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Selected);

