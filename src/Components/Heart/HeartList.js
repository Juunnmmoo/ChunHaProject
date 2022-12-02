import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Axios from 'axios';
import { ip, userId } from '../../config';
import ProductViewRight from '../../Components/Product/ProductViewRight';

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
const MiddleView = styled.View`
  flex: 1;
  background-color: white;
  margin: 5px;
`;

const HeartList = ({ navigation }) => {
  // const [product, setProduct] = useState([]);

  // const getProduct = async () => {
  //   await Axios.get(`${ip}/loadWishProduct`, {
  //     params: { userId: userId },
  //   })
  //     .then((data) => {
  //       setProduct(data.data);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // };

  // const deleteProd = async (id) => {
  //   await Axios.post(`${ip}/deleteWish`, {
  //     params: { userId: userId, prodNum: id },
  //   })
  //     .then((data) => {})
  //     .catch((err) => {
  //       console.log(err);
  //     });

  //   getProduct();
  // };

  // useEffect(() => {
  //   getProduct();
  // }, []);

  return (
    <Container>
      <TitleView>
        <TitleText>My WishList</TitleText>
      </TitleView>
      <MiddleView>
        {/* {Object.values(product)
          .reverse()
          .map((product) => (
            <ProductViewRight
              key={product.prodnum}
              product={product}
              navigation={navigation}
              id={product.prodnum}
              deleteProd={deleteProd}
            />
          ))} */}
      </MiddleView>
    </Container>
  );
};

export default HeartList;
