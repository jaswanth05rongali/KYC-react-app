import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { VerifyYourIdentity } from '../../components/verifyYourIdentity';
import { SaveAndContinue } from '../../components/saveAndContinue';
import { YourGovtId } from '../../components/yourGovtId';
import './css/govtIdWireframe7.css'

class GovtIdWireframe7 extends React.Component{
    constructor(props){
        super(props);
        sessionStorage.setItem('editIconPath','/verifyGovernmentIDBack');
        sessionStorage.setItem('currentPage','/verifyGovernmentIDComplete');
        sessionStorage.setItem('/success',JSON.stringify(false));
        this.state={
            idfront:sessionStorage.getItem('idfront'),
            idback:sessionStorage.getItem('idback')
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
              <div className="finalFullIdBody">
                  <YourGovtId current="/verifyGovernmentIDComplete"/>
                  <div className="finalImages">
                      <img className="finalFrontIdImage" src={this.state.idfront} height="auto" width="100" alt="ID Front" />
                      <img className="finalBackIdImage" src={this.state.idback} height="auto" width="100" alt="ID Back" /> 
                  </div>
              </div>
              <div className="finalEmpty">
              </div>
              <SaveAndContinue current='/verifyGovernmentIDComplete' active={true}/>
            </div>
        );
    }
};

export default GovtIdWireframe7;