import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { VerifyYourIdentity } from '../../components/verifyYourIdentity';
import { SaveAndContinue } from '../../components/saveAndContinue';
import { ClickPhoto } from '../../components/clickPhoto';
import './css/govtIdWireframe1.css'

class GovtIdWireframe1 extends React.Component{
  constructor(props){
    super(props);
    sessionStorage.setItem('camera_origin','govtid1');
    sessionStorage.setItem('currentPage','/govtid1');
    sessionStorage.setItem('/camera',JSON.stringify(false));
  }
    render(){
        return (
            <div>
              <div className="firstBodyExceptSave">
                <VerifyYourIdentity />
                <div className="firstFullIdBody">
                  <p className="firstGovtId">Select a Government ID</p>
                  <div className="firstIdBodyNImage">
                    <div className="firstIdBody">
                      <p className="firstAadhaar">Front of Aadhaar</p>
                      <p>Your name and photo should be clearly visible</p>
                    </div>
                    <div className="text-center"><img className="firstIdImage" src={require("./aadhaar-front.png")} height="170" alt="aadhaar" /></div>
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