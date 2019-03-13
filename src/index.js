import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension'; 
import { Provider } from 'react-redux';

import reducers from './reducers';

const store = createStore(reducers, composeWithDevTools(applyMiddleware()));

ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.querySelector('#root')
  );
  
