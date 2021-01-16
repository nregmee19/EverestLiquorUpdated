import React from "react";
import {Switch, Route, Redirect} from "react-router-dom";
import UnauthorizedLayout from './Layouts/UnauthorizedLayout'

import './App.css';


const App = () => (
    <Switch>
        <Route path = "/" component = {UnauthorizedLayout}/>
    </Switch>

  );


export default App;
