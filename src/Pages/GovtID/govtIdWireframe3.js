import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { VerifyYourIdentity } from '../../components/verifyYourIdentity';
import { SaveAndContinue } from '../../components/saveAndContinue';
import { RetakeLooksGood } from '../../components/retakeLooksGood';
// import { ZestNavBar } from '../../components/zestNavBar';
import './css/govtIdWireframe3.css'

class GovtIdWireframe3 extends React.Component{
    render(){
        return (
            <div>
              <div className="frontBodyExceptSave">
                <VerifyYourIdentity />
                <div className="frontFullIdBody">
                  <p className="frontGovtId">Your Government ID</p>
                  <div className="frontIdBodyNImage">
                    <div className="frontIdBody">
                      <p className="frontAadhaar">Front of Aadhaar</p>
                      <p>Your name and photo should be clearly visible</p>
                    </div>
                    <img className="frontIdImage" src={require("./img.png")} height="200" width="300" alt="aadhaar" /> 
                  </div>
                  <RetakeLooksGood looksGoodPath={'/govtid4'} />
                </div>
              </div>
              <SaveAndContinue />
            </div>
          );
    }
};

export default GovtIdWireframe3;