import React, {Component} from 'react';
import {Card, CardText, CardBody, CardTitle, Button, Form, FormGroup, Col, Input} from 'reactstrap';
import history from '../../history';
import './detailComp.css'

class DetailPage extends Component {
    userData;
    constructor(props)
    {
        super(props);
        this.state={
            validuser:false,
            username:'',
            dateofbirth:'',
            gender:''
        };
          this.handleChange = this.handleChange.bind(this);
        sessionStorage.setItem('currentPage','/customerdetails');
        sessionStorage.setItem('/takeselfie',JSON.stringify(false));              
}
        
changegender = (gndr) =>{
    this.setState({
        gender:gndr
    })
    this.setState({validgender:true});
}
         
        handleChange(event){
            const { name, value } = event.target;
            this.setState({
                    [event.target.name]:event.target.value
                }
                );

    }

        handleSubmit = (event) => {
            event.preventDefault();
            sessionStorage.setItem('/takeselfie',JSON.stringify(true));
            sessionStorage.setItem('/customerdetails',JSON.stringify(false));
            let username=this.state.username;
            let dateofbirth=this.state.dateofbirth;
            let i;
            let ok=true;
            let today = new Date();
            let dd = String(today.getDate()).padStart(2, '0');
            let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
            let yyyy = today.getFullYear();
            today = yyyy + '-' + mm + '-' + dd;
            for(i=0;i<username.length;i++){
                let val=username.charCodeAt(i);
                if((val>=65 && val<=90) ||(val>=97 && val<=122)){

                }
                else if(val==32){
                    
                }
                else ok=false;
            }
            if(!ok) alert('Name cannot contain numbers or special characters !');
            else if(dateofbirth>=today) alert('invalid date of birth !');
            else history.push('/takeselfie');
            

        }
        
        handleClick(){

        }

        componentWillUpdate(nextProps, nextState) {
            
                sessionStorage.setItem('user', JSON.stringify(nextState));
            
        }

        componentDidMount() {
            document
            .getElementsByTagName("HTML")[0]
            .setAttribute("data-theme", localStorage.getItem("theme"));
            this.userData = JSON.parse(sessionStorage.getItem('user'));
    
            if (sessionStorage.getItem('user')) {
                this.setState({
                    username: this.userData.username,
                    dateofbirth: this.userData.dateofbirth
                })
            } else {
                this.setState({
                    username:'',
                    Password:''
                })
            }
        }
                
 render(){
        return (
        
        <div className="detailsEntireBlock">         
        <div className="detailsCard">
        <div className="cardHeader">
        <div className="row " >
        <div className="Icon">
            <img src={require('./icon3.png')} height="55" width="55" alt="icon" />
        </div>
        <div className="cardText">
            <div style={{fontSize:'20px',marginBottom:'0px'}}><CardTitle className="text-left"><strong>Hi ! {this.state.Username} Help us Setup your account</strong></CardTitle></div>
            <CardText className="text-left">We'll verify it with your KYC documents</CardText>
        </div>
    </div>
        </div>
                <div className="row row-content justify-content-center">
                    <div className="col-12">
                        <div className="cardBody">
                                <div className="insideCardBody">
                                <form onSubmit={this.handleSubmit}>
                                <FormGroup row >
                                    <Col>
                                    <CardText className="text-color">Your full name</CardText>
                                    <Input type="text" name="username" value={this.state.username} placeholder="eg: Raj Kumar Babu" onKeyPress={this.handleClick} required onChange={this.handleChange}/>
                                    <div style={{marginTop:'4px'}}><CardText className="text-muted text-left">Ensure it matches name on your PAN</CardText></div>
                                    </Col>
                                </FormGroup>
                                <FormGroup row >
                                    <Col>
                                    <CardText className="text-color">Your date of birth</CardText>
                                    <Input type="date" name="dateofbirth" value={this.state.dateofbirth} placeholder="DD/MM/YYYY" required onChange={this.handleChange}/>
                                    
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Col>
                                        <CardText className="text-color">Your gender</CardText>
                                            <div className="row">
                                                <div className="col-4"><button  type="button" className="bbutton col-12 btn btn-block btn-outline-success"  value="Female" onClick={() => this.changegender('Female')}>Female</button></div>
                                                <div className="col-4"><button  type="button" className="bbutton RoundButton btn btn-block btn-outline-success"  value="Male" onClick={() => this.changegender('Male')}>Male</button></div>
                                                <div className="col-4"><button  type="button" className="bbutton RoundButton btn btn-block btn-outline-success"  value="Other" onClick={() => this.changegender('Other')}>Other</button></div>
                                            </div>
                                    </Col>
                                </FormGroup>
                                <FormGroup >
                                <Col><div className="insidebut">
                                    <Button className="col-6" type="submit" color="success" onClick={this.handleClick}>
                                        Continue
                                    </Button>
                                    </div>
                                </Col>
                 </FormGroup>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        );
    }
}
export default DetailPage;