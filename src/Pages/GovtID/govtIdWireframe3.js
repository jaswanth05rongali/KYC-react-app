import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { VerifyYourIdentity } from '../../components/verifyYourIdentity';
import { SaveAndContinue } from '../../components/saveAndContinue';
import { RetakeLooksGood } from '../../components/retakeLooksGood';
// import { ZestNavBar } from '../../components/zestNavBar';
import './css/govtIdWireframe3.css'

class GovtIdWireframe3 extends React.Component{
    constructor(props){
      super(props);
      let image = sessionStorage.getItem('idfront');
      sessionStorage.setItem('camera_origin','govtid3');
      sessionStorage.setItem('currentPage','/govtid3');
      sessionStorage.setItem('/govtid4',JSON.stringify(false));
      this.state={
          photo:image,
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
              <div className="frontBodyExceptSave">
                <VerifyYourIdentity />
                <div className="frontFullIdBody">
                  <p className="frontGovtId">Your Government ID</p>
                  <div className="frontIdBodyNImage">
                    <div className="frontIdBody">
                      <p className="frontAadhaar">Front of {sessionStorage.getItem('ID')}</p>
                      <p>Your name and photo should be clearly visible</p>
                    </div>
                    <img className="frontIdImage" src={this.state.photo} height="200" width="300" alt="aadhaar" /> 
                  </div>
                  <RetakeLooksGood current='/govtid3' looksGoodPath='/govtid4' />
                </div>
              </div>
              <SaveAndContinue active={false}/>
            </div>
          );
    }
};

export default GovtIdWireframe3;