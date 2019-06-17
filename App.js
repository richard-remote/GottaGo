import React, {Component} from 'react';
import { View, Text } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';

//HomeScreen Component
class HomeScreen extends Component {
  render() {
    return (
      <View style={{flex: 1, alignItems: "center", justifyContent: "center"}}>
        <Text>Home Screen</Text>
      </View>
    );
  }
}

//DetailsScreen Component
class DetailsScreen extends Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text>Details Screen</Text>
      </View>
    );
  }
}

//Exports the root stack navigator
//Two routes: Home and Details
const AppNavigator = createStackNavigator(
  {
    Home: HomeScreen,
    Details: DetailsScreen
  },
  {
    initalRouteName: 'Home'
  }

);

const AppContainer = createAppContainer(AppNavigator);

export default class App extends Component {
  render(){
    return <AppContainer />;
  }
}
