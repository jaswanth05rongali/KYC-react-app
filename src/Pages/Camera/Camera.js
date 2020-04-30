import React ,{Component} from 'react';
import {Redirect} from 'react-router-dom';
import styled from 'styled-components';
import {Div,Text,OverlayStyles,Video,Cancel,Canvas,TakeSelfie} from './styles';
import SelfieScreenBack from '../SelfieScreens/SelfieScreenBack';
import history from '../../history';

const Overlay = styled.div`${OverlayStyles};`

export default class Camera extends Component{
    
    constructor(props){
        super(props);

        let from = sessionStorage.getItem('camera_origin');
        let toggle = ((from==='selfie1')||(from==='selfie3'))?true:false;
        let to='';

         switch (from) {
            case 'selfie1':
                to='selfie3';
                break;
            case 'selfie3':
                to='selfie3';
                break;
            case 'govtid1':
                to='govtid3';
                break;
            case 'govtid3':
                to='govtid3';
                break;
            case 'govtid4':
                to='govtid6';
                break;
            case 'govtid6':
                to='govtid6';
                break;
            default:
                to='';
                break;
        }

        this.state={
            showCamera:true,
            from,
            to,
            toggle
        }

        this.startcamera=this.startcamera.bind(this);
        this.stopcamera=this.stopcamera.bind(this);
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
        this.video.srcObject.getTracks().map((track)=>{track.stop()});
        this.setState({showCamera:false,to:this.state.from});
    }
    takephoto(){

        let context = this.canvas.getContext('2d');
        context.drawImage(this.video,0,0);

        let photo = this.canvas.toDataURL('image/webp');
        
        switch (this.state.from) {
            case ('selfie1'):
                sessionStorage.setItem('selfie',photo);
                break;
            case ('selfie3'):
                sessionStorage.setItem('selfie',photo);
                break;
            case('govtid1'):
                sessionStorage.setItem('idfront',photo);
                break;
            case('govtid3'):
                sessionStorage.setItem('idfront',photo);
                break;    
            case('govtid4'):
                sessionStorage.setItem('idback',photo);
                break;
            case('govtid6'):
                sessionStorage.setItem('idback',photo);
                break;    
        }

        context.clearRect(0,0,this.canvas.width,this.canvas.height);
        this.video.srcObject.getTracks().map((track)=>{track.stop()});
        this.setState({showCamera:false});
        
    }
    render(){
        if(this.state.showCamera===false){
            
            return <Redirect to={this.state.to}/>
        }
        else{
            return(
                <div>
                <Div>
    
                    <Overlay toggle={this.state.toggle}></Overlay>
                    <Text>
                        Make sure your your face fits inside the <br/>
                        oval and is clearly visible
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
}