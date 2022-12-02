import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import ProductDetailPage from '../Page/ProductDetailPage';
import ProductListPage from '../Page/ProductListPage';
import MainPage from '../Page/MainPage';
import CartPage from '../Page/CartPage';
import Outer from '../Page/listPage/Outer';

const Stack = createStackNavigator();

const OuterStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="Outer"
    >
      <Stack.Screen name="Outer" component={Outer} />
      <Stack.Screen name="ProductDetail" component={ProductDetailPage} />
      <Stack.Screen name="Home" component={MainPage} />
      <Stack.Screen name="CartPage" component={CartPage} />
    </Stack.Navigator>
  );
};

export default OuterStack;
