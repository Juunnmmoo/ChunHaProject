import React, {useState} from 'react';
import { AntDesign } from '@expo/vector-icons';
import styled from 'styled-components/native';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import FooterImformation from '../Components/FooterImformation';
import ReviewList from '../Components/Review/ReviewList';
import Review from '../Components/Review/Review';

const Container = styled.View`
    flex: 1;
`;
const Main = styled.ScrollView`
    flex: 1;
    background-color: white;
`;
export default function App({navigation}) {
    return (
      <Container>
          <Header navigation={navigation}/>
          <Main>
              <ReviewList/>
              <FooterImformation/>
          </Main>
          <Footer navigation={navigation}/>
      </Container>
    );
  }
  