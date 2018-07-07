import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import middlewareThunk from 'redux-thunk';
import '../node_modules/materialize-css/dist/css/materialize.min.css';

import App from './App';
import rootReducer from './reducers';

const store = createStore(rootReducer, {}, applyMiddleware(middlewareThunk));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
