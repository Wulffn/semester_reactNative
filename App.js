import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Welcome from './Welcome';
import Button from './Touchable';
import Fetch from './Fetch';
import {createStackNavigator, createAppContainer} from 'react-navigation';

class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Welcome',
  };
  render() {
    const {navigate} = this.props.navigation;
    return (
      <View style={styles.container}>
        <Welcome />
        <Button
        onPress={() => navigate('Fetch')}
        title="Fetch!"
      />
      </View>
    );
  }
}

const MainNavigator = createStackNavigator({
  Home: {screen: HomeScreen},
  Fetch: {screen: Fetch},
});

const App = createAppContainer(MainNavigator);

export default App;

const styles = StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
  },
});