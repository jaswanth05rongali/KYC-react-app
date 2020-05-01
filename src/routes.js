import React from 'react';
import PrivateRoute from './components/privateRoute';
import {Router, Switch,Redirect, Route} from 'react-router-dom';
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

export default class Routes extends React.Component{
    render(){
        return (
            <Router history={history}>
                <Switch>
                    <Route exact path="/" component={RegistrationForm}/>
                    <PrivateRoute  path="/customerdetails1" component={DetailPage}/>                   
                    <PrivateRoute  path="/selfie1" component={SelfieScreen} />
                    <PrivateRoute  path="/selfie3" component={SelfieScreenBack} />
                    <PrivateRoute  path="/govtid1" component={GovtIdWireframe1} />
                    <PrivateRoute  path="/govtid3" component={GovtIdWireframe3} />
                    <PrivateRoute  path="/govtid4" component={GovtIdWireframe4} />
                    <PrivateRoute  path="/govtid6" component={GovtIdWireframe6} />
                    <PrivateRoute  path="/govtid7" component={GovtIdWireframe7} />
                    <PrivateRoute  path="/camera"  component={Camera}/>
                    <PrivateRoute path='/success' component={Success}/>                    
                </Switch>
            </Router>
        );
    }
};