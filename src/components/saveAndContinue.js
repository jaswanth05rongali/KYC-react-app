import React from 'react';
import {Button} from 'reactstrap';
import { Container, Row, Col } from 'reactstrap';
import './css/saveAndContinue.css';

export class SaveAndContinue extends React.Component{
    render(){
        return (
            <div className="sNCFullBody">
                <Container>
                    <Row>
                        <Col className="lockIconColumn"><img src={require('./lock.png')} height="25" width="25" alt="lock icon"/></Col>
                        <Col><p className="sNCBodyText">Your ID or photo will be used only for KYC purpose</p></Col>
                    </Row>
                    <Row>
                        <Button className="saveAndContinueButton" color="secondary" disabled block>SAVE & CONTINUE</Button>
                    </Row>
                </Container>
            </div>
        );
    }
};