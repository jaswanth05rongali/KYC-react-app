import React, { Component } from 'react';
import {RetakeLooksGood} from '../../components/retakeLooksGood';
class SelfieScreenBack extends Component {
    constructor(props){
        super(props);
        let image = sessionStorage.getItem('selfie');
        sessionStorage.setItem('camera_origin','selfie3');
        this.state={
            photo:image,
        }
    }

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
        <span className="h6 text-muted">Selfie Screen</span>
        <br/>
        <span className="text-muted">make sure your whole face is visible without any glare or blur</span>
        <br/>
        <br/>
        <img className='responsive' src={this.state.photo} alt="Card image" height="300" />
        </div>
        <RetakeLooksGood looksGoodPath='/govtid1'/>
        </div></div>

    )
    }
}
export default SelfieScreenBack;