import React, {Component} from 'react';
import {
  Navigator,
  StatusBar,
  Text
} from 'react-native';

import List from './List';
import Movie from './Movie';


const RouteMapper = (route, navigationOperations, onComponentRef) => {
  if (route.name === 'list') {
    return (
      <List navigator = {navigationOperations}/>
    )
  } else if (route.name === 'movie') {
    return (
      <Movie
      // Pass movie object passed with route down as a prop
      movie={route.movie}
      // Pass navigationOperations as navigator prop
      navigator={navigationOperations}
  />
);
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
