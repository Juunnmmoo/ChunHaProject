import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import ProductDetailPage from '../Page/ProductDetailPage';
import ProductListPage from '../Page/ProductListPage';
import Bag from '../Page/listPage/Bag';
import MainPage from '../Page/MainPage';
import CartPage from '../Page/CartPage';

const Stack = createStackNavigator();

const BagStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="Bag"
    >
      <Stack.Screen name="Bag" component={Bag} />
      <Stack.Screen name="ProductDetail" component={ProductDetailPage} />
      <Stack.Screen name="Home" component={MainPage} />
      <Stack.Screen name="CartPage" component={CartPage} />
    </Stack.Navigator>
  );
};

export default BagStack;
