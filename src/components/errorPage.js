import React from "react";
import {Redirect} from "react-router-dom";
import history from '../history';

export default class ErrorPage extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            redirect: false,
        };
        sessionStorage.setItem('currentPage','/error')
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({
                redirect: true,
            })
        }, 2000)
    }
    render(){
        if (this.state.redirect) {
            sessionStorage.setItem('/error',JSON.stringify(false));
            return (
                <Redirect to={'/'} />
            )
        }
        return (
            <div className="text-center" style={{marginTop:"15px",marginLeft:"10px",marginRight:"10px"}}>
                <h3>Oops! Please do open the application in a mobile browser</h3>
                <div style={{marginTop:"25px"}}><img src={require("./error.png")} width="70%" alt="Error"/></div>
            </div>
        );
    }
};