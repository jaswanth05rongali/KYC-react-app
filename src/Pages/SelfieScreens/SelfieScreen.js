import React, { Component } from 'react';
import { VerifyYourIdentity } from '../../components/verifyYourIdentity';
import { ClickPhoto } from '../../components/clickPhoto';
import './SelfieScreen.css';


class SelfieScreen extends Component {
    constructor(props){
        super(props);
        sessionStorage.setItem('camera_origin','selfie1');
        this.state={
            showcamera:false,
        }
        this.handleClick=this.handleClick.bind(this);
    }
    handleClick(){
        this.setState({
            showcamera:false
        })
    }
    render(){

            
            return(
                <div className="">
                    <VerifyYourIdentity selfie={true}/>
                    <div className="selfieDummyBody">
                        {/* <div className="card-header">
                        <span className="h6 text-muted">Verify your identity</span>
                        <br/>
                        <span className="text-muted">Please upload a selfie and provide personal details for KYC verifiacation</span>
                        </div> */}
                        <div className="card-body">
                        <span className="h6 text-muted">Take a selfie</span>
                        <br/>
                        <span className="text-muted">Make sure your whole face is visible without any glare or blur</span>
                        <br/>
                        <br/>
                        <img className="card-img-top" src="./selfie.png" alt="Card image" height="325"/>
                        </div>
                        <ClickPhoto  />
                    </div>
                </div>
                
            );
            

    }
}
export default SelfieScreen;