import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { VerifyYourIdentity } from '../../components/verifyYourIdentity';
import { SaveAndContinue } from '../../components/saveAndContinue';
import {ClickPhoto } from '../../components/clickPhoto';
import { YourGovtId } from '../../components/yourGovtId';
import './css/govtIdWireframe3.css'
import './css/govtIdWireframe6.css'

class GovtIdWireframe4 extends React.Component{
  constructor(props){
    super(props);
    let path;
    switch(sessionStorage.getItem('ID')){
      case "PAN": path = './panBack.png';
        break;
      case "Driving Licence": path = './driverLicense2.png';
        break;
      case "Passport": path = './passportBack.png';
        break;
      case "Voter ID": path = './voterIdBack.png';
        break;
      default: path = './aadhaar-back.png';
        break;
    };
    sessionStorage.setItem('imagePath',path);
    sessionStorage.setItem('camera_origin','takeGovernmentIDBack');
    sessionStorage.setItem('editIconPath','/verifyGovernmentIDFront');
    sessionStorage.setItem('currentPage','/takeGovernmentIDBack');
    sessionStorage.setItem('/verifyGovernmentIDBack',JSON.stringify(false));
    let frontid=sessionStorage.getItem('idfront')
    this.state={
      front:frontid,
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
        <div className="frontFullIdBody">
            <YourGovtId current="/takeGovernmentIDBack"/>
            <div className="frontIdBodyNImage">
              <img className="takenFrontIdImage" src={this.state.front} height="auto" width="100" alt="ID Front" />
              <div className="frontIdBody">
                <p className="frontAadhaar">Back of {sessionStorage.getItem('ID')}</p>
                <p>Your address should be clearly visible</p>
              </div>
              <div className="text-center"><img className="originalId" src={sessionStorage.getItem('imagePath')} alt="govt ID" height="200px"/></div> 
            </div>
            <ClickPhoto current="/takeGovernmentIDBack" next="/verifyGovernmentIDBack" clickPhotoPath={'/verifyGovernmentIDBack'}/>
        </div>
        <SaveAndContinue active={false}/>
      </div>
    );
  }
}

export default GovtIdWireframe4;