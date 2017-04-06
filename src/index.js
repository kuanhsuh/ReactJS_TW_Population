//Import React
import React from 'react';
import ReactDOM from 'react-dom';

//import REDUX
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise';

//Import Component/Reducer
import App from './components/App';
import rootReducer from './reducers/index';

const createStoreWithMiddleWare = applyMiddleware(ReduxPromise)(createStore);


ReactDOM.render(
  <Provider store={createStoreWithMiddleWare(rootReducer)} >
  <App />
</Provider>,
  document.getElementById('root')
);
