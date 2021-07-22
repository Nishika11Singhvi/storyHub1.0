import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import WriteScreen from './screens/writeStory';
import ReadScreen from './screens/readStory';

export default class App extends React.Component 
{
  render()
  {
    return (   
        <AppContainer/>
    );
  }
}

const TabNavigator = createBottomTabNavigator(
{
  Write: {screen: WriteScreen},
  Read: {screen: ReadScreen},
},
{
  defaultNavigationOptions: ({navigation})=>(
  {
    tabBarIcon: () =>
    {
      const routeName = navigation.state.routeName;
      console.log(routeName)
      if(routeName === "Write")
      {
        return(
          <Image
          source={require("./assets/book.png")}
          style={{width:40, height:40}}/>
        )    
      }
      else if(routeName === "Read")
      {
        return(
          <Image
          source={require("./assets/searchingbook.png")}
          style={{width:40, height:40}}/>
        )
      }
    }
  })
}
);

const AppContainer =  createAppContainer(TabNavigator);

const styles = StyleSheet.create(
{
  container: 
  {
    flex: 1,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
});