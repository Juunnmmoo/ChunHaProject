import react from 'react';
import styled from 'styled-components/native';
import { View, Image, TouchableOpacity } from 'react-native';

const ButtonView = styled.View`
  height: 40px;
  border-radius: 10px;
  background-color: black;
  margin: 30px;
  justify-content: center;
  align-items: center;
`;
const ButtonText = styled.Text`
  font-size: 20px;
  color: white;
`;

const LoadToSignUp = ({ navigation }) => {
  return (
    <TouchableOpacity onPress={() => navigation.replace('SignUp')}>
      <ButtonView>
        <ButtonText>Sign Up</ButtonText>
      </ButtonView>
    </TouchableOpacity>
  );
};

export default LoadToSignUp;
