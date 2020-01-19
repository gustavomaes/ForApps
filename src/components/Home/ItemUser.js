import React from 'react';
import styled from 'styled-components/native';

// Redux
import CommonText from 'components/common/CommonText';

const Wrapper = styled.View`
  width: 100;
  height: 100px;
  flex-direction: row;
  align-items: center;
`;

const WrapperText = styled.View`
  margin-left: 16px;
  width: 100;
`;

const Avatar = styled.Image`
  margin-left: 16px;
  width: 80px;
  height: 80px;
  border-radius: 40px;
  align-self: center;
`;

const ItemUser = ({ item }) => {
  return (
    <Wrapper>
      <Avatar source={{ uri: item.avatar }} resizeMode="cover" />
      <WrapperText>
        <CommonText>{item.first_name}</CommonText>
        <CommonText>{item.email}</CommonText>
      </WrapperText>
    </Wrapper>
  );
};

export default ItemUser;
