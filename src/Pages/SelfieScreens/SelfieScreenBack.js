import React, { Component } from 'react';
import { VerifyYourIdentity } from '../../components/verifyYourIdentity';
import {RetakeLooksGood} from '../../components/retakeLooksGood';

import './SelfieScreen.css'


class SelfieScreenBack extends Component {
    constructor(props){
        super(props);
      
        let image = localStorage.getItem('selfie');
        localStorage.setItem('camera_origin','selfie3');
        this.state={
            photo:image,
        }
    }

    render(){
    
    return(

        <div className="detailsCard card col-12 col-lg-5 login-card mt-2 hv-center mx-auto">
        <VerifyYourIdentity selfie={true}/>
    <div className="selfieRealBody">
    <div className="card-body">

    <span className="h6 text-muted">Your selfie</span>

    <br/>
    <span className="text-muted">Make sure your whole face is visible without any glare or blur</span>
    <br/>
    <br/>

    <img className='card-img-top' src={this.state.photo} alt="Card image" height="300" />

    </div>
    {/* <button onClick={this.handleRetake}>Retake</button>
    <button onClick={this.handleLooksGood}>Looks Good</button> */}
    <RetakeLooksGood looksGoodPath='/govtid1'/>
    </div>
    </div>







    )
    }
}
export default SelfieScreenBack;