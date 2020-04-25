import React from 'react';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import { VerifyYourIdentity } from './components/verifyYourIdentity';
import { SaveAndContinue } from './components/saveAndContinue';
import './App.css';

function App() {
  return (
    <div>
      <VerifyYourIdentity />
      <div>
        <p>Your Govenrment ID</p>
        <div>
          <p>Front of Aadhaar</p>
          <p>Your name and photo should be clearly visible</p>
          <img src={require("./img.png")} height="200" width="300" alt="aadhaar image" /> 
        </div>
        <Button variant="outline-success">RETAKE</Button>
        <Button variant="success">LOOKS GOOD</Button>
      </div>
      <SaveAndContinue />
    </div>
  );
}

export default App;
