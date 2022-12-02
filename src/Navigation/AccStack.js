import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import ProductDetailPage from '../Page/ProductDetailPage';
import ProductListPage from '../Page/ProductListPage';
import Acc from '../Page/listPage/Acc';
import MainPage from '../Page/MainPage';
import CartPage from '../Page/CartPage';

const Stack = createStackNavigator();

const AccStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="Acc"
    >
      <Stack.Screen name="Acc" component={Acc} />
      <Stack.Screen name="ProductDetail" component={ProductDetailPage} />
      <Stack.Screen name="Home" component={MainPage} />
      <Stack.Screen name="CartPage" component={CartPage} />
    </Stack.Navigator>
  );
};

export default AccStack;
