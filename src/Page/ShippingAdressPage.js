import React, { useState } from 'react';
import { AntDesign } from '@expo/vector-icons';
import styled from 'styled-components/native';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import FooterImformation from '../Components/FooterImformation';
import AdressList from '../Components/Adress/AdressList';
import Adrees from '../Components/Adress/Adress';

const Container = styled.View`
  flex: 1;
`;
const Main = styled.ScrollView`
  flex: 1;
  background-color: white;
`;
export default function App({ navigation }) {
  let getDate = new Date();
  let year = getDate.getFullYear();
  let month =
    getDate.getMonth() + 1 > 9
      ? getDate.getMonth() + 1
      : '0' + (getDate.getMonth() + 1);
  let day = getDate.getDate() > 9 ? getDate.getDate() : '0' + getDate.getDate();

  const [newAdress, setAdress] = useState('');
  const [newName, setName] = useState('');
  const [adresses, setAdresses] = useState({});

  const addAdress = () => {
    if (newAdress.length < 1) {
      return;
    }
    const ID = Date.now().toString();
    const newAdressObject = {
      [ID]: {
        id: ID,
        name: newName,
        adress: newAdress,
        date: year + '-' + month + '-' + day,
      },
    };
    alert('배송지 등록이 완료되었습니다.');
    setName('');
    setAdress('');
    setAdresses({ ...adresses, ...newAdressObject });
  };

  const deleteAdress = (id) => {
    const currentAdresses = Object.assign({}, adresses);
    delete currentAdresses[id];
    setAdresses(currentAdresses);
  };

  return (
    <Container>
      <Header navigation={navigation} />
      <Main>
        <AdressList
          placeholder1="+ 배송지 닉네임 입력"
          value1={newName}
          onChangeText1={(text) => setName(text)}
          placeholder2="+ 배송주소 입력"
          value2={newAdress}
          onChangeText2={(text) => setAdress(text)}
          onSubmitEditing2={addAdress}
        />
        {Object.values(adresses)
          .reverse()
          .map((item) => (
            <Adrees
              key={item.id}
              name={item.name}
              date={item.date}
              id={item.id}
              adress={item.adress}
              deleteAdress={deleteAdress}
            />
          ))}
        <FooterImformation />
      </Main>
      <Footer navigation={navigation} />
    </Container>
  );
}
