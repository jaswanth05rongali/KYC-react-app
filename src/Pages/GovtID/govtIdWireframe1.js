import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { VerifyYourIdentity } from '../../components/verifyYourIdentity';
import { SaveAndContinue } from '../../components/saveAndContinue';
import { ClickPhoto } from '../../components/clickPhoto';
import './css/govtIdWireframe1.css'

class GovtIdWireframe1 extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      id: "Aadhaar"
    };
    sessionStorage.setItem('IDImage','./aadhaar-front.png');
    sessionStorage.setItem('camera_origin','govtid1');
    sessionStorage.setItem('currentPage','/govtid1');
    sessionStorage.setItem('/camera',JSON.stringify(false));
    this.changeId=this.changeId.bind(this);
  }

  changeId = (ID) => {
    let returnPath;
    switch(ID){
      case "PAN": returnPath = './panFront.png';
        break;
      case "Driving License": returnPath = './driverLicense1.png';
        break;
      case "Passport": returnPath = './passportFront.png';
        break;
      case "Voter ID": returnPath = './voterIdFront.png';
        break;
      default: returnPath = './aadhaar-front.png';
        break;
    }
    sessionStorage.setItem('IDImage',returnPath);
    this.setState({
      id: ID
    })    
  }    
  
  render(){
    return (
      <div>
        <div className="firstBodyExceptSave">
          <VerifyYourIdentity />
          <div className="firstFullIdBody">
            <p className="firstGovtId">Select a Government ID</p>
            <div className="scrollWrapper">
              <div className="id"><button type="button" className="idButton btn btn-outline-primary" value="Aadhaar" onClick={() => this.changeId("Aadhaar")}>Aadhaar</button></div>
              <div className="id"><button type="button" className="idButton btn btn-outline-primary" value="PAN" onClick={() => this.changeId("PAN")}>PAN</button></div>
              <div className="id"><button type="button" className="idButton btn btn-outline-primary" value="Driving License" onClick={() => this.changeId("Driving License")}>Driving License</button></div>
              <div className="id"><button type="button" className="idButton btn btn-outline-primary" value="Passport" onClick={() => this.changeId("Passport")}>Passport</button></div>
              <div className="id"><button type="button" className="idButton btn btn-outline-primary" value="Voter ID" onClick={() => this.changeId("Voter ID")}>Voter ID</button></div>
            </div>
            <div className="firstIdBodyNImage">
              <div className="firstIdBody">
                <p className="firstAadhaar">Front of {this.state.id}</p>
                {sessionStorage.setItem('ID',this.state.id)}
                <p>Your name and photo should be clearly visible</p>
              </div>
              <div className="text-center"><img className="firstIdImage" src={sessionStorage.getItem('IDImage')} height="200" alt="govt ID" /></div>
            </div>
            <ClickPhoto current="/govtid1" next="/govtid3" clickPhotoPath={'/govtid3'}/>
          </div>
        </div>
        <SaveAndContinue active={false}/>
      </div>
    );
  }
};

export default GovtIdWireframe1;