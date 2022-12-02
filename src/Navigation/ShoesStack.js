import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import ProductDetailPage from '../Page/ProductDetailPage';
import ProductListPage from '../Page/ProductListPage';
import MainPage from '../Page/MainPage';
import CartPage from '../Page/CartPage';
import Shoes from '../Page/listPage/Shoes';

const Stack = createStackNavigator();

const ShoesStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="Shoes"
    >
      <Stack.Screen name="Shoes" component={Shoes} />
      <Stack.Screen name="ProductDetail" component={ProductDetailPage} />
      <Stack.Screen name="Home" component={MainPage} />
      <Stack.Screen name="CartPage" component={CartPage} />
    </Stack.Navigator>
  );
};

export default ShoesStack;
