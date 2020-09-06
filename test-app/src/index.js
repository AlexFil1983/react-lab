import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './index.css';
import App from './App';
import LoggedIn from './components/LoggedIn';
import * as serviceWorker from './serviceWorker';
import {createStore, applyMiddleware} from 'redux'
import rootReducer from './redux/reducers/rootReducer';
import {Provider} from 'react-redux'
import reduxThunk from 'redux-thunk';



const store = createStore(rootReducer, applyMiddleware(reduxThunk))

ReactDOM.render(
  <Provider store={store}>
  <Router>
   <Route exact path='/' component={ App } />
   <Route path='/login' component={ LoggedIn } />
  </Router>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
