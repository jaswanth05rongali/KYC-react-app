import React from 'react';
import { Button, Container, Row, Col } from 'reactstrap';
import {Redirect} from 'react-router-dom';
import history from '../history'
import './css/retakeLooksGood.css';

export class RetakeLooksGood extends React.Component{
    constructor(props){
        super(props);
        console.log('sdas')
        this.state={
            toRetake:false,
        }
        this.handleRetake=this.handleRetake.bind(this);
    }
    handleRetake(){
        this.setState({toRetake:true})
    }
    render(){
        if(this.state.toRetake===true){
            
            return <Redirect to='/camera'/>
        }
        return (
            <div className="text-center">
            <Container className="bottomButtons">
                <Row>
                    <Col><Button color="outline-success" onClick={this.handleRetake} block>RETAKE</Button></Col>
                    <Col><Button color="success" onClick={() => history.push(this.props.looksGoodPath)} block>LOOKS GOOD</Button></Col>
                </Row>
            </Container>
            </div>
        );
    }
};