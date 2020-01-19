import { createAppContainer, createStackNavigator, createSwitchNavigator } from 'react-navigation';

// Helpers
import ROUTENAMES from 'navigation/routeName';
import Home from 'screens/Home';
import Login from 'screens/Login';

// Screens

const defaultNavigationOptions = {
  headerMode: 'none',
  header: null,
};

const NonLoggedAppRouter = createStackNavigator(
  {
    [ROUTENAMES.LOGIN]: { screen: Login },
  },
  defaultNavigationOptions
);

const LoggedAppRouter = createStackNavigator({
  [ROUTENAMES.HOME]: { screen: Home },
});

const createRootNavigator = token =>
  createAppContainer(
    createSwitchNavigator(
      {
        [ROUTENAMES.LOGGED_APP]: LoggedAppRouter,
        [ROUTENAMES.NON_LOGGED_APP]: NonLoggedAppRouter,
      },
      {
        initialRouteName: token ? ROUTENAMES.LOGGED_APP : ROUTENAMES.NON_LOGGED_APP,
      }
    )
  );

export default createRootNavigator;
