import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Swiper from "react-native-web-swiper";

import { createDrawerNavigator, createBottomTabNavigator, createStackNavigator } from 'react-navigation';
import TabBarComponent from './component/TabBarComponent';

import HomeScreen from './screen/HomeScreen';
import NotHesaplama from './screen/NotHesaplama';

const DrawerNavigator = createDrawerNavigator({
    Home: HomeScreen,
    'Not Hesaplama': NotHesaplama,

}, {
    initialRouteName: 'Not Hesaplama',
}
);
export default DrawerNavigator;