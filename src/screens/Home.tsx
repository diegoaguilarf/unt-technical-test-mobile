import React, {useEffect} from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {StackNavigationProp} from '@react-navigation/stack';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {MainState} from '../types';
import Actions from '../store/actions';
import {Loader, UI} from '../components/index';

const {Card, Topbar} = UI;

type RootStackParamList = {
  Home: undefined;
  Movies: undefined;
  Series: undefined;
};

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;

export interface HomeProps {
  navigation: HomeScreenNavigationProp;
}

const Home: React.SFC<HomeProps> = ({navigation}) => {
  const dispatch = useDispatch();
  const isLoading = useSelector<MainState, boolean | null | undefined>(
    (state) => state.isLoading,
  );

  useEffect(() => {
    dispatch(Actions.getEntriesRequested());
  }, []);

  return isLoading ? (
    <Loader />
  ) : (
    <SafeAreaView>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={styles.scrollView}>
        <Topbar title="Popular Titles" />
        <View style={styles.body}>
          <View style={styles.options}>
            <TouchableOpacity onPress={() => navigation.navigate('Series')}>
              <Card
                payload={{
                  title: 'Popular Series',
                  thumbnail: require('../assets/series-thumbnail.png'),
                }}
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Movies')}>
              <Card
                payload={{
                  title: 'Popular Movies',
                  thumbnail: require('../assets/movies-thumbnail.png'),
                }}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.actions}>
            <TouchableOpacity onPress={() => {}}>
              <Text style={styles.mainAction}>Start your free trial</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {}}>
              <Text style={styles.secundaryAction}>Log in</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  body: {
    backgroundColor: Colors.white,
    paddingTop: 30,
  },
  options: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginBottom: 20
  },
  actions: {
    alignItems: 'center',
  },
  mainAction: {
    backgroundColor: '#414141',
    color: '#fff',
    paddingVertical: 5,
    paddingHorizontal: 10,
    fontSize: 16,
  },
  secundaryAction: {
    paddingVertical: 5,
    paddingHorizontal: 10,
    fontSize: 16,
  },
});

export default Home;
