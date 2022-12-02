import React, {useState} from 'react';

import styled from 'styled-components';

const Container = styled.View`
    flex: 1;
`;

const TitleView = styled.View`
height: 150px;
align-items: center;
justify-content: center;
`;

const TitleText = styled.Text`
font-size: 25px;
font-weight: bold;
`;

const CartList = () => {
    
    return(
        <Container>
            <TitleView>
                <TitleText>My Cart</TitleText>
            </TitleView>
        </Container>
    )
};


export default CartList;