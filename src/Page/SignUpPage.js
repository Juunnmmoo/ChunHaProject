import React, { useState, useRef } from 'react';
import { ThemeContext } from 'styled-components/native';
import styled from 'styled-components/native';
import { TouchableOpacity, View, Text } from 'react-native';
import SignInToHome from '../Components/Sign/SignInToHome';
import SignUpButton from '../Components/Loading/LoadToSignUp';
import Input from '../Components/Input';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import SignUpToSignIn from '../Components/Sign/SignUpToSignIn';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import axios from 'axios';
import { ip, userId } from '../config';

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
  height: 200px;
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
  margin-top: 50px;
  margin-bottom: 30px;
  justify-content: center;
  align-items: center;
`;
const ButtonText = styled.Text`
  font-size: 20px;
  color: white;
`;
const ButtonView1 = styled.View`
  height: 40px;
  border-radius: 10px;
  background-color: black;
  margin: 30px;
  margin-top: 0px;
  margin-bottom: 30px;
  justify-content: center;
  align-items: center;
`;

const SignUpPage = ({ navigation }) => {
  const insets = useSafeAreaInsets();

  const [id, setId] = useState('');
  const [name, setName] = useState('');
  // const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  // const [email2, setEmail2] = useState('');
  // const [totalEmail, setTotalEmail] = useState('');

  const refName = useRef(null);
  const refPhone = useRef(null);
  const refEmail = useRef(null);
  // const refEmail2 = useRef(null);
  const refPassword = useRef(null);
  const refPasswordConfirm = useRef(null);

  const dosignup = () => {
    if (
      id == '' &&
      name == '' &&
      // email == '' &&
      // email2 == '' &&
      phone == '' &&
      password == '' &&
      passwordConfirm == ''
    ) {
      alert('정보를 전부 입력해주세요!');
      return;
    }

    if (password != passwordConfirm) {
      alert('비밀번호가 다릅니다.');
      return;
    }

    // setTotalEmail(email + email2);

    axios
      .post(`${ip}/signup`, {
        signup: {
          id: id,
          name: name,
          // email: totalEmail,
          password: password,
          phone: phone,
          passwordConfirm: passwordConfirm,
        },
      })
      .then((result) => {
        const data = result.data;
        alert('회원가입 성공!');
      })
      .catch((err) => {
        console.log(err);
      });
    navigation.replace('SignIn');
  };

  return (
    <KeyboardAwareScrollView>
      <Container insets={insets}>
        <Main>
          <TitleView>
            <TitleText>Sign Up</TitleText>
          </TitleView>
          <Input
            label="Id"
            placeholder="Id"
            returnKeyType="next"
            value={id}
            onChangeText={setId}
            onSubmitEditing={() => refName.current.focus()}
          />
          <Input
            ref={refName}
            label="Name"
            placeholder="Name"
            returnKeyType="next"
            value={name}
            onChangeText={setName}
            onSubmitEditing={() => refPhone.current.focus()}
          />

          {/* <Input
              ref={refEmail}
              label="Email"
              placeholder="Email"
              returnKeyType="next"
              value={email}
              onChangeText={(text) => setEmail(text)}
              onSubmitEditing={() => refPhone.current.focus()}
            /> */}

          <Input
            ref={refPhone}
            label="Phone"
            placeholder="Phone"
            returnKeyType="next"
            value={phone}
            onChangeText={setPhone}
            onSubmitEditing={() => refPassword.current.focus()}
          />
          <Input
            ref={refPassword}
            label="Password"
            placeholder="Password"
            returnKeyType="next"
            value={password}
            onChangeText={setPassword}
            isPassword={true}
            onSubmitEditing={() => refPasswordConfirm.current.focus()}
          />
          <Input
            ref={refPasswordConfirm}
            label="Password Confirm"
            placeholder="Password"
            returnKeyType="done"
            value={passwordConfirm}
            onChangeText={setPasswordConfirm}
            isPassword={true}
            onSubmitEditing={() => refPasswordConfirm.current.focus()}
          />

          {/* <SignUpToSignIn name={name} email={email} password={password} PasswordConfirm={passwordConfirm} navigation={navigation}/> */}

          <TouchableOpacity onPress={dosignup}>
            <ButtonView>
              <ButtonText>Sign Up</ButtonText>
            </ButtonView>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('SignIn')}>
            <ButtonView1>
              <ButtonText>Go To Sign In</ButtonText>
            </ButtonView1>
          </TouchableOpacity>
        </Main>
      </Container>
    </KeyboardAwareScrollView>
  );
};

export default SignUpPage;
