import React from 'react';
import {Container, Row, Col} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { VerifyYourIdentity } from '../../components/verifyYourIdentity';
import { SaveAndContinue } from '../../components/saveAndContinue';
import { RetakeLooksGood } from '../../components/retakeLooksGood';
import { YourGovtId } from '../../components/yourGovtId';
import './css/govtIdWireframe6.css'

class GovtIdWireframe6 extends React.Component{
    constructor(props){
      super(props);
      let backid = sessionStorage.getItem('idback');
      let frontid = sessionStorage.getItem('idfront');
      sessionStorage.setItem('camera_origin','govtid6');
      this.state={
          front:frontid,
          back:backid
      }
    }
    render(){
        return (
            <div>
              <VerifyYourIdentity />
              <div className="backFullIdBody">
                  <YourGovtId />
                  <img className="takenFrontIdImage" src={this.state.front} height="70" width="110" alt="ID Front" />
                  <div className="backIdBodyNImage">
                    <div className="backIdBody">
                      <p className="backAadhaar">Back of Aadhaar</p>
                      <p>Your address should be clearly visible</p>
                    </div>
                    <img className="backIdImage" src={this.state.back} height="200" width="300" alt="aadhaar" /> 
                  </div>
                  <RetakeLooksGood looksGoodPath='/govtid7'/>
              </div>
              <SaveAndContinue />
            </div>
        );
    }
}

export default GovtIdWireframe6;