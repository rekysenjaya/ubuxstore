import React, { Component } from 'react';
import { Toast } from 'native-base';
import { connect } from 'react-redux';
import Spinner from 'react-native-loading-spinner-overlay';
import { requestLoadListAction, requestLoadSearchListAction, clearStateAction } from '../../actions/listActions'
import StoreList from '../../components/StoreList'
import HeaderFilter from '../../components/HeaderFilter'

import styles from './styles';

class List extends Component {
    constructor(props) {
        super(props);
        this.state = {
            search: '',
            status: '',
        };
    }

    componentDidMount = () => {
        this.props.requestLoadListActions()
    }

    componentWillUnmount = () => {
        this.props.clearStateActions()
    }

    _actionSearch = () => {
        const { search } = this.state
        this.setState({
            status: '',
        }, () => {
            if (!search.length) return this.props.requestLoadListActions()
            if (search.length >= 3) {
                return this.props.requestLoadSearchListActions({ keyword: search })
            } else {
                return Toast.show({
                    text: "Search for at least 3 characters!",
                    buttonText: "Okay",
                    type: "danger"
                })
            }
        })
    }

    _setState = (search) => this.setState({ search })

    _actionStatus = (status) => {
        this.setState({ status })
    }

    _filteList = () => (this.state.status && this.state.status.length) ? this.props.data.filter(v => this.state.status === v.status) : this.props.data

    render() {
        const data = this._filteList()
        return (
            <HeaderFilter setState={this._setState} actionSearch={this._actionSearch} actionStatus={this._actionStatus} {...this.state} >
                <StoreList action={(v) => this.props.navigation.navigate('Detail', { storeId: v.storeId, title: v.tradingName })} data={data} />
                <Spinner visible={this.props.loading} textContent={"Loading..."} textStyle={styles.spinner} />
            </HeaderFilter>
        );
    }
}

function mapStateToProps(state) {
    return {
        data: state.listReducer.list,
        loading: state.listReducer.loading
    };
}
function mapDispatchToProps(dispatch) {
    return {
        requestLoadListActions(payload) {
            dispatch(requestLoadListAction(payload))
        },
        requestLoadSearchListActions(payload) {
            dispatch(requestLoadSearchListAction(payload))
        },
        clearStateActions() {
            dispatch(clearStateAction())
        }
    };
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(List);

