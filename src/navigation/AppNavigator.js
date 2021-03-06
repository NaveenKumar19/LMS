import {createDrawerNavigator} from '@react-navigation/drawer';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {StyleSheet} from 'react-native';
const Stack = createStackNavigator();
import Screens from '../screens';
import {connect} from 'react-redux';

const DashBoardNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="HomeScreen"
      component={Screens.HomeScreen}
      options={{headerShown: false}}
    />
    <Stack.Screen
      name="BookDetailScreen"
      component={Screens.BookDetailScreen}
      options={{headerShown: false}}
    />
  </Stack.Navigator>
);


const AppNavigator = ({isLoggedIn}) => {
  return (
    <Stack.Navigator>
      {!isLoggedIn && (
        <Stack.Screen
          name="LoginScreen"
          component={Screens.LoginScreen}
          options={{headerShown: false}}
        />
      )}
      <Stack.Screen
        name="DashBoardNavigator"
        component={DashBoardNavigator}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};
const styles = StyleSheet.create({drawer: {width: '100%'}});

const mapStatesToProp = (state) => {
  return {
    isLoggedIn: state.login.userData.isLoggedIn,
  };
};
export default connect(mapStatesToProp)(AppNavigator);
