import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { AntDesign } from '@expo/vector-icons';
import { TouchableOpacity, View } from 'react-native';

const DeleteButton = ({ onPress, id }) => {
  const _onPress = () => {
    onPress(id);
  };
  return (
    <TouchableOpacity onPress={_onPress}>
      <View>
        <AntDesign name="delete" size={20} color="black" />
      </View>
    </TouchableOpacity>
  );
};

export default DeleteButton;
