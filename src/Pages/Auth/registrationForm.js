
import React, {useState, Component} from 'react';
import axios from 'axios';
import {BrowserRouter as Router, Link , Redirect , Prompt} from 'react-router-dom';
import history from '../../history';

const validateForm = (errors) => {
    let valid = true;
    Object.values(errors).forEach(
      (val) => val.length > 0 && (valid = false)
    );
    return valid;
  }
  
  const countErrors = (errors) => {
    let count = 0;
    Object.values(errors).forEach(
      (val) => val.length > 0 && (count = count+1)
    );
    return count;
  }

class RegistrationForm extends Component {
    userData;
    constructor(props){
        super(props);
        this.state={
        formValid: false,
        errorCount: null,
        errors : {
            Name:'',
            Pass:'',
        }
        };
       }

      handleChange = (event) => {
        event.preventDefault();
        const { name, value } = event.target;
        let errors = this.state.errors;
        
        switch (name) {
          case 'Name':
            errors.Name = 
              value.length < 5
                ? 'user name must be 5 characters long!'
                : '';
            break;

          case 'Pass': 
            errors.Pass = 
              value.length < 8
                ? 'password must be 8 characters long!'
                : '';
            break;
          default:
            break;
        }
        this.setState({errors, [name]: value});
      }

    handleSubmit = (event) => {
        event.preventDefault();
        this.setState({formValid: validateForm(this.state.errors)});
        this.setState({errorCount: countErrors(this.state.errors)});

      }
   /*    //alert('ewcwcwe');
        //window.location.hash = "/navbar";
        this.setState({loggIn:true});
        //window.location = '/navbar';
       // window.open("/navbar");*/
    componentWillUpdate(nextProps, nextState) {
        sessionStorage.setItem('user', JSON.stringify(nextState));
    }
    
render(){
    const {errors,formValid} =this.state;
  return(
        <div className="card col-12 col-lg-3 login-card mt-2 hv-center mx-auto">
        <nav className="navbar navbar-dark">
        <div className="row col-12 d-flex justify-content-center">
        <span className="h5 text-grey">Hi! Welcome to ZestMoney</span>
        <span className="h6 text-muted">One step KYC solution</span>
        </div>
        </nav>
            <form onSubmit={this.handleSubmit}>
                <div className="form-group text-left">
                <label htmlFor="exampleInputusername"></label>
                <input type="text" autoFocus
                       className="form-control" 
                       id="username" 
                       aria-describedby="nameHelp" 
                       placeholder="Enter your username"
                       name="Name"
                       onChange={this.handleChange}
                />
                {errors.Name.length > 0 && 
                    <span className='error'>{errors.Name}</span>}
                </div>
                <div className="form-group text-left">
                    <label htmlFor="exampleInputPassword1"></label>
                    <input type="password" name="Pass" 
                        className="form-control" 
                        id="password" 
                       placeholder="Enter your password"
                       onChange={this.handleChange}
                    />
                    {errors.Pass.length > 0 && 
                        <span className='error'>{errors.Pass}</span>}
                </div>
                <button 
                    type="submit" 
                    className="btn btn-success btn-block" value="log in" onClick={this.handleClick}>Get OTP
                </button>
                {formValid ? <Redirect to="/customerdetails1"/> : <Redirect to="/"/>}
            </form>
        </div>
    )
  }
}
export default RegistrationForm;