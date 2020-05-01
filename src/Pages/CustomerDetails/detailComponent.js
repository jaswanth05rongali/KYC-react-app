import React, {Component} from 'react';
import {Card, CardText, CardBody, CardTitle, Button, Form, FormGroup, Col, Input} from 'reactstrap';
import {FaUserAlt} from 'react-icons/fa';
import {BrowserRouter as Router, Redirect} from 'react-router-dom';
import history from '../../history';
import './detailComp.css'

class DetailPage extends Component {
    userData;
    constructor(props)
    {
        super(props);
        this.state={
            validuser:false,
            validDOB:false,
            validgender:false,
            username:'',
            dateofbirth:'',
            gender:''
        };
          this.handleChange = this.handleChange.bind(this);
        sessionStorage.setItem('currentPage','/customerdetails1');
        sessionStorage.setItem('/selfie1',JSON.stringify(false));              
}
        
changegender = (gndr) =>{
    this.setState({
        gender:gndr
    })
    this.setState({validgender:true});
}
         
        handleChange(event){
            this.setState({
                [event.target.name]:event.target.value}
                );
            const { name, value } = event.target;
            let validDOB=this.state.validDOB;
            let validuser=this.state.validuser;
            switch(name){
                case 'username':
                   this.setState({validuser:true});
                case 'dateofbirth':
                    this.setState({validDOB:true});
        }
    }

        handleSubmit = (event) => {
            event.preventDefault();
            let validDOB=this.state.validDOB;
            let validuser=this.state.validuser;
            let validgender=this.state.validgender;
            sessionStorage.setItem('/selfie1',JSON.stringify(true));
            sessionStorage.setItem('/customerdetails1',JSON.stringify(false));
               if(validuser && validgender && validDOB){
                   this.setState({ok:true});
                  return history.push('/selfie1');
                }
                else{
                    return history.push('/customerdetails1');
                }
        }
        
        handleClick(){

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
        <div className="detailsCard card col-12 col-lg-5 login-card mt-2 hv-center mx-auto">
        <div className="card-header">
        <div className="row " >
        <div className="col-2">
            <FaUserAlt size='2.5rem'/>
        </div>
        <div className="col-10">
            <CardTitle className="text-dark text-left"><strong>Hi ! {this.state.Username} Help us Setup your account</strong></CardTitle>
            <CardText className="text-dark text-left">We'll verify it your KYC documents</CardText>
        </div>
    </div>
        </div>
                <div className="row row-content justify-content-center">
                    <div className="col-12">
                    
                        <Card>
                                <CardBody>
                                <form onSubmit={this.handleSubmit}>
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
                                <br/>
                                <FormGroup >
                                <Col><div className="insidebut">
                                    <Button className="col-6" type="submit" color="success" onClick={this.handleClick}>
                                        Continue
                                    </Button>
                                    </div>
                                </Col>
                 </FormGroup>
                                </form>
                            </CardBody>
                        </Card>
                    </div>
                </div>
            </div>
            </div>
        );
    }
}
export default DetailPage;