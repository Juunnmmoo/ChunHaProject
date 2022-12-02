import { React, useState, useEffect } from 'react';
import styled from 'styled-components/native';
import { Button, ScrollView, View } from 'react-native';
import Header from '../../Components/Header';
import Footer from '../../Components/Footer';
import FooterImformation from '../../Components/FooterImformation';
import ProductViewLeft from '../../Components/Product/ProductViewLeft';
import ProductViewRight from '../../Components/Product/ProductViewRight';
import ProductListHeader from '../../Components/Product/ProductListHeader';
import Axios from 'axios';
import { ip } from '../../config';

const Container = styled.View`
  flex: 1;
`;

const Main = styled.ScrollView`
  flex: 1;
  background-color: white;
`;

const BigView = styled.View`
  flex: 1;
  background-color: white;
  flex-direction: row;
`;

const MiddleView = styled.View`
  flex: 1;
  background-color: white;
`;
const SelectStyle = styled.TouchableOpacity`
  width: 100px;
  padding: 10px;
  align-items: center;
  justify-content: center;
`;

const SelectText = styled.Text`
  font-size: 10px;
  text-align: center;
  line-height: 30px;
`;

export default function App({ navigation, route }) {
  const [cateName, setCateName] = useState('shortT');

  const [productOdd, setProductOdd] = useState([]);
  const [productEven, setProductEven] = useState([]);

  const getProduct = async () => {
    await Axios.get(`${ip}/product/odd`, {
      params: { subCate: cateName },
    })
      .then((data) => {
        setProductOdd(data.data);
      })
      .catch((err) => {
        console.log(err);
      });

    await Axios.get(`${ip}/product/even`, {
      params: { subCate: cateName },
    })
      .then((data) => {
        setProductEven(data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getProduct();
  }, []);

  return (
    <Container>
      <Header navigation={navigation} />
      <Main>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator
          style={{
            height: 50,
            borderBottomWidth: 0.5,
            borderBottomColor: 'gray',
          }}
        >
          <SelectStyle
            onPress={() => {
              setCateName('shortT');
              getProduct();
            }}
          >
            <SelectText>반팔 티셔츠</SelectText>
          </SelectStyle>

          <SelectStyle
            onPress={() => {
              setCateName('longT');
              getProduct();
            }}
          >
            <SelectText>긴팔 티셔츠</SelectText>
          </SelectStyle>

          <SelectStyle
            onPress={() => {
              setCateName('hood');
              getProduct();
            }}
          >
            <SelectText>후드/스웻셔츠</SelectText>
          </SelectStyle>
          <SelectStyle
            onPress={() => {
              setCateName('knit');
              getProduct();
            }}
          >
            <SelectText>니트/가디건</SelectText>
          </SelectStyle>
          <SelectStyle
            onPress={() => {
              setCateName('shirt');
              getProduct();
            }}
          >
            <SelectText>셔츠</SelectText>
          </SelectStyle>
          <SelectStyle
            onPress={() => {
              setCateName('dress');
              getProduct();
            }}
          >
            <SelectText>원피스</SelectText>
          </SelectStyle>
        </ScrollView>
        <ProductListHeader
          navigation={navigation}
          TitleEn={'TOP'}
          TitleKo={'상의'}
        />

        <BigView>
          <MiddleView>
            {Object.values(productOdd)
              .reverse()
              .map((product) => (
                <ProductViewLeft
                  key={product.prodnum}
                  product={product}
                  navigation={navigation}
                />
              ))}
          </MiddleView>
          <MiddleView>
            {Object.values(productEven)
              .reverse()
              .map((product) => (
                <ProductViewLeft
                  key={product.prodnum}
                  product={product}
                  navigation={navigation}
                />
              ))}
          </MiddleView>
        </BigView>

        <FooterImformation />
      </Main>
      <Footer navigation={navigation} />
    </Container>
  );
}
