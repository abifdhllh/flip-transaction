import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

// Container List
import TransactionList from 'containers/Transaction/TransactionList';

const Stack = createStackNavigator();

export default function AppNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="TransactionList" headerMode="none">
        <Stack.Screen name="TransactionList" component={TransactionList} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
