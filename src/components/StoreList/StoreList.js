import React, { PureComponent } from 'react'
import FlatList from 'react-native/Libraries/Lists/FlatList';
import Store from './Store'
import PropTypes from 'prop-types';

const viewabilityConfig = {
    minimumViewTime: 3000,
    viewAreaCoveragePercentThreshold: 100,
    waitForInteraction: true,
};

export default class StoreList extends PureComponent {
    _renderItemComponent = ({ item }) => {
        return (
            <Store action={this.props.action} item={item} />
        )
    }

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
                data={this.props.data}
                getItemLayout={this._getItemLayout}
                key={'List'}
                legacyImplementation={false}
                numColumns={2}
                renderItem={this._renderItemComponent}
                shouldItemUpdate={this._shouldItemUpdate}
                viewabilityConfig={viewabilityConfig}
                keyExtractor={this._keyExtractor}
                directionalLockEnabled={true}
            />
        )
    }
}

StoreList.propTypes = {
    data: PropTypes.array,
    action: PropTypes.func
}