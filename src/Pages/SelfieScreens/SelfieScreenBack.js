import React, { Component } from 'react';
import {RetakeLooksGood} from '../../components/retakeLooksGood';

class SelfieScreenBack extends Component {
    render(){
    return(
        <div className="card col-12 col-lg-3 login-card mt-2 hv-center mx-auto">
        <div className="card">
        <div className="card-header">
        <span className="h6 text-muted">Verify your identity</span>
        <br/>
        <span className="text-muted">Please upload a selfie and provide personal details for KYC verifiacation</span>
        </div>
        <div className="card-body">
        <span className="h6 text-muted">your selfie</span>
        <br/>
        <span className="text-muted">make sure your whole face is visible without any glare or blur</span>
        <br/>
        <br/>
        <img className="card-img-top" src='./selfie.png' alt="Card image" height="300" />
        </div>
        {/* <div className="card-footer">
        <div className="container">
        <div className="row">
        <div  class="col-sm-6">
        <button type="button" className="btn btn-block btn-outline-success">RETAKE</button>
        </div>
        <div  class="col-sm-6">
        <button type="button" className="btn btn-block btn-success">LOOKS GOOD</button>
        </div>
        </div>   
        </div>
        </div> */}
        </div>
            <RetakeLooksGood looksGoodPath={'/govtid1'} />
        </div>
    )
    }
}
export default SelfieScreenBack;