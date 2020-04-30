import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { VerifyYourIdentity } from '../../components/verifyYourIdentity';
import { SaveAndContinue } from '../../components/saveAndContinue';
import { YourGovtId } from '../../components/yourGovtId';
import './css/govtIdWireframe7.css'

class GovtIdWireframe7 extends React.Component{
    constructor(props){
        super(props);
        this.state={
            idfront:sessionStorage.getItem('idfront'),
            idback:sessionStorage.getItem('idback')
        }
    }
    render(){
        return (
            <div>
              <VerifyYourIdentity />
              <div className="finalFullIdBody">
                  <YourGovtId />
                  <div className="finalImages">
                      <img className="finalFrontIdImage" src={this.state.idfront} height="70" width="110" alt="ID Front" />
                      <img className="finalBackIdImage" src={this.state.idback} height="70" width="110" alt="ID Back" /> 
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