import React, { Component } from 'react';
import { ClickPhoto } from '../../components/clickPhoto';


class SelfieScreen extends Component {
    constructor(props){
        super(props);
        sessionStorage.setItem('camera_origin','selfie1');
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
                        <span className="h6 text-muted">Take a selfie</span>
                        <br/>
                        <span className="text-muted">make sure your whole face is visible without any glare or blur</span>
                        <br/>
                        <br/>
                        <img className="card-img-top" src="./selfie.png" alt="Card image" height="300"/>
                        </div>
                        <ClickPhoto />
                    </div>
                </div>
                
            );
            
        // }
    }
}
export default SelfieScreen;