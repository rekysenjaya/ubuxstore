
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    list: {
        borderBottomWidth: 1,
        borderBottomColor: '#EDEDED',
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    listSub: {
        padding: 10,
        flex: 1
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    colom: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    right: {
        fontSize: 8,
        textAlign: 'right'
    },
    trash: {
        marginHorizontal: 10,
        justifyContent: 'center'
    }
})

export default styles