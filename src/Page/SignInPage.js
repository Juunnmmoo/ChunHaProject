import React, { useContext, useState, useRef } from 'react';
import { ThemeContext } from 'styled-components/native';
import { TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';
import SignInToHome from '../Components/Sign/SignInToHome';
import SignUpButton from '../Components/Loading/LoadToSignUp';
import Input from '../Components/Input';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import axios from 'axios';
import { ip, userId } from '../config';
import { AsyncStorage } from 'react-native';

const Container = styled.View`
  flex: 1;
  padding: 8px;
  background-color: white;
  justify-content: center;
`;
const Main = styled.ScrollView`
  flex: 1;
  background-color: white;
`;
const TitleView = styled.View`
  height: 300px;
  align-items: center;
  justify-content: center;
`;
const TitleText = styled.Text`
  font-size: 45px;
  font-weight: bold;
`;

const InputView = styled.View`
  align-items: center;
`;

const SignInput = styled.TextInput`
  height: 20px;
  margin: 8px;
  padding: 10px;
  border-radius: 10px;
  font-size: 20px;
  background-color: #eeeeee;
  color: black;
`;
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

const ButtonView1 = styled.View`
  height: 40px;
  border-radius: 10px;
  background-color: black;
  margin: 30px;
  margin-bottom: 0px;
  justify-content: center;
  align-items: center;
`;
const ButtonText = styled.Text`
  font-size: 20px;
  color: white;
`;

const SignInPage = ({ navigation }) => {
  const insets = useSafeAreaInsets();
  const theme = useContext(ThemeContext);

  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const refPassword = useRef(null);

  const dosignin = () => {
    if (id == '' && password == '') {
      alert('정보를 전부 입력해주세요!');
      return;
    }
    axios
      .post(`${ip}/signin`, {
        signin: {
          id: id,
          password: password,
        },
      })
      .then((data) => {
        console.log(data.data);
        if (data.data != null) {
          AsyncStorage.setItem('id', data.data.id);
          AsyncStorage.getItem('id').then((result) => {
            alert(result);
          });
          alert('로그인 성공!');
          navigation.replace('Home');
        } else {
          alert('정보를 다시 확인해주세요 !!');
          setId('');
          setPassword('');
          return;
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Container insets={insets}>
      <Main>
        <TitleView>
          <TitleText>Sign In</TitleText>
        </TitleView>
        <Input
          label="Id"
          placeholder="Id"
          returnKeyType="next"
          value={id}
          onChangeText={setId}
          onSubmitEditing={() => refPassword.current.focus()}
        />
        <Input
          ref={refPassword}
          label="Password"
          placeholder="Password"
          returnKeyType="done"
          value={password}
          onChangeText={setPassword}
          isPassword={true}
        />
        <TouchableOpacity onPress={dosignin}>
          <ButtonView>
            <ButtonText>Sign In</ButtonText>
          </ButtonView>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
          <ButtonView1>
            <ButtonText>Go To Sign Up</ButtonText>
          </ButtonView1>
        </TouchableOpacity>
      </Main>
    </Container>
  );
};

export default SignInPage;
