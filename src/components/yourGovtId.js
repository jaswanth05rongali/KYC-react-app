import React from 'react';
import {Container, Row, Col} from 'reactstrap';
import history from '../history';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/yourGovtId.css'

export class YourGovtId extends React.Component{
    constructor(props){
        super(props);
        let path = sessionStorage.getItem('editIconPath');
        this.state = {
            editPath: path
        }
        this.handleClick=this.handleClick.bind(this);
    }

    handleClick(){
        sessionStorage.setItem(sessionStorage.getItem('editIconPath'),JSON.stringify(true));
        sessionStorage.setItem(this.props.current,JSON.stringify(false));
        return history.push(sessionStorage.getItem('editIconPath'));
    }

    render(){
        return (
            <Container>
                <Row>
                    <Col className="govtIdColumn affix">
                        <p className="govtId">Your Government ID</p>
                    </Col>
                    <Col className="pencilIconColumn">
                        <button type="button" className="pencilButton btn btn-outline-primary" onClick={this.handleClick}><img className="pencilIcon" src={require("./pencil-edit-button.png")} height="20" width="20" /></button>
                    </Col>
                </Row>
          </Container>
        );
    }
}
