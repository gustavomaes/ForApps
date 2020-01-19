import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components/native';
import Toast from 'components/Toast';
import createRootNavigator from './router';

const Container = styled.View`
  flex: 1;
`;

const NavigationView = ({ token }) => {
  const toast = useSelector(state => state.toast);

  const [Launch, setLauch] = useState(null);

  useEffect(() => {
    setLauch(() => createRootNavigator(token));
  }, []);

  return (
    <Container>
      {/* <StatusBar /> */}
      {toast.show && <Toast />}
      {/* <Content> */}
      {Launch && <Launch />}
      {/* </Content> */}
    </Container>
  );
};

export default NavigationView;
