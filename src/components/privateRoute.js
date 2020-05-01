import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({path:pagePath, component: Component, ...rest}) => {
    let temp = sessionStorage.getItem('currentPage');
    let buttonTriggered = JSON.parse(sessionStorage.getItem(pagePath));
    return(
        <Route path={pagePath} {...rest} render={props => (
            (buttonTriggered) ? 
                <Component {...props}/>
                :<Redirect to={temp}></Redirect>
            )            
        }/>
    );
};

export default PrivateRoute;