import React from 'react';
import styled from 'styled-components/native';
import PropTypes from 'prop-types';
import DeleteButton from '../DeleteButton';

const Container = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: #eeeeee;
  border-radius: 10px;
  padding: 10px;
  margin: 8px;
`;
const Contents = styled.Text`
  font-size: 12px;
`;
const Coupon = ({
  couponNum,
  discount,
  couponName,
  status,
  id,
  deleteCoupon,
}) => {
  return (
    <Container>
      <Contents>{couponName}</Contents>
      <Contents>{discount}</Contents>
      <Contents>{couponNum}</Contents>
      <Contents>{status}</Contents>
      <DeleteButton id={id} onPress={deleteCoupon} />
    </Container>
  );
};

export default Coupon;
