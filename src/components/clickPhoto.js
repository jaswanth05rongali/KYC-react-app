import React from 'react';
import { Button, Container, Row, Col } from 'reactstrap';
import {Redirect} from 'react-router-dom';

export class ClickPhoto extends React.Component{

    constructor(props){
        super(props);
        this.state={
            clickPhoto:false
        }
        this.handle=this.handle.bind(this);
    }
    handle(){
        sessionStorage.setItem('/camera',JSON.stringify(true));
        sessionStorage.setItem(this.props.current,JSON.stringify(false));
        this.setState({
            clickPhoto:true
        })
    }
    render(){
        if(this.state.clickPhoto===true){
            return <Redirect to="/camera"/>
        }
        else{
            return (
                <div className="text-center" style={{marginTop:"15px",marginBottom:"15px"}}>
                <Container className="clickPhoto">
                    <Row>
                        <Col><Button color="success" onClick={this.handle}>CLICK PHOTO</Button></Col>
                    </Row>
                </Container>
                </div>
            );
        }
    }
};