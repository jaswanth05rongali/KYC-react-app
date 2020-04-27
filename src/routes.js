import React from 'react';
import {Router, Switch, Route} from 'react-router-dom';
import GovtIdWireframe1 from './Pages/GovtID/govtIdWireframe1';
import GovtIdWireframe3 from './Pages/GovtID/govtIdWireframe3';
import GovtIdWireframe4 from './Pages/GovtID/govtIdWireframe4';
import GovtIdWireframe6 from './Pages/GovtID/govtIdWireframe6';
import GovtIdWireframe7 from './Pages/GovtID/govtIdWireframe7';
import DetailPage from './Pages/CustomerDetails/detailComponent';
import history from './history';

export default class Routes extends React.Component{
    render(){
        return (
            <Router history={history}>
                <Switch>
                    <Route path="/" exact component={DetailPage}/>
                    <Route path="/govtid1" exact component={GovtIdWireframe1} />
                    <Route path="/govtid3" component={GovtIdWireframe3} />
                    <Route path="/govtid4" component={GovtIdWireframe4} />
                    <Route path="/govtid6" component={GovtIdWireframe6} />
                    <Route path="/govtid7" component={GovtIdWireframe7} />
                </Switch>
            </Router>
        );
    }
};