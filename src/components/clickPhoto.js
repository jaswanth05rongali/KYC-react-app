import React from 'react';
import { Button, Container, Row, Col } from 'reactstrap';
import history from '../history';
import {Redirect} from 'react-router-dom';
import './css/clickPhoto.css';

export class ClickPhoto extends React.Component{

    constructor(props){
        super(props);
        this.state={
            clickPhoto:false
        }
        this.handle=this.handle.bind(this);
    }
    handle(){
        this.setState({
            clickPhoto:true
        })
    }
    render(){
        if(this.state.clickPhoto===true){
            // return history.push('/camera');
            return <Redirect to={`/camera/${this.props.from}`}/>
        }
        else{
            return (
                <div className="text-center">
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