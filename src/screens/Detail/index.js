import React, { Component } from 'react';
import Spinner from 'react-native-loading-spinner-overlay';
import { connect } from 'react-redux';

import { requestLoadDetailsStoreAction, clearStateAction } from '../../actions/detailStoreActions'

import Headers from '../../components/Headers'
import DetailStore from '../../components/DetailStore'
import DetailStoreProduct from '../../components/DetailStoreProduct'

import styles from './styles';

class Detail extends Component {

    componentDidMount = () => {
        const { storeId } = this.props.navigation.state.params
        if (storeId)
            this.props.requestLoadDetailsStoreActions({ storeId })
    }

    componentWillUnmount = () => {
        this.props.clearStateActions()
    }

    render() {
        const { detail, loading, loadingProduct, navigation } = this.props
        const { storeId, title } = navigation.state.params
        return (
            <Headers title={title} cart={this.props.cart} goBack={() => this.props.navigation.goBack()} navigate={() => this.props.navigation.push('Selected')} >
                <DetailStore detail={detail} />
                <DetailStoreProduct {...this.props} storeId={storeId} />
                <Spinner visible={loading || loadingProduct} textContent={"Loading..."} textStyle={styles.spinner} />
            </Headers>
        );
    }
}

function mapStateToProps(state) {
    return {
        cart: state.cartReducer.cart,
        detail: state.detailStoreReducer.detail,
        loading: state.detailStoreReducer.loading,
        loadingProduct: state.detailStoreProductReducer.loading
    };
}
function mapDispatchToProps(dispatch) {
    return {
        requestLoadDetailsStoreActions(payload) {
            dispatch(requestLoadDetailsStoreAction(payload))
        },
        clearStateActions() {
            dispatch(clearStateAction())
        }
    };
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Detail);
