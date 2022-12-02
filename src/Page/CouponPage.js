import React, { useEffect, useState } from 'react';
import { AntDesign } from '@expo/vector-icons';
import styled from 'styled-components/native';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import FooterImformation from '../Components/FooterImformation';
import CouponList from '../Components/Coupon/CouponList';
import Coupon from '../Components/Coupon/Coupon';
import Axios from 'axios';
import { ip, userId } from '../config';
import DeleteButton from '../Components/DeleteButton';
import { AsyncStorage } from 'react-native';

const Container = styled.View`
  flex: 1;
`;
const Main = styled.ScrollView`
  flex: 1;
  background-color: white;
`;

const CouponListView = styled.View`
  margin: 10px;
  background-color: black;
  border-radius: 10px;
`;

const CouponListTextView = styled.View`
  flex-direction: row;
  justify-content: space-around;
  border-radius: 10px;
  margin: 10px;
  background-color: #eeeeee;
`;

const CouponListText = styled.Text`
  padding: 5px;
  font-size: 15px;
  margin: 10px;
  color: black;
  font-weight: bold;
`;

const TitleView = styled.View`
  height: 150px;
  align-items: center;
  justify-content: center;
`;

const TitleText = styled.Text`
  font-size: 25px;
  font-weight: bold;
`;

const CouponView = styled.View`
  margin: 10px;
  border-width: 1px;
  border-color: gray;
  background-color: black;
  border-radius: 10px;
`;

const CouponText = styled.Text`
  flex: 1;
  height: 40px;
  margin: 10px;
  margin-bottom: 5px;
  padding: 10px;
  font-size: 20px;
  color: white;
  font-weight: bold;
`;

const CouponInput = styled.TextInput`
  flex: 1;
  height: 40px;
  margin: 10px;
  padding: 10px;
  border-radius: 10px;
  font-size: 20px;
  background-color: #eeeeee;
  color: black;
`;

export default function App({ navigation }) {
  const [couponNum, setCouponNum] = useState('');
  const [getCoupon, setGetCoupon] = useState([]);
  const [coupons, setCoupons] = useState([]);
  const [gang, setGang] = useState();

  const inputCoupon = async () => {
    if (couponNum == null) {
      alert('쿠폰번호를 입력해주세요!.');
      return;
    }
    await Axios.post(`${ip}/chCoupon`, {
      params: { couponPin: couponNum, userId: gang },
    })
      .then((data) => {
        if (data.success == false) {
          alert('정확하지 않은 쿠폰번호입니다!');
          return;
        }
        loadCoupon();
        setCouponNum('');
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const loadCoupon = async () => {
    AsyncStorage.getItem('id').then((result) => {
      setGang(result);
    });

    await Axios.get(`${ip}/loadCoupon`, {
      params: { userId: gang },
    })
      .then((data) => {
        setCoupons(data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const deleteCoupon = async (id) => {
    await Axios.post(`${ip}/deleteCoupon`, {
      params: { userId: gang, couponNum: id },
    })
      .then((data) => {
        loadCoupon();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    loadCoupon();
  }, []);

  return (
    <Container>
      <Header navigation={navigation} />
      <Main>
        <TitleView>
          <TitleText>My Coupon</TitleText>
        </TitleView>
        <CouponView>
          <CouponText>쿠폰 등록하기</CouponText>
          <CouponInput
            placeholder="+ 쿠폰번호 입력"
            maxLength={10}
            returnKeyType="done"
            keyboardAppearance="dark"
            value={couponNum}
            onChangeText={(text) => setCouponNum(text)}
            onSubmitEditing={inputCoupon}
          />
        </CouponView>
        <CouponListView>
          <CouponListTextView>
            <CouponListText>쿠폰이름</CouponListText>
            <CouponListText>할인금액</CouponListText>
            <CouponListText>발급일자</CouponListText>
            <CouponListText>사용여부</CouponListText>
            <CouponListText>삭제하기</CouponListText>
          </CouponListTextView>
          {Object.values(coupons)
            .reverse()
            .map((item) => (
              <Coupon
                key={item.coupnum}
                couponNum={item.pinnumber}
                discount={item.saleprice}
                couponName={item.coupname}
                status={item.status}
                id={item.coupnum}
                deleteCoupon={deleteCoupon}
              />
            ))}
        </CouponListView>
        <FooterImformation />
      </Main>
      <Footer navigation={navigation} />
    </Container>
  );
}
