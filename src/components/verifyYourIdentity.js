import React from 'react';

export class VerifyYourIdentity extends React.Component{
    render(){
        return (
            <div>
                <img src={require('./id.png')} height="50" width="50" alt="id icon"/>
                <h3>Verify your identity</h3>
                <p>Please upload a Govenrment ID for KYC verification</p>
            </div>
        );
    }
};