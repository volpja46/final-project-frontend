import React from 'react';
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import './index.css';
import App from './App';
import usersReducer from './reducers/usersReducer'
import giftsReducer from './reducers/giftsReducer'
import eventsReducer from './reducers/eventsReducer'
import 'semantic-ui-css/semantic.min.css';
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import 'font-awesome/css/font-awesome.css';


const rootReducer = combineReducers({
  users: usersReducer,
  gifts: giftsReducer,
  events: eventsReducer
  })

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))


ReactDOM.render(<Provider store={store}><Router><App /></Router></Provider>, document.getElementById('root'));
registerServiceWorker();
