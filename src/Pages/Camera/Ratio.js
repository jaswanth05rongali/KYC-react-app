import React, { Component } from 'react'

export default class Ratio extends Component {
    constructor(props){
        super(props);
        this.state={
            aspectRatio:null
        }
        this.useCardRatio=this.useCardRatio.bind(this);
        this.calculateRatio=this.calculateRatio.bind(this);
    }
    useCardRatio(initialRatio){
        this.setState({aspectRatio:initialRatio})
    }
    calculateRatio(height,width){
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
