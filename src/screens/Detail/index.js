import React, { Component } from 'react';
import Spinner from 'react-native-loading-spinner-overlay';
import { Content } from 'native-base'
import { connect } from 'react-redux';

import { requestLoadDetailsStoreAction, clearStateAction } from '../../actions/detailStoreActions'

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
        const { storeId } = navigation.state.params
        return (
            <Content>
                <DetailStore detail={detail} />
                <DetailStoreProduct {...this.props} storeId={storeId} />
                <Spinner visible={loading || loadingProduct} textContent={"Loading..."} textStyle={styles.spinner} />
            </Content>
        );
    }
}

function mapStateToProps(state) {
    return {
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
