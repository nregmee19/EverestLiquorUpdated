import React from "react";
import {Switch, Route, Redirect} from "react-router-dom";
import UnauthorizedLayout from './Layouts/UnauthorizedLayout'
import logo from './logo.svg';
import './App.css';


const App = () => (
    <Switch>
        <Route path = "/" component = {UnauthorizedLayout}/>
    </Switch>

  );


export default App;
