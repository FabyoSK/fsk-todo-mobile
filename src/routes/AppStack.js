import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Landing from '../pages/Landing';
import TodoList from '../pages/TodoList';

const {Navigator, Screen} = createStackNavigator();

function AppStack() {
  return (
    <NavigationContainer>
      <Navigator screenOptions={{headerShown: false}}>
        <Screen name="Landing" component={Landing} />
        <Screen name="TodoList" component={TodoList} />
      </Navigator>
    </NavigationContainer>
  );
}

export default AppStack;
