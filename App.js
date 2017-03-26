import React, {Component} from 'react';
import {
  Navigator,
  StatusBar,
  Text
} from 'react-native';

import List from './List';


const RouteMapper = (route, navigationOperations, onComponentRef) => {
  if (route.name === 'list') {
    return (
      <List navigator = {navigationOperations}/>
    )
  } else if (route.name === 'movie') {

  }
};

export default class  App extends Component {
  componentDidMount() {
    StatusBar.setHidden(true);
  }

  render() {
    return (
      <Navigator
        initialRoute={{name: 'list'}}
        configureScene={(route, routeStack) => Navigator.SceneConfigs.FloatFromBottom}
        renderScene={RouteMapper}
      />
    )
  }
}
