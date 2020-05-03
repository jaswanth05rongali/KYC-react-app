import React from "react";
import history from "../history";

export default class ErrorPage extends React.Component{
    componentDidMount() {
        setTimeout(() => {
            history.push('/')
        }, 3000)
    }
    render(){
        return (
            <div className="text-center" style={{marginTop:"15px",marginLeft:"10px",marginRight:"10px"}}>
                <h3>Oops! Please do open the application in a mobile browser</h3>
                <div style={{marginTop:"30px"}}><img src={require("./error.png")} width="0%" alt="Error"/></div>
            </div>
        );
    }
};