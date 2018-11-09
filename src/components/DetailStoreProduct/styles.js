
import { StyleSheet, Dimensions } from 'react-native';

const D = Dimensions.get('window')

const styles = StyleSheet.create({
    borderHeader: {
        borderBottomColor: '#EDEDED',
        borderBottomWidth: 1
    },
    header: {
        paddingHorizontal: 10,
        width: (D.width - 10),
        height: 30,
        justifyContent: 'space-between',
        flexDirection: 'row'
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    list: {
        borderWidth: 1,
        borderColor: '#EDEDED',
        margin: 5,
        marginBottom: 0,
        justifyContent: 'center',
        alignItems:'center',
        flexDirection: 'row'
    },
    listBody: {
        flex: 1,
        margin: 10
    },
    titleBody: {
        fontSize: 18,
        fontWeight: '600'
    }
})

export default styles