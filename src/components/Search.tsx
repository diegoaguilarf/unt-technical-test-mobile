import React, { useEffect, useState } from 'react';
import { TextInput, View, Image, StyleSheet } from 'react-native';
import useDebounce from "../hooks/useDebounce"

export interface SearchProps {
    onChange: (value: string) => void
}
 
const Search: React.SFC<SearchProps> = ({ onChange }) => {

    const [searchTerm, setSearchTerm] = useState('');

    const debouncedSearchTerm = useDebounce(searchTerm, 1000);

    useEffect(
        () => {
          if (debouncedSearchTerm) {
            onChange(debouncedSearchTerm)
          }
        },
        [debouncedSearchTerm]
      );

    return ( 
        <View style={styles.search}>
            <TextInput placeholder="Search..." style={styles.input} onChangeText={text => setSearchTerm(text)}/>
            <View style={styles.button}>
                <Image source={require("../assets/search.png")} style={styles.icon}/>
            </View>
        </View>
     );
}

const styles = StyleSheet.create({
    search: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        marginHorizontal: "5%",
        marginVertical: 17
    },
    input: {
        height: 40,
        flex: 1,
        borderBottomWidth: 1,
        borderLeftWidth: 1,
        borderTopWidth: 1,
        borderColor: "#e2e2e2"
    },
    button: {
        width: 50,
        height: 40,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#447ff7"
    },
    icon: {
        width: 27,
        height: 27
    }
})
 
export default Search;