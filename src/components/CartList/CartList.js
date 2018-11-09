import React, { PureComponent } from 'react'
import { View, Text, Alert } from 'react-native'
import { Icon } from 'native-base'
import FlatList from 'react-native/Libraries/Lists/FlatList';
import PropTypes from 'prop-types';
import styles from './styles'

const viewabilityConfig = {
    minimumViewTime: 3000,
    viewAreaCoveragePercentThreshold: 100,
    waitForInteraction: true,
};

export default class CartList extends PureComponent {
    _renderItemComponent = ({ item, index }) => (<View style={styles.list} >
        <View style={styles.listSub} >
            <Text style={styles.title} >{item.name}</Text>
            <View style={styles.colom} >
                <Text>Category : {item.category}</Text>
                <Text>Price : {item.priceCash}/{item.unit}</Text>
            </View>
            <Text style={styles.right} >{item.expire}</Text>
        </View>
        <View style={styles.trash}>
            <Icon name="trash" onPress={() => Alert.alert(
                'Trash Item',
                `Do you really want to delete ${item.name}?`,
                [
                    { text: 'Cancel', style: 'cancel' },
                    { text: 'OK', onPress: () => this.props.cartDelete(index) },
                ],
                { cancelable: false }
            )} />
        </View>
    </View>)


    _shouldItemUpdate = (prev, next) => {
        return prev.item !== next.item;
    }

    _getItemLayout = (data, index) => {
        return { length: 50, offset: 50 * index, index }
    }

    _keyExtractor = (item, index) => {
        return index.toString();
    }

    render() {
        return (
            <FlatList
                data={this.props.cart}
                getItemLayout={this._getItemLayout}
                key={'List'}
                legacyImplementation={false}
                renderItem={this._renderItemComponent}
                shouldItemUpdate={this._shouldItemUpdate}
                viewabilityConfig={viewabilityConfig}
                keyExtractor={this._keyExtractor}
                directionalLockEnabled={true}
            />
        )
    }
}

CartList.propTypes = {
    cart: PropTypes.array,
    cartDelete: PropTypes.func
}
