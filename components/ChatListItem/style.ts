import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    avatar: {
        width: 60,
        height: 60,
        marginRight: 10,
        borderRadius: 50,
    },
    container: {
        flexDirection: 'row',
        width: "100%",
        justifyContent: "space-between",
        padding: 10,
    },
    midContainer: {
        justifyContent: 'space-around',
        flexDirection: 'column',
        width: 200,
    },
    leftContainer: {
        flexDirection: 'row',
    },
    White: {
        color: '#FFFFFF'
    },

    username: {
        color: '#FFFFFF',
        fontWeight: 'bold',
        fontSize: 17,
    },
    lastMessage: {
        color: '#808080',
        fontSize: 16,
        width : '100%',
        flex: 1,
    },
    time: {
        color: '#808080',
        fontSize: 14
    }
});

export default styles;