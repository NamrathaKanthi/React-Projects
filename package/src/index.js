import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import store from './redux/store';
import './index.scss';
import './../node_modules/font-awesome/css/font-awesome.min.css'; 

import Home from './client/pages/Home/Home';
import Login from './client/pages/Login/Login';
import Header from './client/pages/Header/Header';

ReactDOM.render(
    <Provider store={store}>
        <div className="total-app">
            <header className="header">
            <Header/>
            </header>
            <Router>
                <div className="app-content">
                    <Route exact path="/" component={Login}/>
                    <Route path="/home" component={Home}/>
                </div>
            </Router>
        </div>
    </Provider>,
    document.getElementById('root')
);