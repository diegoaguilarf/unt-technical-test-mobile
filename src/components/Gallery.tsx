import * as React from 'react';

import {SafeAreaView, FlatList, StyleSheet} from 'react-native';

import {UI} from '../components/index';
import { Entry } from '../types';

const {Card} = UI;

export interface GalleryProps {
    items: Entry[]
}

const Gallery: React.SFC<GalleryProps> = ({ items }) => {
  return (
    <SafeAreaView style={styles.gallery}>
      <FlatList
        data={items}
        renderItem={({item}) => <Card payload={item}/>}
        horizontal={false}
        numColumns={2}
        keyExtractor={(item, index) => index.toString()}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
    gallery: {
        width: "100%",
        alignItems: "center",
        flex: 1
    }
    
})

export default Gallery;
