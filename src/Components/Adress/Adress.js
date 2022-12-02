import React from 'react';
import styled from 'styled-components/native';
import PropTypes from 'prop-types';
import DeleteButton from '../DeleteButton';

const Container = styled.View`
    margin: 10px;
    background-color: black;
    border-radius: 10px;
    padding: 5px;
`;
const TopView = styled.View`
    flex: 1;
    flex-direction: row;
    justify-content: space-between;
    padding: 10px;
    border-radius: 10px;

`;
const BottomView = styled.View`
    background-color: white;
    flex: 1;
    flex-direction: row;
    justify-content: space-between;
    padding: 10px;
    border-radius: 10px;
    margin: 5px;

`;

const TopContents = styled.Text`
    font-size: 15px;
    color: white;
`;
const BottomContents = styled.Text`
    font-size: 15px;
`;
const Coupon = ({name, date, adress, deleteAdress, id}) => {
    
    return(
        <Container>
            <TopView>
                <TopContents>{name}</TopContents>
                <TopContents>{date}</TopContents>
            </TopView>
            <BottomView>
                <BottomContents>{adress}</BottomContents>
                <DeleteButton id={id} onPress={deleteAdress}/>
            </BottomView>
        </Container>
    );
}

export default Coupon;