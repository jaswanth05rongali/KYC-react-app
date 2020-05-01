import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export default class Success extends React.Component{
    constructor(props){
        super(props);
        sessionStorage.setItem('currentPage','/success');
    }
    render(){
        return (
            <div className="align-middle text-center" style={{marginTop: '50%'}}>
                <img src="./success.gif" alt="Success" />
            </div>
        );
    }
};