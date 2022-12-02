import { React, useState, useEffect } from 'react';
import { View, Image, Button, TouchableOpacity, Text } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import styled from 'styled-components/native';
import Axios from 'axios';
import { ip, userId } from '../../config';
import { append } from 'cheerio/lib/api/manipulation';
import { data } from 'cheerio/lib/api/attributes';
import { AsyncStorage } from 'react-native';

const Container = styled.View`
  flex: 1;
  margin-bottom: 30px;
`;

const BottomView = styled.View`
  height: 30px;
  margin: 15px;
  border-bottom-width: 2px;
  border-bottom-color: black;
`;

const TitleBigText = styled.Text`
  flex: 1;
  font-weight: bold;
  font-size: 20px;
`;

const TitleMiddleText = styled.Text`
  flex: 1;
  font-size: 20px;
`;
const PurchaseButton = styled.TouchableOpacity`
  height: 40px;
  background-color: black;
  margin: 15px;
  margin-bottom: 3px;
  align-items: center;
  justify-content: center;
`;

const ProductDetailMiddle = (product) => {
  const [wishTemp, setWishTemp] = useState(0);
  const [cartTemp, setCartTemp] = useState(0);
  const [color, setColor] = useState(null);
  const [size, setSize] = useState(null);
  const [detail, setDetail] = useState();
  const [gang, setGang] = useState();

  const goWish = async () => {
    if (wishTemp != 0) {
      alert('이미 찜 하셨습니다!');
      return;
    }
    await Axios.post(`${ip}/addWish`, {
      params: { userId: gang, productData: product.product.prodnum },
    })
      .then((data) => {
        alert('관심상품 등록이 완료됐습니다!!');
      })
      .catch((err) => {
        console.log(err);
      });
    setWishTemp(1);
  };
  const goCart = async () => {
    if (size == null || color == null) {
      alert('색상과 사이즈를 선택후 장바구니에 담아주세요!!');
      return;
    }
    if (cartTemp != 0) {
      alert('이미 장바구니에 담으셨습니다!');
      return;
    }
    await Axios.post(`${ip}/addCart`, {
      params: {
        userId: gang,
        productData: product.product.prodnum,
        color: color,
        size: size,
      },
    })
      .then((data) => {
        alert('장바구니 등록이 완료됐습니다!!');
      })
      .catch((err) => {
        console.log(err);
      });
    setCartTemp(1);
  };

  const getId = () => {
    AsyncStorage.getItem('id').then((result) => {
      setGang(result);
    });
  };

  const findDetail = async () => {
    await Axios.get(`${ip}/findDetail`, {
      params: {
        color: color,
        size: size,
        productData: product.product.prodnum,
      },
    })
      .then((data) => {
        setDetail(data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getId();
  }, []);

  const white = () => {
    alert('white색상 선택');
    setColor('WHITE');
    setCartTemp(0);
  };
  const black = () => {
    alert('black색상 선택');
    setColor('BLACK');
    setCartTemp(0);
  };
  const s = () => {
    alert('S 선택');
    setSize('S');
    setCartTemp(0);
  };
  const m = () => {
    alert('M 선택');
    setSize('M');
    setCartTemp(0);
  };
  const l = () => {
    alert('L 선택');
    setSize('L');
    setCartTemp(0);
  };

  return (
    <Container>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-around',
          margin: 20,
          marginTop: 0,
          paddingBottom: 20,
          borderBottomColor: 'black',
          borderBottomWidth: 2,
        }}
      >
        <Button title="white" color={'black'} onPress={white} />
        <Button title="black" color={'black'} onPress={black} />
      </View>
      <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
        <Button title="S" color={'black'} onPress={s} />
        <Button title="M" color={'black'} onPress={m} />
        <Button title="L" color={'black'} onPress={l} />
      </View>
      <PurchaseButton>
        <Text style={{ color: 'white' }}>구매하기</Text>
      </PurchaseButton>
      <View style={{ flexDirection: 'row', marginLeft: 15, marginRight: 15 }}>
        <TouchableOpacity
          style={{
            flex: 1,
            height: 40,
            alignItems: 'center',
            justifyContent: 'center',
            borderWidth: '1px',
            borderColor: '#eeeeee',
          }}
          onPress={goCart}
        >
          <Text>장바구니</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            flex: 1,
            height: 40,
            alignItems: 'center',
            justifyContent: 'center',
            borderWidth: '1px',
            borderColor: '#eeeeee',
          }}
          onPress={goWish}
        >
          <Text>찜하기</Text>
        </TouchableOpacity>
      </View>
      <BottomView />
    </Container>
  );
};

export default ProductDetailMiddle;
