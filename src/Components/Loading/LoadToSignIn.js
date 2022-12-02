import react from 'react';
import styled from 'styled-components/native';
import { View, Image, TouchableOpacity, Button } from 'react-native';

const ButtonView = styled.View`
  height: 40px;
  border-radius: 10px;
  background-color: black;
  margin: 30px;
  margin-top: 100px;
  margin-bottom: 0px;
  justify-content: center;
  align-items: center;
`;
const ButtonText = styled.Text`
  font-size: 20px;
  color: white;
`;

const LoadToSignIn = ({ navigation }) => {
  const click = () => {
    navigation.replace('SignIn');
  };
  return (
    <TouchableOpacity onPress={click}>
      <ButtonView>
        <ButtonText>Sign In</ButtonText>
      </ButtonView>
    </TouchableOpacity>
  );
};

export default LoadToSignIn;
