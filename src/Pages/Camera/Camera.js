import React ,{Component} from 'react';
import {Redirect} from 'react-router-dom';
import styled from 'styled-components';
import  Measure  from 'react-measure';
import Ratio from './Ratio';
import Offset from './Offset';
import {Div,TextStyles1,TextStyles2,TextStyles3,OverlayStyles,Video,Cancel,Canvas,TakeSelfie} from './styles';


const Overlay = styled.div`${OverlayStyles};`
const T1 = styled.div`${TextStyles1};`
const T2 = styled.div`${TextStyles2};`
const T3 = styled.div`${TextStyles3};`

const CAPTURE_OPTIONS = {
    audio: false,
    video: { facingMode: "environment" },
};


export default class Camera extends Component{
    
    constructor(props){
        super(props);
        sessionStorage.setItem('currentPage','/camera');

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
            toggle,
            container:{height:360,width:640},
            aspectRatio:1.582,
        }
        sessionStorage.setItem('/'+this.state.to, JSON.stringify(false));
        this.startcamera=this.startcamera.bind(this);
        this.stopcamera=this.stopcamera.bind(this);
        this.takephoto=this.takephoto.bind(this);
        this.handletoggle=this.handletoggle.bind(this);
        this.handleResize=this.handleResize.bind(this); 
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

        navigator.mediaDevices.getUserMedia(CAPTURE_OPTIONS)
        .then((stream)=>{
            this.video.srcObject = stream;
        })
        .catch(err=>console.log(err))
    }
    stopcamera(){
        sessionStorage.setItem('/'+this.state.from, JSON.stringify(true));
        sessionStorage.setItem('/camera',JSON.stringify(false));
        this.video.srcObject.getTracks().map((track)=>{track.stop()});
        this.setState({showCamera:false,to:this.state.from});
    }
    takephoto(){
        
        let context = this.canvas.getContext('2d');
        let offsets = this.Offset.useOffsets(
            this.video.current && this.video.current.videoWidth,
            this.video.current && this.video.current.videoHeight,
            this.state.container.width,
            this.state.container.height
        );
        console.log(offsets.x,offsets.y);
        context.drawImage(
            this.video,
            offsets.x,
            offsets.y,
            this.state.container.width,
            this.state.container.height,
            0,
            0,
            this.state.container.width,
            this.state.container.height
        );

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
        sessionStorage.setItem('/'+this.state.to, JSON.stringify(true));
        sessionStorage.setItem('/camera',JSON.stringify(false));
    }
    handleResize(contentRect){
        let ratio = this.state.aspectRatio
        this.setState({
            height: Math.round(contentRect.bounds.width / ratio),
            width: contentRect.bounds.width
          });
    }
    render(){
        if(this.state.showCamera===false){
            return <Redirect to={this.state.to}/>
        }
        else{
            return(

                <Measure bounds onResize={this.handleResize}>
                    {({measureRef})=>(
                        <Div ref={measureRef} style={{ height: `${this.state.container.height}px` }}>
                            <Offset ref={(ref)=>{this.Offset=ref}}/>
                            <Ratio  ref={(ref)=>{this.ratio=ref}}/>
                            <Overlay toggle={this.state.toggle}></Overlay>
                            <T1 toggle={this.state.toggle}>
                                Make sure your your face fits inside the <br/>
                                oval and is clearly visible
                            </T1>
                            <T2 toggle={this.state.toggle}>
                                Fit {(parseInt(this.state.from.split('govtid')[1])===(1||3))?'front':'back'} side of Aadhar card inside the box
                            </T2>
                            <T3 toggle={this.state.toggle}>
                                Your {(parseInt(this.state.from.split('govtid')[1])===(1||3))?'Name and Photo':'Address'} should be clearly visible 
                            </T3>

                            <Video id="video" autoPlay ref={(ref)=>{this.video=ref}}></Video>
                            <Cancel  className='btn btn-success' onClick={this.stopcamera} id="stopbutton" ref={(ref)=>{this.stopbutton=ref}}>Close</Cancel>
                            <TakeSelfie  className='btn btn-success' onClick={this.takephoto} id="clickbutton" ref={(ref)=>{this.photobutton=ref}}></TakeSelfie> 
                            <Canvas width={this.state.container.width} height={this.state.container.height} id="canvas" ref={(ref)=>{this.canvas=ref}}></Canvas>
                            
                        </Div>
                    )}
                </Measure>
            );
        }
    }
}