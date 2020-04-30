import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { VerifyYourIdentity } from '../../components/verifyYourIdentity';
import { SaveAndContinue } from '../../components/saveAndContinue';
import { YourGovtId } from '../../components/yourGovtId';
import './css/govtIdWireframe7.css'

class GovtIdWireframe7 extends React.Component{
    render(){
        return (

            <div className="detailsCard card col-12 col-lg-8 login-card mt-2 hv-center mx-auto">
            <div>
            <VerifyYourIdentity />
            <div className="finalFullIdBody">
                <YourGovtId />
                <div className="finalImages">
                    <img className="finalFrontIdImage" src={require("./smallGreyImage.png")} height="70" width="110" alt="ID Front" />
                    <img className="finalBackIdImage" src={require("./smallGreyImage.png")} height="70" width="110" alt="ID Back" /> 
                </div>
            </div>
            <div className="finalEmpty">
            </div>
            <SaveAndContinue />
          </div>
            </div>
        );
    }
};

export default GovtIdWireframe7;