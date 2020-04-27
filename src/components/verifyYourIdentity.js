import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import './css/verifyYourIdentity.css';

export class VerifyYourIdentity extends React.Component{
    render(){
        return (
            <div className="fullContainer">
                <Container>
                    <Row>
                        <Col className="imageColumn"> 
                            <img src={require('./id.png')} height="50" width="50" alt="id icon"/>
                        </Col>
                        <Col >
                            <Row><p className="title">Verify your identity</p></Row>
                            <Row><p className="bodyText">Please upload a Government ID for KYC verification</p></Row>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
};