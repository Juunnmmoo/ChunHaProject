import React from 'react';
import styled from 'styled-components/native';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  Button,
  ImageBackground,
} from 'react-native';
import {
  Fontisto,
  Ionicons,
  AntDesign,
  Entypo,
  FontAwesome5,
  MaterialIcons,
} from '@expo/vector-icons';

import Header from '../Components/Header';
import Footer from '../Components/Footer';
import FooterImformation from '../Components/FooterImformation';

const Container = styled.View`
  flex: 1;
`;
const Main = styled.ScrollView`
  flex: 1;
  background-color: white;
`;
const MyPageHeader = styled.View`
  height: 100px;
  background-color: white;
  align-items: center;
  justify-content: center;
`;
const MyPageHeaderText = styled.Text`
  font-size: 20px;
`;
const FlexBar = styled.View`
  border-width: 1px;
  border-color: black;
  margin: 10px;
`;

export default function App({ navigation }) {
  return (
    <Container>
      <Header navigation={navigation} />
      <Main>
        <MyPageHeader>
          <MyPageHeaderText>MyPage</MyPageHeaderText>
        </MyPageHeader>

        <FlexBar style={{ height: 220 }}>
          <View
            style={{
              flex: 1,
              borderBottomWidth: 1,
              borderBottomColor: '#dddddd',
            }}
          >
            <Text
              style={{ fontWeight: 'bold', lineHeight: 45, marginLeft: 20 }}
            >
              나의 주문처리 현황
            </Text>
          </View>
          <TouchableOpacity
            style={{
              flex: 3,
              borderBottomWidth: 1,
              borderBottomColor: '#dddddd',
              flexDirection: 'row',
            }}
          >
            <View
              style={{
                flex: 1,
                borderRightWidth: 1,
                borderRightColor: '#dddddd',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <Text style={{ lineHeight: 60 }}>입금전</Text>
              <Text style={{ lineHeight: 40, color: 'blue' }}>0</Text>
            </View>
            <View
              style={{
                flex: 1,
                borderRightWidth: 1,
                borderRightColor: '#dddddd',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <Text style={{ lineHeight: 60 }}>배송준비중</Text>
              <Text style={{ lineHeight: 40, color: 'blue' }}>0</Text>
            </View>
            <View
              style={{
                flex: 1,
                borderRightWidth: 1,
                borderRightColor: '#dddddd',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <Text style={{ lineHeight: 60 }}>배송중</Text>
              <Text style={{ lineHeight: 40, color: 'blue' }}>0</Text>
            </View>
            <View
              style={{
                flex: 1,
                borderRightWidth: 1,
                borderRightColor: '#dddddd',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <Text style={{ lineHeight: 60 }}>배송완료</Text>
              <Text style={{ lineHeight: 40, color: 'blue' }}>0</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={{ flex: 1, flexDirection: 'row' }}>
            <View
              style={{
                flex: 1,
                borderRightWidth: 1,
                borderRightColor: '#dddddd',
                justifyContent: 'space-around',
                alignItems: 'center',
                flexDirection: 'row',
              }}
            >
              <Text>취소 : </Text>
              <Text>0</Text>
            </View>
            <View
              style={{
                flex: 1,
                borderRightWidth: 1,
                borderRightColor: '#dddddd',
                justifyContent: 'space-around',
                alignItems: 'center',
                flexDirection: 'row',
              }}
            >
              <Text>교환 : </Text>
              <Text>0</Text>
            </View>
            <View
              style={{
                flex: 1,
                borderRightWidth: 1,
                borderRightColor: '#dddddd',
                justifyContent: 'space-around',
                alignItems: 'center',
                flexDirection: 'row',
              }}
            >
              <Text>반품 : </Text>
              <Text>0</Text>
            </View>
          </TouchableOpacity>
        </FlexBar>

        <FlexBar style={{ height: 500 }}>
          <TouchableOpacity
            onPress={() => alert('clicked!')}
            style={{
              flex: 1,
              flexDirection: 'row',
              alignItems: 'center',
              borderBottomColor: '#dddddd',
              borderBottomWidth: 1,
              justifyContent: 'center',
            }}
          >
            <View
              style={{
                flex: 1,
                alignItems: 'flex-start',
                flexDirection: 'row',
                paddingLeft: 10,
              }}
            >
              <FontAwesome5 name="list-alt" size={20} color="black" />
              <Text style={{ paddingLeft: 10, fontSize: 18 }}>주문조회</Text>
            </View>
            <View style={{ flex: 1, alignItems: 'flex-end', paddingRight: 10 }}>
              <AntDesign name="right" size={20} color="black" />
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => alert('clicked!')}
            style={{
              flex: 1,
              flexDirection: 'row',
              alignItems: 'center',
              borderBottomColor: '#dddddd',
              borderBottomWidth: 1,
              justifyContent: 'center',
            }}
          >
            <View
              style={{
                flex: 1,
                alignItems: 'flex-start',
                flexDirection: 'row',
                paddingLeft: 10,
              }}
            >
              <Ionicons name="person" size={20} color="black" />
              <Text style={{ paddingLeft: 10, fontSize: 18 }}>회원정보</Text>
            </View>
            <View style={{ flex: 1, alignItems: 'flex-end', paddingRight: 10 }}>
              <AntDesign name="right" size={20} color="black" />
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate('HeartPage')}
            style={{
              flex: 1,
              flexDirection: 'row',
              alignItems: 'center',
              borderBottomColor: '#dddddd',
              borderBottomWidth: 1,
              justifyContent: 'center',
            }}
          >
            <View
              style={{
                flex: 1,
                alignItems: 'flex-start',
                flexDirection: 'row',
                paddingLeft: 10,
              }}
            >
              <AntDesign name="heart" size={20} color="black" />
              <Text style={{ paddingLeft: 10, fontSize: 18 }}>관심상품</Text>
            </View>
            <View style={{ flex: 1, alignItems: 'flex-end', paddingRight: 10 }}>
              <AntDesign name="right" size={20} color="black" />
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate('CouponPage')}
            navigation={navigation}
            style={{
              flex: 1,
              flexDirection: 'row',
              alignItems: 'center',
              borderBottomColor: '#dddddd',
              borderBottomWidth: 1,
              justifyContent: 'center',
            }}
          >
            <View
              style={{
                flex: 1,
                alignItems: 'flex-start',
                flexDirection: 'row',
                paddingLeft: 10,
              }}
            >
              <Entypo name="ticket" size={20} color="black" />
              <Text style={{ paddingLeft: 10, fontSize: 18 }}>쿠폰</Text>
            </View>
            <View style={{ flex: 1, alignItems: 'flex-end', paddingRight: 10 }}>
              <AntDesign name="right" size={20} color="black" />
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate('ReviewPage')}
            style={{
              flex: 1,
              flexDirection: 'row',
              alignItems: 'center',
              borderBottomColor: '#dddddd',
              borderBottomWidth: 1,
              justifyContent: 'center',
            }}
          >
            <View
              style={{
                flex: 1,
                alignItems: 'flex-start',
                flexDirection: 'row',
                paddingLeft: 10,
              }}
            >
              <MaterialIcons name="post-add" size={20} color="black" />
              <Text style={{ paddingLeft: 10, fontSize: 18 }}>리뷰관리</Text>
            </View>
            <View style={{ flex: 1, alignItems: 'flex-end', paddingRight: 10 }}>
              <AntDesign name="right" size={20} color="black" />
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate('AdressPage')}
            style={{
              flex: 1,
              flexDirection: 'row',
              alignItems: 'center',
              borderBottomColor: '#dddddd',
              borderBottomWidth: 1,
              justifyContent: 'center',
            }}
          >
            <View
              style={{
                flex: 1,
                alignItems: 'flex-start',
                flexDirection: 'row',
                paddingLeft: 10,
              }}
            >
              <MaterialIcons name="local-shipping" size={20} color="black" />
              <Text style={{ paddingLeft: 10, fontSize: 18 }}>
                배송주소록 관리
              </Text>
            </View>
            <View style={{ flex: 1, alignItems: 'flex-end', paddingRight: 10 }}>
              <AntDesign name="right" size={20} color="black" />
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>
              navigation.reset({
                routes: [
                  {
                    name: 'Loading',
                  },
                ],
              })
            }
            style={{
              flex: 1,
              flexDirection: 'row',
              alignItems: 'center',
              borderBottomColor: '#dddddd',
              borderBottomWidth: 1,
              justifyContent: 'center',
            }}
          >
            <View
              style={{
                flex: 1,
                alignItems: 'flex-start',
                flexDirection: 'row',
                paddingLeft: 10,
              }}
            >
              <Entypo name="email" size={20} color="black" />
              <Text style={{ paddingLeft: 10, fontSize: 18 }}>로그아웃</Text>
            </View>
            <View style={{ flex: 1, alignItems: 'flex-end', paddingRight: 10 }}>
              <AntDesign name="right" size={20} color="black" />
            </View>
          </TouchableOpacity>
        </FlexBar>

        <FooterImformation />
      </Main>
      <Footer navigation={navigation} />
    </Container>
  );
}
