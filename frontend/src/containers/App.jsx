import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import store from '../utils/store';

import MainContainer from './MainContainer.jsx';
import AppLoader from '../components/AppLoader.jsx';

const App = () => (
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={AppLoader}>
        <IndexRoute component={MainContainer} />
        <Route path="*" component={MainContainer} />
      </Route>
    </Router>
  </Provider>
);

export default App;
