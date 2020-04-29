import React ,{Component} from 'react';
import styled from 'styled-components';
import {Div,Text,OverlayStyles,Video,Cancel,Canvas,TakeSelfie} from './styles';

const Overlay = styled.div`${OverlayStyles};`

export default class Camera extends Component{
    
    constructor(props){
        super(props);
        this.state={
            toggle:false,
            from:this.props.match.params.from,
        }
        this.startcamera=this.startcamera.bind(this);
        this.stopcamera=this.startcamera.bind(this);
        this.takephoto=this.takephoto.bind(this);
        this.handletoggle=this.handletoggle.bind(this);
    }
    componentDidMount(){
        this.startcamera();
    }
    handletoggle(){
        this.setState({
            toggle:!this.state.toggle,
        })
    }
    startcamera(){
        navigator.mediaDevices.getUserMedia({audio:false,video:{width:320,height:640}})
        .then((stream)=>{
            this.video.srcObject = stream;
        })
        .catch(err=>console.log(err))
    }
    stopcamera(){
        this.video.srcObject.getTracks.getTracks().map((track)=>{track.stop()});
    }
    takephoto(){
        let context = this.canvas.getContext('2d');
        context.drawImage(this.video,0,0);
        let photo = this.canvas.toDataURL('image/webp');
        localStorage.setItem('photo',photo);
        context.clearRect(0,0,this.canvas.width,this.canvas.height);
    }
    render(){
        return(
            <div>
            <Div>
                <Overlay toggle={this.state.toggle}></Overlay>
                <Text>
                Make sure your your face fits inside the <br/>oval and is clearly visible
                </Text>   
                <Video id="video" autoPlay ref={(ref)=>{this.video=ref}}></Video>
                <Cancel  className='btn btn-success' onClick={this.stopcamera} id="stopbutton" ref={(ref)=>{this.stopbutton=ref}}>Close</Cancel>
                <TakeSelfie  className='btn btn-success' onClick={this.takephoto} id="clickbutton" ref={(ref)=>{this.photobutton=ref}}>Take Selfie</TakeSelfie> 
                <Canvas id="canvas" width={320} height={640} ref={(ref)=>{this.canvas=ref}}>
                </Canvas>
            </Div>
            <button onClick={this.handletoggle}>Toggle</button>
            </div>
        );
    }
}