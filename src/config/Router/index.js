import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Dashboard, Login, Shipping } from '../../containers/pages';

const Routes = () => {
    return (
        <Switch>
            <Route path="/login" exact component={Login} />
            <Route path="/shipping" component={Shipping} />
            <Route path="/" component={Dashboard}/>
        </Switch>
    )
}

export default Routes;
