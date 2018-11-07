import { StyleSheet, Dimensions } from 'react-native';

const D = Dimensions.get('window')

const styles = StyleSheet.create({
    item: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingLeft: 16,
        paddingRight: 12,
        paddingVertical: 8
    },
    store: {
        flex: 1,
        textAlign: 'left',
        paddingLeft: 8,
        fontSize: 15
    },
    grid: {
        flexWrap: 'wrap',
        flexDirection: 'row'
    },
    gridItem: {
        width: D.width / 2
    },
    image: {
        width: D.width / 2,
        flex: 1,
        height: 50,
        resizeMode: 'center'
    },
    itemText: {
        borderBottomColor: '#F17C5F',
        borderBottomWidth: 2,
    },
    title: {
        fontWeight: '900'
    },
    statusList: {
        justifyContent: 'flex-end'
    },
    status: {
        fontSize: 8
    }
});

export default styles;
