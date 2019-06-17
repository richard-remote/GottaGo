import React, {Component} from 'react';
import { Button, View, Text } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';

//HomeScreen Component
class HomeScreen extends Component {
  render() {
    return (
      <View style={{flex: 1, alignItems: "center", justifyContent: "center"}}>
        <Text>Home Screen</Text>
        <Button 
          title= 'Go to Details'
          onPress={() => this.props.navigation.navigate('Details') }
        />
      </View>
    );
  }
}

//DetailsScreen Component
//Navigate function of navigation changes to route in the parentheses
// If it's already on the stack, nothing happens
//this.props.navigation.navigate('RouteName') only changes to that route if it's not already there
//this.props.navigation.push('RouteName') adds the route to the stack 
//this.props.navigation.popToTop() returns to the first screen of the stack
//this.props.navigation.goBack() returns to the previous route on the stack
class DetailsScreen extends Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text>Details Screen</Text>
        <Button 
          title= 'Go Home'
          onPress={()=> this.props.navigation.popToTop()}
        />
        <Button
          title= 'Go Back'
          onPress= {() => this.props.navigation.goBack()}
        />
        <Button
          title= 'Push Details'
          onPress= {()=> this.props.navigation.push('Details')}
        />
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
