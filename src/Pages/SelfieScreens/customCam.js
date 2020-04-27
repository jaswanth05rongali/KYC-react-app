import React, { Component } from 'react'
import './new.css';
import Test2 from './Test2';
import Test from './Test';

export default class Camera extends Component {
    constructor(props){
        super(props);
        this.state={
            gotPicture:false,
            close:false
        }
        this.captureImage = this.captureImage.bind(this);
        this.cameraStart = this.cameraStart.bind(this);
        this.cameraStop = this.cameraStop.bind(this);
    }
    componentDidMount(){
        this.cameraStart();
    }
    cameraStart(){
        let constraints = { audio: false, video: { width: 360, height: 640 } };
        navigator.mediaDevices
        .getUserMedia(constraints)
        .then((stream)=>{
            this.cameraView.srcObject = stream;
        })
        .catch(err=>console.log(err));
    }
    captureImage(){
        this.cameraSensor.width=this.cameraView.videoWidth;
        this.cameraSensor.height=this.cameraView.videoHeight;
        const context = this.cameraSensor.getContext('2d');
        context.drawImage(this.cameraView,0,0);
        const image = this.cameraSensor.toDataURL('image/webp');
        localStorage.setItem('picture',image);
        this.cameraStop();
        this.setState({
            gotPicture:true
        })
    }
    cameraStop(){
        this.cameraView.srcObject.getTracks().map((track)=>{track.stop()});
        this.setState({
            close:true
        })
    }

    render() {
        if(this.state.gotPicture===true){
            return <Test2/>
        }
        else if(this.state.close===true){
            return <Test/>
        }
        return (
            <div>
                <div>
                    <div className='col col-sm-12'>
                        <div className = 'text-align-cenetr' id='camera'>
                            <video className="text-align-center" id='camera-view' autoPlay ref={(_ref)=>{this.cameraView=_ref}}></video>
                            <img src="https://img.icons8.com/dusk/64/000000/unsplash.png" id='camera--trigger'ref={(_ref)=>{this.cameraTrigger=_ref}} onClick={this.captureImage} />
                            <img src="https://img.icons8.com/color/48/000000/close-window.png" id='camera--close'ref={(_ref)=>{this.cross=_ref}} onClick={this.cameraStop} />
                            <a href="#" title="Dismissible popover" data-toggle="popover" data-placement='top' data-container="body" data-trigger="focus" data-content="Click anywhere in the document to close this popover"><img src="https://img.icons8.com/doodle/48/000000/light-on--v1.png" id='camera--tips'/></a>  
                            <canvas id='camera--sensor' ref={(_ref)=>{this.cameraSensor=_ref}}></canvas>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
