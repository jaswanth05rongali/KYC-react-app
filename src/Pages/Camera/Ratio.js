import React, { Component } from 'react'

export default class Ratio extends Component {
    constructor(props){
        super(props);
        this.state={
            aspectRatio:1.584
        }
        this.calculateRatio=this.calculateRatio.bind(this);
    }
    calculateRatio(height,width){
        alert('asd')
        if(height && width){
            const isLandscape = height<=width;
            const ratio = isLandscape===true ? width/height : height/width;
            this.setState({aspectRatio:ratio});
        }
    
        return this.state.aspectRatio;
    }
    render() {
        return <div/> 
    }
}
