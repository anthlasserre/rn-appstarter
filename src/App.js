import React from "react"
import { Root } from "native-base"
// import { StackNavigator, DrawerNavigator } from "react-navigation"
import { createAppContainer } from "react-navigation"
import { createStackNavigator } from "react-navigation-stack"
import { createDrawerNavigator } from "react-navigation-drawer"

import Home from "./screens/Home/"
import More from "./screens/More/"

import Sidebar from "./screens/Sidebar/"

const Drawer = createDrawerNavigator(
  {
    Home: { screen: Home },
    More: { screen: More }
  },
  {
    initialRouteName: "Home",
    contentOptions: {
      activeTintColor: "#e91e63"
    },
    contentComponent: props => <Sidebar {...props} />
  }
)

const AppNavigator = createStackNavigator(
  {
    Drawer: { screen: Drawer },
    Home: { screen: Home },
    More: { screen: More }
  },
  {
    initialRouteName: "Drawer",
    headerMode: "none"
  }
)

const AppContainer = createAppContainer(AppNavigator)

export default () =>
  <Root>
    <AppContainer />
  </Root>