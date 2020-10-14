import * as React from 'react';

import { Text, View, StyleSheet } from "react-native";

export interface TopbarProps {
    title?: string
}
 
const Topbar: React.SFC<TopbarProps> = ({ title, children}) => {
    return ( <View style={styles.topbar}>
        <Text style={styles.topbarTitle}>{ title || children || "Topbar" }</Text>
    </View> );
}

const styles = StyleSheet.create({
    topbar: {
        backgroundColor: "#414141",
        alignItems:"center",
        paddingVertical: 5
    },
    topbarTitle: {
        color: "#fff",
        fontSize: 17
    }
})
 
export default Topbar;