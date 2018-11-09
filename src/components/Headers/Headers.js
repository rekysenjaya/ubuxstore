import React, { Component } from 'react'
import { Alert } from 'react-native'
import { Container, Content, Header, Icon, View, Badge, Text } from 'native-base'
import { TouchableOpacity } from 'react-native'
import styles from './styles'
import PropTypes from 'prop-types'

export default class Headers extends Component {
    render() {
        return (
            <Container>
                <Header style={styles.header} androidStatusBarColor="#F17C5F" >
                    <View style={styles.headerContent} >
                        <View style={styles.headerContentBody} >
                            <TouchableOpacity style={styles.headerContentIcon} onPress={() => this.props.goBack()} >
                                <Icon name="arrow-back" style={{ color: 'white' }} />
                            </TouchableOpacity>
                            <View rounded style={styles.input} >
                                <Text style={styles.title} >{this.props.title || 'Store Details'}</Text>
                            </View>
                            {(this.props.cart && Boolean(this.props.cart.length)) && (<TouchableOpacity
                                style={styles.badge}
                                onPress={() => this.props.navigate()} >
                                <Badge>
                                    <Text>{this.props.cart.length}</Text>
                                </Badge>
                            </TouchableOpacity>)}
                            {(this.props.clearCart) && (<TouchableOpacity
                                style={styles.headerContentIcon}
                                onPress={() => Alert.alert(
                                    'Delete All Item',
                                    `you are sure to delete all?`,
                                    [
                                        { text: 'No', style: 'cancel' },
                                        { text: 'Yes', onPress: () => this.props.clearCart() },
                                    ],
                                    { cancelable: false }
                                )} >
                                <Badge >
                                    <Text>Delete ALL</Text>
                                </Badge>
                            </TouchableOpacity>)}
                            {this.props.cart && <TouchableOpacity style={styles.headerContentIcon} onPress={() => this.props.navigate()} >
                                <Icon name="cart" style={styles.iconCart} />
                            </TouchableOpacity>}
                        </View>
                    </View>
                </Header>
                <Content>
                    {this.props.children}
                </Content>
            </Container>
        )
    }
}

Headers.propTypes = {
    title: PropTypes.string,
    cart: PropTypes.array,
    goBack: PropTypes.func,
    clearCart: PropTypes.func,
    navigate: PropTypes.func,
    children: PropTypes.array,
}
