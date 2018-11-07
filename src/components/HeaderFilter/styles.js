
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
    input: {
        backgroundColor: 'white',
        marginBottom: 10
    }
})

export default styles