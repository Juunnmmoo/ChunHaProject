import React from 'react';
import styled from 'styled-components/native';
import {} from 'react-native';

import Header from '../Components/Header';
import Footer from '../Components/Footer';
import FooterImformation from '../Components/FooterImformation';
import ProductMainView from '../Components/Product/ProductMainView';
import TitleImage from '../Components/Product/TitleImage';
import MiddleImage from '../Components/Product/MiddleImage';

const Container = styled.View`
  flex: 1;
`;

const Main = styled.ScrollView`
  flex: 1;
  background-color: white;
`;

export default function App({ navigation }) {
  return (
    <Container>
      <Header navigation={navigation} />
      <Main>
        <TitleImage
          imageSouce1={{
            uri: 'https://file.cafe24cos.com/banner-admin-live/upload/raucohouse/55a5e7bb-6bbd-40ec-8bc1-0589563ef854.png',
          }}
        />
        <MiddleImage
          imageSouce={{
            uri: 'https://raucohouse.com/web/product/big/202210/6f7b7692ae3423f52209a45be8fdfd76.jpg',
          }}
        />
        <MiddleImage
          imageSouce={{
            uri: 'https://raucohouse.com/web/product/big/202208/a66652b5718943e2b0eacd66fdf46ded.png',
          }}
        />
        <MiddleImage
          imageSouce={{
            uri: 'https://raucohouse.com/web/product/big/202208/a107639b2c554ed05f602a40c6d467b5.jpg',
          }}
        />
        <MiddleImage
          imageSouce={{
            uri: 'https://raucohouse.com/web/product/big/202208/be5d5d196e73d9ad83b4064d85f2841b.jpg',
          }}
        />
        <ProductMainView
          navigation={navigation}
          imageSouce1={{
            uri: 'https://raucohouse.com/web/product/big/202210/988a666ee6295e77c41df1df8ae8f114.jpg',
          }}
          imageSouce2={{
            uri: 'https://raucohouse.com/web/product/big/202210/07d5a51e535f25351e9156cfba85746b.jpg',
          }}
          name1={'슬로우 카고 와이드 밴딩 팬츠'}
          name2={'베벌리 힐스 프린팅 오버 스웻 셔츠'}
          gender1={'(UNISEX)'}
          gender2={'(UNISEX)'}
          price1={'32000'}
          price2={'16000'}
        />

        <ProductMainView
          navigation={navigation}
          imageSouce1={{
            uri: 'https://raucohouse.com/web/product/big/202210/03ea7ef8e95fccda71bd1ed12c412de4.jpg',
          }}
          imageSouce2={{
            uri: 'https://raucohouse.com/web/product/big/202210/22f1606ae2dbe9284d4357eb6cecf2a1.jpg',
          }}
          name1={'컬러 믹스 니트 버킷 햇'}
          name2={'캐주얼 스트라이프 숏 비니'}
          gender1={'(UNISEX)'}
          gender2={'(UNISEX)'}
          price1={'32000'}
          price2={'16000'}
        />

        <ProductMainView
          navigation={navigation}
          imageSouce1={{
            uri: 'https://raucohouse.com/web/product/big/202210/d8c31cb02c40e90fc46fba8860707bae.webp',
          }}
          imageSouce2={{
            uri: 'https://raucohouse.com/web/product/big/202210/41a291fd5ad62bdd9fcdd26dca48ff9f.jpg',
          }}
          name1={'핸드 스트랩 빅 나일론 크로스 백'}
          name2={'언더 루프 코듀로이 와이드 밴딩 팬츠'}
          gender1={'(UNISEX)'}
          gender2={'(UNISEX)'}
          price1={'32000'}
          price2={'16000'}
        />
        <FooterImformation />
        <FooterImformation />
      </Main>
      <Footer navigation={navigation} />
    </Container>
  );
}
