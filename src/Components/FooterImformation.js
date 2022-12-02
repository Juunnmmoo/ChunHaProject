import { StatusBar } from 'react-native';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, Button, ImageBackground } from 'react-native';
import { Fontisto,  Ionicons, AntDesign, Entypo, FontAwesome5, MaterialIcons } from '@expo/vector-icons';
import styled from 'styled-components/native';

const InformationView1 = styled.View`
    height: 40px;
    border-width: 1px;
    border-color: gray;
    border-top-color: gray;
    border-left-color: gray;
    border-right-color: gray;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
`;

const InformationView2 = styled.View`
    height: 150px;
    border-width: 1px;
    border-top-color: white;
    border-left-color: gray;
    border-right-color: gray;
    border-bottom-color: gray;
    align-items: flex-start;
    padding: 20px;
`;

const InformationView3 = styled.View`
    height: 250px;
    flex-direction: row;
    border-width: 1px;
    border-top-color: white;
    border-left-color: gray;
    border-right-color: gray;
    border-bottom-color: gray;
`;

const InformationView4 = styled.View`
    height: 250px;    
    flex: 1;
    border-width: 1px;
    border-top-color: white;
    border-left-color: #e3e3e3;
    border-right-color: gray;
    border-bottom-color: gray;
    padding: 20px;
    align-items: flex-start;
`;

const InformationView5 = styled.View`
    height: 250px;
    background-color: black;
`;

const InformationText = styled.Text`
     margin: 40px;
     color: gray;
     font-size: 15px;
`;

const ProductName = styled.Text`
    height: 25px;
    font-size: 15px;
    font-weight: bold;
    text-align: center;
    line-height: 25px;
`;

const ProductDetail = styled.Text`
    height: 15px;
    font-size: 10px;
    text-align: center;
    line-height: 15px;
`;

const FooterImformation = () => {
    return(
        <View>
            <InformationView1>
                    <ProductDetail>회사소개</ProductDetail>
                    <ProductDetail>이용약관</ProductDetail>
                    <ProductDetail>PC버전</ProductDetail>
                    <ProductDetail>이용안내</ProductDetail>
                    <ProductDetail>게시판</ProductDetail>
                </InformationView1>
                <InformationView2>
                    <ProductName>Return & Exchange</ProductName>
                    <ProductName>-</ProductName>
                    <ProductDetail>경기도 수원시 상률로 32 대한통운 회기대리점</ProductDetail>
                    <ProductDetail>CJ대한통운 택배 1588-1255</ProductDetail>
                    <ProductDetail>CJ대한통운택배를 이용해주세요</ProductDetail>
                </InformationView2>
                <InformationView3>
                    <InformationView4>
                        <ProductName>CS CENTER</ProductName>
                        <ProductName>-</ProductName>
                        <ProductName>0000 - 0000</ProductName>
                        <ProductDetail>평일 오전 11:00 ~ 오후 06:00</ProductDetail>
                        <ProductDetail>점심 오후 21:00 ~ 오후 01:00</ProductDetail>
                        <ProductDetail>휴무 토, 일 공휴일</ProductDetail>
                        <ProductDetail>메일 myfavoritehouse@naver.com</ProductDetail>
                    </InformationView4>
                    <InformationView4>
                        <ProductName>BANK INFO</ProductName>
                        <ProductName>-</ProductName>
                        <ProductName>카카오뱅크</ProductName>
                        <ProductDetail>3333-09-2995754</ProductDetail>
                        <ProductName>국민은행</ProductName>
                        <ProductDetail>937702-00-789560</ProductDetail>
                        <ProductName>예금주</ProductName>
                        <ProductDetail>양준모</ProductDetail>
                    </InformationView4>

                </InformationView3>

                <InformationView5>

                    <InformationText>
                        상호    주식회사 춘하{"\n"}
                        대표    ooo{"\n"}
                        전화    010-xxxx-xxxx{"\n"}
                        팩스    000-0000-0000{"\n"}
                        주소    경기도 수원시 상률로 32{"\n"}
                        사업자등록번호  000-00-00000
                    </InformationText>

                </InformationView5>
            </View>
    );
}

export default FooterImformation;