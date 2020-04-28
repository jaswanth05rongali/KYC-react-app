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
            gender:'',
            Username:'',
            Password:''
                    };
          this.handleChange = this.handleChange.bind(this);
         
              
         this.changegender = (gndr) =>{
            this.setState({
                gender:gndr
            
            })}}
        

         
        handleChange(event){
            this.setState({
                [event.target.name]:event.target.value});
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
        <div className="card col-12 col-lg-3 login-card mt-2 hv-center mx-auto">
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
                                                <div className="col-4"><button  className="RoundButton col-12 btn btn-block btn-outline-primary"  value="Female" onClick={() => this.changegender('Female')}>Female</button></div>
                                                <div className="col-4"><button className="col-12 RoundButton btn btn-block btn-outline-primary"  value="Male" onClick={() => this.changegender('Male')}>Male</button></div>
                                                <div className="col-4"><button className="col-12 RoundButton btn btn-block btn-outline-primary"  value="Other" onClick={() => this.changegender('Other')}>Other</button></div>
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
            );
            }
}
export default DetailPage;