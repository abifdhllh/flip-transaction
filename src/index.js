import React from 'react';
import {StatusBar} from 'react-native';

// Navigation
import AppNavigation from 'navigations';

// Redux
import {Provider} from 'react-redux';
import store from 'shared-state/store';

// Style
import {Colors} from 'utils/Theme';

const App: () => React$Node = () => {
  return (
    <Provider store={store}>
      <StatusBar barStyle="light-content" backgroundColor={Colors.orange} />
      <AppNavigation />
    </Provider>
  );
};

export default App;
