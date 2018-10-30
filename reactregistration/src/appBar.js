import React from 'react';
import './appBar.scss';
import AppBar from '@material-ui/core/AppBar';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Personal } from "./personal.js";
import { Education } from "./education.js";
import Typography from '@material-ui/core/Typography';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';

export const RoutingDiv = () => (
    <Router>
        <div >
            <li>
                <Link to="/">Personal</Link>
            </li>
            <li>
                <Link to="/education">Education</Link>
            </li>
            <Route exact path="/" component={Personal} />
            <Route path="/education" component={Education} />
        </div>
    </Router>
);


export const AppBarDiv = () => (
    <div className="App">

        <AppBar position="static">
            <Toolbar>
                <IconButton color="inherit" aria-label="Menu">
                    <MenuIcon />
                </IconButton>
                <Typography variant="h6" color="inherit" noWrap>
                    Registration Form
            </Typography>
            </Toolbar>
        </AppBar>

        <div>
            <RoutingDiv />
        </div>

    </div>
);
