import React, { Component } from 'react'

export default class Offset extends Component {
    constructor(props){
        super(props);
        this.state={
            offsets:{x:0,y:0}
        }
        this.useOffsets=this.useOffsets.bind(this);
    }
    useOffsets(vWidth,vHeight,cWidth,cHeight){
        if(vWidth && vHeight && cWidth && cHeight){
            const x = (vWidth>cWidth)?Math.round((vWidth-cWidth)/2):0;
            const y = (vHeight>cHeight)?Math.round((vWidth-cWidth)/2):0;           
            this.setState({offsets:{x,y}});
        }
        return this.state.offsets;
    }
    render() {
        return <div/>
    }
}
