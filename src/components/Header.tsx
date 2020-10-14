import * as React from 'react';
import {
    View,
    Image,
    TouchableOpacity,
    StyleSheet
} from 'react-native';


const Header: React.SFC = () => {

    return ( <View style={styles.header}>
        <Image
            style={styles.logo}
            source={require('../assets/isologo.png')}
        />
    </View> );
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: "#f4bf41",
        justifyContent: "center",
        alignItems: "center",
        paddingVertical: 20
    },
    logo: {
        width: 140,
        height: 50,
        resizeMode: "contain"
    }
})

export default Header;