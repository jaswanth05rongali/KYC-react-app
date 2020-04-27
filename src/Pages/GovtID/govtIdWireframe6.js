import React from 'react';
import {Container, Row, Col} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { VerifyYourIdentity } from '../../components/verifyYourIdentity';
import { SaveAndContinue } from '../../components/saveAndContinue';
import { RetakeLooksGood } from '../../components/retakeLooksGood';
import { YourGovtId } from '../../components/yourGovtId';
import './css/govtIdWireframe6.css'

class GovtIdWireframe6 extends React.Component{
    render(){
        return (
            <div>
              <VerifyYourIdentity />
              <div className="backFullIdBody">
                  <YourGovtId />
                  <img className="takenFrontIdImage" src={require("./smallGreyImage.png")} height="70" width="110" alt="ID Front" />
                  <div className="backIdBodyNImage">
                    <div className="backIdBody">
                      <p className="backAadhaar">Back of Aadhaar</p>
                      <p>Your address should be clearly visible</p>
                    </div>
                    <img className="backIdImage" src={require("./img.png")} height="200" width="300" alt="aadhaar" /> 
                  </div>
                  <RetakeLooksGood looksGoodPath={'/govtid7'}/>
              </div>
              <SaveAndContinue />
            </div>
        );
    }
}

export default GovtIdWireframe6;