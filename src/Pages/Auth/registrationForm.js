
import React, {useState, Component} from 'react';
import './registrationForm.css';
import history from '../../history';

class RegistrationForm extends Component {
    userData;
    constructor(props){
        super(props);
        this.onChangeName = this.onChangeName.bind(this);
        this.onChangePassword= this.onChangePassword.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        // this.handleClick = this.handleClick.bind(this);
        this.state={
        Username:'',
        Password:''
        }
       }


    onChangeName(e) {
        this.setState({ Username: e.target.value })
    }

    onChangePassword(e) {
        this.setState({ Password: e.target.value })
    }

    onSubmit(e) {
        e.preventDefault()

        this.setState({
            Username:'',
            Password:''
        })
    }

    handleClick(){
        //alert('ewcwcwe');
        //window.location.hash = "/navbar";
        //window.location = '/navbar';
       history.push("/customerdetails1");
       // window.open("/navbar");
      }
   
    componentWillUpdate(nextProps, nextState) {
        sessionStorage.setItem('user', JSON.stringify(nextState));
    }
render(){
  return(
        <div>
          <div className="text-center logoImage"><img src="logo_green.png" height="100px" width="300px" alt="Logo"/></div>
        <div className="registrationEntireBlock">
            <div className="card col-12 col-lg-3 login-card mt-2 hv-center mx-auto registrationCard">
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
                       value={this.state.Username} onChange={this.onChangeName}
                />
                </div>
                <div className="form-group text-left">
                    <label htmlFor="exampleInputPassword1"></label>
                    <input type="password" 
                        className="form-control" 
                        id="password" 
                       placeholder="Enter your password"
                       value={this.state.Password} onChange={this.onChangePassword}
                    />
                </div>
                <button 
                    type="reset" 
                    className="btn btn-success btn-block" value="log in" onClick={this.handleClick}>Get OTP
                </button>
            </form>
        </div>
        </div>
        </div>
    )
  }
}
export default RegistrationForm;