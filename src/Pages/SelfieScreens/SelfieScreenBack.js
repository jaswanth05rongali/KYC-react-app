import React, { Component } from 'react';
import { VerifyYourIdentity } from '../../components/verifyYourIdentity';
import {RetakeLooksGood} from '../../components/retakeLooksGood';

import './SelfieScreen.css'


class SelfieScreenBack extends Component {
    constructor(props){
        super(props);
        let image = sessionStorage.getItem('selfie');
        sessionStorage.setItem('camera_origin','verifyselfie');
        this.state={
            photo:image,
        }
        sessionStorage.setItem('currentPage','/verifyselfie');
        sessionStorage.setItem('/takeGovernmentIDFront', JSON.stringify(false));
    }

    componentDidMount() {
        document
        .getElementsByTagName("HTML")[0]
        .setAttribute("data-theme", localStorage.getItem("theme"));
    }

    render(){
    
    return(
        <div className="">
            <VerifyYourIdentity selfie={true}/>
        <div className="selfieRealBody">
        {/* <div className="card-header">
        <span className="h6 text-muted">Verify your identity</span>
        <br/>
        <span className="text-muted">Please upload a selfie and provide personal details for KYC verifiacation</span>
        </div> */}
        <div className="card-body">

        <span className="h6 text-muted">Your selfie</span>

        <br/>
        <span className="text-muted">Make sure your whole face is visible without any glare or blur</span>
        <br/>
        <br/>

        <div className="text-center"><img className='responsive' src={this.state.photo} alt="Card image" height="200" width="300" /></div>

        </div>
        <RetakeLooksGood current='/verifyselfie' looksGoodPath='/takeGovernmentIDFront' />
        </div></div>

    )
    }
}
export default SelfieScreenBack;