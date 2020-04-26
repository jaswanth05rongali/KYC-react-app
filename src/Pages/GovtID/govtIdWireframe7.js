import React from 'react';
import {Container, Row, Col} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { VerifyYourIdentity } from '../../components/verifyYourIdentity';
import { SaveAndContinue } from '../../components/saveAndContinue';
import { RetakeLooksGood } from '../../components/retakeLooksGood';
import { YourGovtId } from '../../components/yourGovtId';
import './css/govtIdWireframe7.css'

class GovtIdWireframe7 extends React.Component{
    render(){
        return (
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
        );
    }
};

export default GovtIdWireframe7;