import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import ProductDetailPage from '../Page/ProductDetailPage';
import ProductListPage from '../Page/ProductListPage';
import MainPage from '../Page/MainPage';
import CartPage from '../Page/CartPage';
import Bottom from '../Page/listPage/Bottom';

const Stack = createStackNavigator();

const BottomStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="Bottom"
    >
      <Stack.Screen name="Bottom" component={Bottom} />
      <Stack.Screen name="ProductDetail" component={ProductDetailPage} />
      <Stack.Screen name="Home" component={MainPage} />
      <Stack.Screen name="CartPage" component={CartPage} />
    </Stack.Navigator>
  );
};

export default BottomStack;
