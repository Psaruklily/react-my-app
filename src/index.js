import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createStore } from 'redux';
import {Provider} from 'react-redux';

const initialState = {
  counter: 0,
  user: {name: 'test', age: 34}
}

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case 'INC_COUNTER': {
      return {...state, counter: state.counter + 1};
    }
    case 'CHANGE_USER': {
      return {...state, user: {...state.user, age: 12}};
    }
    case 'DEC_COUNTER': {
      return {...state, counter: state.counter - 1};
    }
    case 'RESET': {
      return {...state, counter: 0};
    }
    default: {
      return state;
    }
  }
}

const store = createStore(reducer);
// console.log(store);


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
