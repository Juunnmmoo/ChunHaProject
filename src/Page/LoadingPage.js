import React from 'react';
import styled from 'styled-components/native';
import { TouchableOpacity, ImageBackground } from 'react-native';
import LoadToSignIn from '../Components/Loading/LoadToSignIn';
import LoadToSignUp from '../Components/Loading/LoadToSignUp';

const Container = styled.View`
  flex: 1;
  //align-items: center;
  background-color: white;
  justify-content: center;
`;
const TitleView = styled.View`
  align-items: center;
  justify-content: center;
  margin-bottom: 300px;
`;

const Title = styled.Text`
  font-size: 25px;
  font-weight: bold;
`;

const ButtonView = styled.View`
  height: 50px;
  background-color: orange;
`;
const ButtonText = styled.Text`
  font-size: 20px;
  color: white;
`;

export default function App({ navigation }) {
  return (
    <Container>
      <ImageBackground
        source={require(`../image/imageback01.jpeg`)}
        style={{ height: 500, width: '100%' }}
      >
        <TitleView>
          <Title></Title>
        </TitleView>
        <LoadToSignIn navigation={navigation} />
        <LoadToSignUp navigation={navigation} />
      </ImageBackground>
    </Container>
  );
}
