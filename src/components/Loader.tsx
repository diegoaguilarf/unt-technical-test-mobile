import * as React from 'react';
import {View, ActivityIndicator, StyleSheet} from 'react-native';

const Loader: React.SFC = () => {
  return (
    <View style={styles.loading}>
      <ActivityIndicator animating={true} color="#414141" size={80} />
    </View>
  );
};

const styles = StyleSheet.create({
  loading: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Loader;
