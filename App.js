import React from 'react'
import { StyleSheet, Text, View, Platform } from 'react-native'
import { createBottomTabNavigator, createMaterialTopTabNavigator, createAppContainer } from 'react-navigation'
import { FontAwesome, Ionicons } from '@expo/vector-icons'

function Home () {
  return (
    <View style={styles.container}>
      <Text>HOME</Text>
    </View>
  )
}

function Dashboard () {
  return (
    <View style={styles.container}>
      <Text>Dashboard</Text>
    </View>
  )
}

const routeConfigs = {
  Home: {
    screen: Home,
    navigationOptions: {
      tabBarLabel: 'Home',
      tabBarIcon: () => <FontAwesome name='home' size={30} color='black' />
    }
  },
  Dashboard: {
    screen: Dashboard,
    navigationOptions: {
      tabBarLabel: 'Dashboard',
      tabBarIcon: () => <FontAwesome name='dashboard' size={30} color='black' />
    }
  },
}

const Tabs = (Platform.OS === 'ios') 
              ? createBottomTabNavigator(routeConfigs)
              : createMaterialTopTabNavigator(routeConfigs)

const AppContainer = createAppContainer(Tabs)

export default class App extends React.Component {
  navigation = () => {
    console.log('navegou...')
  }
  render() {
    return (
      <AppContainer />
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
