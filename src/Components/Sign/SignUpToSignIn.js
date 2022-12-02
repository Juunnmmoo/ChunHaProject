import react from 'react';
import styled from 'styled-components/native';
import {  View, Image, TouchableOpacity } from 'react-native';

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


const SignUpToSignIn = ({navigation}) => {
    return(
        <TouchableOpacity onPress={() => navigation.replace('SignIn')}>
        <ButtonView>
            <ButtonText>Sign Up</ButtonText>
        </ButtonView>
    </TouchableOpacity>

    );
}

export default SignUpToSignIn;