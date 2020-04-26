import React from 'react';
import {Container, Row, Col} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/yourGovtId.css'

export class YourGovtId extends React.Component{
    render(){
        return (
            <Container>
                <Row>
                    <Col className="govtIdColumn affix">
                        <p className="govtId">Your Govenrment ID</p>
                    </Col>
                    <Col className="pencilIconColumn">
                        <a href="#"><img className="pencilIcon" src={require("./pencil-edit-button.png")} height="20" width="20" /></a>
                    </Col>
                </Row>
          </Container>
        );
    }
}
