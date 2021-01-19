import React from "react";
import {Switch, Route, Redirect} from "react-router-dom";
import AppHomePage from "../Pages/AppHomePage";
import PrimaryHeader from "../NavBar/PrimaryHeader";

import {render} from "@testing-library/react";
import SubHeader from "../Commons/SubHeader";


const UnauthorizedLayouts = ({match}) => (
    <div className="unauthorized-layout">
        <PrimaryHeader/>
        <SubHeader/>
        <main>
            <Switch>
                <Route path ="/" exact component={AppHomePage}/>
                <Redirect to={`${match.url}`}/>
            </Switch>
        </main>
    </div>
    )



export default UnauthorizedLayouts;