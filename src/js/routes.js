/*
    This is here where all the routes lives
 */

import React, { Component } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom';

// Layout
import PageLayout from './layouts/PageLayout';

// Pages
import PageHome from './pages/Home';
import Login from './pages/Login';
import Registration from './pages/Registration'


class Routes extends Component {
    render() {
        return (
            
            // <BrowserRouter>
            <PageLayout>
                {/* <Switch> */}
                <Route exact={true} path="/" component={PageHome} />
                <Route path="/login" component={Login} />
                <Route path="/registration" component={Registration} />
                {/* </Switch> */}
            </PageLayout>
            
            // </BrowserRouter>
        )
    }
}

export default Routes;