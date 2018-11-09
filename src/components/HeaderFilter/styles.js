
import { StyleSheet, Dimensions } from 'react-native';

const D = Dimensions.get('window')

const styles = StyleSheet.create({
    header: {
        backgroundColor: '#F17C5F',
        height: 130
    },
    headerContent: {
        marginTop: 10,
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
    badge: {
        position: 'absolute',
        zIndex: 1,
        top: 3,
        right: -8
    },
    input: {
        backgroundColor: '#FFF',
        marginBottom: 10,
        flex: 1,
    }
})

export default styles