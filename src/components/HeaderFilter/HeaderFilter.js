import React, { Component } from 'react';
import { Dimensions } from 'react-native'
import { Container, Content, Header, Body, Title, Item, Input, Picker, Icon, View } from 'native-base';
import { connect } from 'react-redux';
import _ from 'lodash'
import styles from './styles';
import PropTypes from 'prop-types';

const D = Dimensions.get('window')

class HeaderFilter extends Component {
    render() {
        var result = _.chain(this.props.data).groupBy("status").map(function (v, i) {
            return i
        }).value();
        return (
            <Container>
                <Header span style={styles.header} androidStatusBarColor="#F17C5F" >
                    <View style={styles.headerContent} >
                        <Item rounded style={styles.input}  >
                            <Input placeholder='Search' returnKeyType="search" value={this.props.search} onChangeText={this.props.setState} onBlur={this.props.actionSearch} />
                        </Item>
                        <Item picker>
                            <Picker
                                mode="dropdown"
                                iosIcon={<Icon name="ios-arrow-down-outline" />}
                                style={{ width: undefined, color: 'white' }}
                                placeholder="Select Status"
                                placeholderIconColor="white"
                                selectedValue={this.props.status}
                                onValueChange={this.props.actionStatus}
                            >
                                <Picker.Item label="Select Status" />
                                {result.map((v, i) => <Picker.Item key={i} label={v} value={v} />)}
                            </Picker>
                        </Item>
                    </View>
                </Header>
                <Content>
                    {this.props.children}
                </Content>
            </Container>
        )
    }
}

HeaderFilter.propTypes = {
    actionSearch: PropTypes.func,
    actionStatus: PropTypes.func
}

function mapStateToProps(state) {
    return {
        data: state.listReducer.list
    };
}
function mapDispatchToProps(dispatch) {
    return {}
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(HeaderFilter);

