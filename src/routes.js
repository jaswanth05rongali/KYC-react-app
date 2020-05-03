import React from 'react';
import PrivateRoute from './components/privateRoute';
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
import Success from './Pages/success';
import Camera from './Pages/Camera/Camera'
import history from './history';
import ErrorPage from './components/errorPage';

export default class Routes extends React.Component{
    render(){
        return (
            <Router history={history}>
                <Switch>
                    <PrivateRoute path="/error" component={ErrorPage} />
                    <Route exact path="/" component={RegistrationForm}/>
                    <PrivateRoute  path="/customerdetails" component={DetailPage}/>                
                    <PrivateRoute  path="/takeselfie" component={SelfieScreen} />
                    <PrivateRoute  path="/verifyselfie" component={SelfieScreenBack} />
                    <PrivateRoute  path="/takeGovernmentIDFront" component={GovtIdWireframe1} />
                    <PrivateRoute  path="/verifyGovernmentIDFront" component={GovtIdWireframe3} />
                    <PrivateRoute  path="/takeGovernmentIDBack" component={GovtIdWireframe4} />
                    <PrivateRoute  path="/verifyGovernmentIDBack" component={GovtIdWireframe6} />
                    <PrivateRoute  path="/verifyGovernmentIDComplete" component={GovtIdWireframe7} />
                    <PrivateRoute  path="/camera"  component={Camera}/>
                    <PrivateRoute path='/success' component={Success}/>                    
                </Switch>
            </Router>
        );
    }
};