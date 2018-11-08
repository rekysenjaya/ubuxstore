import React, { Component } from 'react';
import { Text, TouchableOpacity } from 'react-native'
import { Card, Icon, View, Button } from 'native-base';
import { connect } from 'react-redux';
import styles from './styles';
import PropTypes from 'prop-types';

import { requestLoadDetailsStoreProductAction, clearStateAction } from '../../actions/detailStoreProductActions'

class DetailStoreProduct extends Component {
    constructor(props) {
        super(props);
        this.state = {
            load: false
        };
    }

    componentWillUnmount = () => {
        this.props.clearStateActions()
    }

    _loadProduct = () => {
        const { storeId, requestLoadDetailsStoreProductActions } = this.props
        this.setState({
            load: !this.state.load
        }, () => {
            if (this.state.load) {
                requestLoadDetailsStoreProductActions({ storeId: storeId })
            }
        })
    }

    render() {
        const { load } = this.state
        const { detailProduct, navigation } = this.props
        return (<Card>
            <Button full iconRight transparent style={styles.borderHeader} onPress={this._loadProduct} >
                <View style={styles.header} >
                    <Text style={styles.title} >List Product</Text>
                    <Icon name={load ? "close" : "add"} />
                </View>
            </Button>
            {(Array.isArray(detailProduct) && load) && detailProduct.map((v, i) => <TouchableOpacity activeOpacity={1} key={i} style={[styles.list, detailProduct.length - 1 == i ? { marginBottom: 5 } : null]} onPress={() => navigation.navigate('Selected', { productId: v._id, title: v.name })} >
                <View style={styles.listBody} >
                    <Text style={styles.titleBody} >{v.name}</Text>
                    {v.description && <Text>{v.description}</Text>}
                </View>
                <View />
            </TouchableOpacity>)}
        </Card>)
    }
}

DetailStoreProduct.propTypes = {
    navigation: PropTypes.object,
    detailProduct: PropTypes.array,
    storeId: PropTypes.string,
    requestLoadDetailsStoreProductActions: PropTypes.func,
    clearStateActions: PropTypes.func
}

function mapStateToProps(state) {
    return {
        detailProduct: state.detailStoreProductReducer.detailProduct
    };
}
function mapDispatchToProps(dispatch) {
    return {
        requestLoadDetailsStoreProductActions(payload) {
            dispatch(requestLoadDetailsStoreProductAction(payload))
        },
        clearStateActions() {
            dispatch(clearStateAction())
        }
    };
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(DetailStoreProduct);
