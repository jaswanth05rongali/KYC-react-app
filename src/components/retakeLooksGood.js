import React from 'react';
import { Button, Container, Row, Col } from 'reactstrap';
import {Redirect} from 'react-router-dom';
import history from '../history'
import './css/retakeLooksGood.css';

export class RetakeLooksGood extends React.Component{
    constructor(props){
        super(props);
        this.state={
            toRetake:false,
        }
        this.handleRetake=this.handleRetake.bind(this);
        this.handleLooksGood=this.handleLooksGood.bind(this);
    }
    handleRetake(){
        sessionStorage.setItem('/camera',JSON.stringify(true));
        sessionStorage.setItem(this.props.current,JSON.stringify(false));
        this.setState({toRetake:true});
    }
    handleLooksGood(){
        sessionStorage.setItem(this.props.current,JSON.stringify(false));
        sessionStorage.setItem(this.props.looksGoodPath,JSON.stringify(true));
        return history.push(this.props.looksGoodPath);
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
                    <Col><Button color="success" onClick={this.handleLooksGood} block>LOOKS GOOD</Button></Col>
                </Row>
            </Container>
            </div>
        );
    }
};