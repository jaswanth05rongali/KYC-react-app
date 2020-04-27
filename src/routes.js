import React from 'react';
import {Router, Switch, Route} from 'react-router-dom';
import GovtIdWireframe1 from './Pages/GovtID/govtIdWireframe1';
import GovtIdWireframe3 from './Pages/GovtID/govtIdWireframe3';
import GovtIdWireframe4 from './Pages/GovtID/govtIdWireframe4';
import GovtIdWireframe6 from './Pages/GovtID/govtIdWireframe6';
import GovtIdWireframe7 from './Pages/GovtID/govtIdWireframe7';
import DetailPage from './Pages/CustomerDetails/detailComponent';
import SelfieScreen from './Pages/SelfieScreens/SelfieScreen';
import SelfieScreenBack from './Pages/SelfieScreens/SelfieScreenBack';
import RegistrationForm from './Pages/Auth/registrationForm';
import history from './history';

export default class Routes extends React.Component{
    render(){
        return (
            <Router history={history}>
                <Switch>
                    <Route path="/" exact component={RegistrationForm}/>
                    <Route path="/customerdetails1" component={DetailPage}/>
                    <Route path="/selfie1" component={SelfieScreen} />
                    <Route path="/selfie3" component={SelfieScreenBack} />
                    <Route path="/govtid1" component={GovtIdWireframe1} />
                    <Route path="/govtid3" component={GovtIdWireframe3} />
                    <Route path="/govtid4" component={GovtIdWireframe4} />
                    <Route path="/govtid6" component={GovtIdWireframe6} />
                    <Route path="/govtid7" component={GovtIdWireframe7} />
                </Switch>
            </Router>
        );
    }
};