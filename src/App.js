import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { VerifyYourIdentity } from './components/verifyYourIdentity';
import { SaveAndContinue } from './components/saveAndContinue';
import { RetakeLooksGood } from './components/retakeLooksGood';
import './App.css';

function App() {
  return (
    <div>
      <VerifyYourIdentity />
      <div className="fullIdBody">
        <p className="govtId">Your Govenrment ID</p>
        <div className="idBodyNImage">
          <div className="idBody">
            <p className="frontAadhaar">Front of Aadhaar</p>
            <p>Your name and photo should be clearly visible</p>
          </div>
          <img className="idImage" src={require("./img.png")} height="200" width="300" alt="aadhaar" /> 
        </div>
        <RetakeLooksGood />
      </div>
      <SaveAndContinue />
    </div>
  );
}

export default App;
