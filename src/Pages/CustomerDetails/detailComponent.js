import React, {Component} from 'react';
import {Card, CardText, CardBody, CardTitle, Button, Form, FormGroup, Col, Input} from 'reactstrap';
import {FaUserAlt} from 'react-icons/fa';
import history from '../../history';
import './detailComp.css'

class DetailPage extends Component {
    userData;
    constructor(props)
    {
        super(props);
        this.state={
            username:'',
            dateofbirth:'',
            gender:''
        };
          this.handleChange = this.handleChange.bind(this);
         
              
}
        
changegender = (gndr) =>{
    this.setState({
        gender:gndr
    
    })}
         
        handleChange(event){
            this.setState({
                [event.target.name]:event.target.value});
            }

            handleSubmit = (event) => {
                event.preventDefault();
              }
        componentWillUpdate(nextProps, nextState) {
                sessionStorage.setItem('user', JSON.stringify(nextState));
            }

        componentDidMount() {
                this.userData = JSON.parse(sessionStorage.getItem('user'));
        
                if (sessionStorage.getItem('user')) {
                    this.setState({
                        Username: this.userData.Username,
                        Password: this.userData.Password,
                    })
                } else {
                    this.setState({
                        Username:'',
                        Password:''
                    })
                }
            }
                
 render(){
        return (
        <div className="detailsEntireBlock">                
        <div className="detailsCard card col-12 col-lg-8 login-card mt-2 hv-center mx-auto">
        <div className="card-header">
        <div className="row " >
        <div className="col-2">
            <FaUserAlt size='2.5rem'/>
        </div>
        <div className="col-10">
            <CardTitle className="text-dark text-left"><strong>Hi ! {this.state.Username} Help us Setput your account</strong></CardTitle>
            <CardText className="text-dark text-left">We'll verify it your KYC documents</CardText>
        </div>
    </div>
        </div>
                <div className="row row-content justify-content-center">
                    <div className="col-12">
                    
                        <Card>
                                <CardBody>
                                <Form onSubmit={this.handleSubmit}>
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
                                                <div className="col-4"><button  type="button" className="RoundButton col-12 btn btn-block btn-outline-success"  value="Female" onClick={() => this.changegender('Female')}>Female</button></div>
                                                <div className="col-4"><button  type="button" className="col-12 RoundButton btn btn-block btn-outline-success"  value="Male" onClick={() => this.changegender('Male')}>Male</button></div>
                                                <div className="col-4"><button  type="button" className="col-12 RoundButton btn btn-block btn-outline-success"  value="Other" onClick={() => this.changegender('Other')}>Other</button></div>
                                            </div>
                                    </Col>
                                </FormGroup>
                                </Form>
                            </CardBody>
                        </Card>
                        <br/>
                        <FormGroup row>
                                        <Col><div className="insidebut">
                                            <Button className="col-6" type="login" color="success" onClick={() => history.push('/selfie1')}>
                                                Continue
                                            </Button>
                                            </div>
                                        </Col>
                         </FormGroup>
                    </div>
                </div>
            </div>
            </div>
        );
    }
}
export default DetailPage;
