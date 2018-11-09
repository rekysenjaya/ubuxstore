
import { StyleSheet, Dimensions } from 'react-native';

const D = Dimensions.get('window')

const styles = StyleSheet.create({
    header: {
        backgroundColor: '#F17C5F',
        height: 70,
        justifyContent: 'center'
    },
    headerContent: {
        flexDirection: 'column',
        width: D.width - 20
    },
    headerContentBody: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center'
    },
    headerContentIcon: {
        marginHorizontal: 10,
        justifyContent: 'center'
    },
    title: {
        color: '#fff',
        fontWeight: '900',
        fontSize: 20
    },
    badge: {
        position: 'absolute',
        zIndex: 1,
        top: 13,
        right: -8
    },
    input: {
        marginHorizontal: 10,
        marginBottom: 10,
        flex: 1,
        justifyContent: 'center'
    },
    iconCart: {
        color: 'white',
        marginTop: 20
    },
})

export default styles