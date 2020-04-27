import React, { Component } from 'react';
import Camera from './customCam';
export default class Test extends Component {

  constructor(props){
    super(props);
    this.state={
      showCamera:false
    }
    this.handle = this.handle.bind(this);
  }
  handle(){
    this.setState({
      showCamera:true
    })
  }
  render() {
    if(!this.state.showCamera&&<Camera ref={_ref => {this.camera=_ref}}/>){
      return (
        <div>
          <h4>This is the Take Selfie Screen </h4>
          {/*
          <<<< Instructions >>>>
          Your Code Goes Here......
          Add this Component in your Routes Folder ......
          Hanlde States Carefully......
          */}
          <button onClick={this.handle}>Take Selfie</button>
        </div>
      );
    }
    return (
      <div> 
          <div className='container'>
            <Camera />
          </div>      
      </div>
    )
  }
}
