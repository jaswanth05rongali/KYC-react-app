import React from 'react';
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
      sessionStorage.setItem('camera_origin','verifyGovernmentIDBack');
      sessionStorage.setItem('editIconPath','/verifyGovernmentIDFront');
      sessionStorage.setItem('currentPage','/verifyGovernmentIDBack');
      sessionStorage.setItem('/verifyGovernmentIDComplete',JSON.stringify(false));
      this.state={
          front:frontid,
          back:backid
      }
    }

    componentDidMount() {
      document
      .getElementsByTagName("HTML")[0]
      .setAttribute("data-theme", localStorage.getItem("theme"));
    }

    render(){
        return (
            <div>
              <VerifyYourIdentity />
              <div className="backFullIdBody">
                  <YourGovtId current="/verifyGovernmentIDBack"/>
                  <img className="takenFrontIdImage" src={this.state.front} height="70" width="110" alt="ID Front" />
                  <div className="backIdBodyNImage">
                    <div className="backIdBody">
                      <p className="backAadhaar">Back of {sessionStorage.getItem('ID')}</p>
                      <p>Your address should be clearly visible</p>
                    </div>
                    <img className="backIdImage" src={this.state.back} height="auto" width="auto" alt="aadhaar" /> 
                  </div>
                  <RetakeLooksGood current='/verifyGovernmentIDBack' looksGoodPath='/verifyGovernmentIDComplete'/>
              </div>
              <SaveAndContinue active={false}/>
            </div>
        );
    }
}

export default GovtIdWireframe6;