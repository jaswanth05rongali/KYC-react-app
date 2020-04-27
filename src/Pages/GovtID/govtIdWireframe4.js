import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { VerifyYourIdentity } from '../../components/verifyYourIdentity';
import { SaveAndContinue } from '../../components/saveAndContinue';
import {ClickPhoto } from '../../components/clickPhoto';
import { YourGovtId } from '../../components/yourGovtId';
import './css/govtIdWireframe3.css'
import './css/govtIdWireframe6.css'

class GovtIdWireframe4 extends React.Component{
    render(){
        return (
            <div>
              <VerifyYourIdentity />
              <div className="frontFullIdBody">
                  <YourGovtId />
                  <div className="frontIdBodyNImage">
                    <img className="takenFrontIdImage" src={require("./smallGreyImage.png")} height="70" width="110" alt="ID Front" />
                    <div className="frontIdBody">
                      <p className="frontAadhaar">Back of Aadhaar</p>
                      <p>Your address should be clearly visible</p>
                    </div>
                    <div className="text-center"><img className="originalId" src={require("./aadhaar-back.png")} alt="aadhaar" height="170px"/></div> 
                  </div>
                  <ClickPhoto clickPhotoPath={'/govtid6'}/>
              </div>
              <SaveAndContinue />
            </div>
        );
    }
}

export default GovtIdWireframe4;