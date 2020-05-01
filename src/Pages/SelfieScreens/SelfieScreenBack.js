import React, { Component } from 'react';
import { VerifyYourIdentity } from '../../components/verifyYourIdentity';
import {RetakeLooksGood} from '../../components/retakeLooksGood';

import './SelfieScreen.css'


class SelfieScreenBack extends Component {
    constructor(props){
        super(props);
        let image = sessionStorage.getItem('selfie');
        sessionStorage.setItem('camera_origin','selfie3');
        this.state={
            photo:image,
        }
        sessionStorage.setItem('currentPage','/selfie3');
        sessionStorage.setItem('/govtid1', JSON.stringify(false));
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

        <div className="text-center"><img className='responsive' src={this.state.photo} alt="Card image" height="300" /></div>

        </div>
        <RetakeLooksGood current='/selfie3' looksGoodPath='/govtid1' />
        </div></div>

    )
    }
}
export default SelfieScreenBack;