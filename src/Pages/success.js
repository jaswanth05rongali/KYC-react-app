import React from 'react';
import history from '../history';
import 'bootstrap/dist/css/bootstrap.min.css';

export default class Success extends React.Component{
    constructor(props){
        super(props);
        sessionStorage.setItem('currentPage','/success');
    }
    render(){
        return (
            <div className="align-middle text-center" style={{marginTop: '10%'}}>
             <div style={{marginLeft:"10px",marginRight:"10px",marginBottom:"30px"}}><span style={{fontSize:"25px",color:"#009900"}}><strong>Congratulations</strong></span>,<br /> You have successfully submitted the documents for KYC Verification</div>
                <img src="./check.gif" width="90%" alt="Success" />
             <div style={{marginTop:"30px",marginLeft:"10px",marginRight:"10px"}}><button type="button" className="btn btn-success" style={{width:"80%"}} onClick={() => history.push('/')}>Go Home!!</button></div>
            </div>
        );
    }
};