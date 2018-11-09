import React, { Component } from 'react'
import { Container, Content, Header, Item, Input, Picker, Icon, View, Badge, Text } from 'native-base'
import { TouchableOpacity } from 'react-native'
import _ from 'lodash'
import styles from './styles'
import PropTypes from 'prop-types'

export default class HeaderFilter extends Component {
    render() {
        var result = _.chain(this.props.data).groupBy("status").map(function (v, i) {
            return i
        }).value();
        return (
            <Container>
                <Header span style={styles.header} androidStatusBarColor="#F17C5F" >
                    <View style={styles.headerContent} >
                        <View style={styles.headerContentBody} >
                            <Item rounded style={styles.input}  >
                                <Input placeholder='Search' returnKeyType="search" value={this.props.search} onChangeText={this.props.setState} onBlur={this.props.actionSearch} />
                            </Item>
                            {Boolean(this.props.cart.length) && (<TouchableOpacity onPress={() => this.props.navigate()} style={styles.badge} >
                                <Badge>
                                    <Text>{this.props.cart.length}</Text>
                                </Badge>
                            </TouchableOpacity>)}
                            <TouchableOpacity style={styles.headerContentIcon} onPress={() => this.props.navigate()} >
                                <Icon name="cart" style={{ color: '#FFF' }} />
                            </TouchableOpacity>
                        </View>
                        <Item picker>
                            <Picker
                                mode="dropdown"
                                iosIcon={<Icon name="ios-arrow-down-outline" />}
                                style={{ width: undefined }}
                                placeholder="Select Status"
                                placeholderStyle={{ color: "#FFF" }}
                                placeholderIconColor="#FFF"
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
    cart: PropTypes.array,
    data: PropTypes.array,
    search: PropTypes.string,
    status: PropTypes.string,
    setState: PropTypes.func,
    navigate: PropTypes.func,
    children: PropTypes.array,
    actionSearch: PropTypes.func,
    actionStatus: PropTypes.func
}
