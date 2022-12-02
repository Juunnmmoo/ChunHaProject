import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import MainPage from '../Page/MainPage';
import CartPage from '../Page/CartPage';
import ProductDetailPage from '../Page/ProductDetailPage';
import LoadingPage from '../Page/LoadingPage';
import SignInPage from '../Page/SignInPage';
import SignUpPage from '../Page/SignUpPage';
import ReviewPage from '../Page/ReviewPage';
import HeartPage from '../Page/HeartPage';
import ShioppingAdressPage from '../Page/ShippingAdressPage';
import MyPage from '../Page/MyPage';
import CouponPage from '../Page/CouponPage';

const Stack = createStackNavigator();

const MyPageStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="Loading"
    >
      <Stack.Screen name="Loading" component={LoadingPage} />
      <Stack.Screen name="Home" component={MainPage} />
      <Stack.Screen name="SignIn" component={SignInPage} />
      <Stack.Screen name="SignUp" component={SignUpPage} />
      <Stack.Screen name="MyPage" component={MyPage} />
      <Stack.Screen name="CouponPage" component={CouponPage} />
      <Stack.Screen name="ReviewPage" component={ReviewPage} />
      <Stack.Screen name="CartPage" component={CartPage} />
      <Stack.Screen name="HeartPage" component={HeartPage} />
      <Stack.Screen name="AdressPage" component={ShioppingAdressPage} />
      <Stack.Screen name="ProductDetail" component={ProductDetailPage} />
    </Stack.Navigator>
  );
};

export default MyPageStack;
