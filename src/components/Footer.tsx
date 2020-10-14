import * as React from 'react';
import { View, Image, StyleSheet } from "react-native"
export interface FooterProps {
    
}
 
const Footer: React.SFC<FooterProps> = () => {
    return ( <View style={styles.footer}>
        <Image
            style={styles.logo}
            source={require('../assets/isotipo.png')}
        />
    </View> );
}

const styles = StyleSheet.create({
    footer: {
        backgroundColor: "#e0e1e3",
        justifyContent: "center",
        alignItems: "flex-end",
        paddingVertical: 20
    },
    logo: {
        width: 50,
        height: 50,
        marginRight: "9%",
        resizeMode: "contain"
    }
})
 
export default Footer;