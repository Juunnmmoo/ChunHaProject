import { StatusBar } from 'react-native';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, Button, ImageBackground } from 'react-native';
import { Fontisto,  Ionicons, AntDesign, Entypo, FontAwesome5, MaterialIcons } from '@expo/vector-icons';
import styled from 'styled-components/native';
import { DrawerActions } from '@react-navigation/native';

const HeaderStyle = styled.View`
    background-color: white;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    height: 55px;
`;

const HeaderImoge = styled.View`
    flex-direction: row;
    flex: 1;
    justify-content: space-around;
`;

const Title = styled.Text`
    font-weight: bold;
    font-size: 18px;
    flex: 3;
    text-align: center;
`;

const Header = ({navigation}) => {
  return (
        <View>
            <View style={{height: 45, backgroundColor: 'black'}}>
                <StatusBar barStyle="light-content"/>
            </View>
            <HeaderStyle>
                <HeaderImoge>
                    <TouchableOpacity onPress={() => {navigation.dispatch(DrawerActions.openDrawer()); navigation.popToTop()}}>
                        <Ionicons name="menu-outline" size={24} color="black"/>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => alert('clicked!')}> 
                        <Fontisto name="world-o" size={24} color="black" />
                    </TouchableOpacity>
                </HeaderImoge>
                
                <Title>My Favorite House</Title>
                
                <HeaderImoge>
                    <TouchableOpacity onPress={() => alert('clicked!')}>
                        <Ionicons name="search-outline" size={24} color="black" />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => alert('clicked!')}>
                        <Ionicons name="ios-cart-outline" size={24} color="black" />
                    </TouchableOpacity>
                </HeaderImoge>
            </HeaderStyle>
        </View>
  );
}

export default Header;
