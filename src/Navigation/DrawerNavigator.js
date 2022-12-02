import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import MainPage from '../Page/MainPage';
import MyPage from '../Page/MyPage';
import MyPageStack from './MyPageStack';
import ProductStack from './ProductStack';
import HomeStack from './HomeStack';
import OuterStack from './OuterStack';
import TopStack from './TopStack';
import BottomerStack from './BottomStack';
import ShoesStack from './ShoesStack';
import BagStack from './BagStack';
import AccStack from './AccStack';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator initialRouteName="Home" backBehavior="initialRoute">
      <Drawer.Screen
        name="Home"
        component={HomeStack}
        options={{ drawerLabel: 'Home' }}
        screenOptions={{ headerShown: false }}
      />
      <Drawer.Screen
        name="Outer"
        component={OuterStack}
        options={{ drawerLabel: 'Outer' }}
        screenOptions={{ headerShown: false }}
      />
      <Drawer.Screen
        name="Top"
        component={TopStack}
        options={{ drawerLabel: 'Top' }}
        screenOptions={{ headerShown: false }}
      />
      <Drawer.Screen
        name="Bottom"
        component={BottomerStack}
        options={{ drawerLabel: 'Bottom' }}
        screenOptions={{ headerShown: false }}
      />
      <Drawer.Screen
        name="Shoes"
        component={ShoesStack}
        options={{ drawerLabel: 'Shoes' }}
        screenOptions={{ headerShown: false }}
      />
      <Drawer.Screen
        name="Bag"
        component={BagStack}
        options={{ drawerLabel: 'Bag' }}
        screenOptions={{ headerShown: false }}
      />
      <Drawer.Screen
        name="Acc"
        component={AccStack}
        options={{ drawerLabel: 'Acc' }}
        screenOptions={{ headerShown: false }}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
