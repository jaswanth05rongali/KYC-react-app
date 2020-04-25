import React from 'react';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

export class SaveAndContinue extends React.Component{
    render(){
        return (
            <div>
                <img src={require('./lock.png')} height="25" width="25" alt="lock icon"/>
                <p>Your ID or photo will be used only for KYC purpose</p>
                <Button variant="secondary" disabled={true}>SAVE & CONTINUE</Button>
            </div>
        );
    }
};