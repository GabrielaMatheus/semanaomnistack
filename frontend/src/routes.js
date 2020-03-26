import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import Logon from './pages/logon';
import Register from './pages/Register';
import Profile from './pages/Profile';
import NewIncident from './pages/NewIncident';
//switch faz com que uma rota seja chamada por momento
//routh path é o caminho que vou acessar essa rota
//exact component é pra chamar o elemento que tem exatamente /
export default function Routes (){
    return (
        <BrowserRouter>
        <Switch> 
            <Route path="/" exact component={Logon} /> 
            <Route path="/register" component={Register} />

            <Route path="/profile" component={Profile} />
            <Route path="/incident/new" component={ NewIncident } />
        </Switch>
        </BrowserRouter>
    )
}