import React from 'react';
import {Container, Row, Col} from 'reactstrap';
import {Link} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/yourGovtId.css'

export class YourGovtId extends React.Component{
    constructor(props){
        super(props);
        let path = sessionStorage.getItem('editIconPath');
        this.state = {
            editPath: path
        }
    }

    render(){
        return (
            <Container>
                <Row>
                    <Col className="govtIdColumn affix">
                        <p className="govtId">Your Government ID</p>
                    </Col>
                    <Col className="pencilIconColumn">
                        <Link to={this.state.editPath}><img className="pencilIcon" src={require("./pencil-edit-button.png")} height="20" width="20" /></Link>
                    </Col>
                </Row>
          </Container>
        );
    }
}
