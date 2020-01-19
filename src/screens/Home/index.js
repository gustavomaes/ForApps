import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components/native';

import { usersAction } from 'redux/actions/users';

import Button from 'components/common/Button';
import ItemUser from 'components/Home/ItemUser';

const PageContainer = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding-bottom: 32px;
`;

const List = styled.FlatList`
  width: 100%;
`;

const Home = () => {
  // REDUX
  const dispatch = useDispatch();
  const users = useSelector(state => state.users);

  const handleRefresh = () => {
    dispatch(usersAction(1));
  };

  const handleLoadMore = () => {
    if (users.nextPage <= users.totalPages) {
      dispatch(usersAction(users.nextPage));
    }
  };

  const renderFooter = () => {
    return <Button marginTop="16px" onPress={() => handleLoadMore()} text="Carregar mais" />;
  };

  useEffect(() => {
    handleRefresh();
  }, []);

  return (
    <PageContainer>
      <List
        keyExtractor={(item, index) => index.toString()}
        data={users.data}
        renderItem={({ item }) => <ItemUser item={item} />}
        refreshing={users.isRefreshing}
        onRefresh={() => handleRefresh()}
        ListFooterComponent={renderFooter}
      />
    </PageContainer>
  );
};

Home.navigationOptions = () => ({
  title: 'Início',
});

export default Home;
