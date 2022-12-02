import react from 'react';
import styled from 'styled-components/native';
import { View, Image, TouchableOpacity, Button } from 'react-native';

const ButtonView = styled.View`
  height: 40px;
  border-radius: 10px;
  background-color: #007aff;
  margin: 30px;
  margin-top: 100px;
  margin-bottom: 0px;
  justify-content: center;
  align-items: center;
`;
const ButtonText = styled.Text`
  font-size: 20px;
  color: black;
`;

const SignInToHome = ({ navigation }) => {
  return (
    <TouchableOpacity onPress={() => navigation.replace('Home')}>
      <ButtonView>
        <ButtonText>Sign In</ButtonText>
      </ButtonView>
    </TouchableOpacity>
  );
};

export default SignInToHome;
