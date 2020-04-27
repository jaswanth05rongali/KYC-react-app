import React, {Component} from 'react';
import {Card, CardText, CardBody, CardTitle, Button, Form, FormGroup, Col, Input} from 'reactstrap';
import {FaUserAlt} from 'react-icons/fa';
import history from '../../history';
import './detailComp.css';

class DetailPage extends Component {
    constructor(props)
    {
        super(props);
        this.state={
            username:'',
            dateofbirth:'',
            gender:''
                    };
          this.handleChange = this.handleChange.bind(this);
         
              
         this.changegender = (gndr) =>{
            this.setState({
                gender:gndr
            
            })}}
        

         
        handleChange(event){
            this.setState({
                [event.target.name]:event.target.value});}
                
 render(){
    return (
            <div className="container">
                <div className="row row-content justify-content-center">
                    <div className="col-12">
                        <Card>
                            <CardBody className="rowname">
                                <div className="rowname">
                                <div className="row " >
                                    <div className="col-2">
                                        <FaUserAlt size='3.5rem'/>
                                    </div>
                                    <div className="col-10">
                                        <CardTitle className="text-dark text-left"><strong>Help us Setput your account</strong></CardTitle>
                                        <CardText className="text-dark text-left">We'll verify it your KYC documents</CardText>
                                    </div>
                                    
                                    
                                </div>
                                </div>
                                </CardBody>
                                <CardBody>
                            
                                
                                <Form>
                                
                                <FormGroup row >
                                    <Col>
                                    <CardText className="text-color">Your full name</CardText>
                                    <Input type="text" name="username" placeholder="eg: Raj Kumar Babu" required onChange={this.handleChange}/>
                                    <CardText className="text-muted text-left">Ensure it matches name on your PAN</CardText>
                                    </Col>
                                </FormGroup>
                                <FormGroup row >
                                    <Col>
                                    <CardText className="text-color">Your date of birth</CardText>
                                    <Input type="date" name="dateofbirth" placeholder="DD/MM/YYYY" onChange={this.handleChange}/>
                                    
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Col>
                                        <CardText className="text-color">Your gender</CardText>
                                            <div className="row">
                                                <div className="col-4"><Button className="col-12" color="light" value="Female" onClick={() => this.changegender('Female')}>Female</Button></div>
                                                <div className="col-4"><Button className="col-12" color="light" value="Male" onClick={() => this.changegender('Male')}>Male</Button></div>
                                                <div className="col-4"><Button className="col-12" color="light" value="Other" onClick={() => this.changegender('Other')}>Other</Button></div>
                                            </div>
                                    </Col>
                                </FormGroup>
                                
                               
                                </Form>
                                
                            </CardBody>
                        </Card>
                        <br/>
                        <FormGroup row>
                                        <Col><div className="insidebut">
                                            <Button className="col-6" type="login" color="success" onClick={() => history.push('/govtid1')}>
                                                Continue
                                            </Button>
                                            </div>
                                        </Col>
                                    </FormGroup>
                        
                        
                    </div>
                  
                </div>
                
                
                
                
            </div>
            
            );
            }
}
export default DetailPage;