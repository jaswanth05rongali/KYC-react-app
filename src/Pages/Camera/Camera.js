import React ,{Component} from 'react';
import {Redirect} from 'react-router-dom';
import styled from 'styled-components';
import './dropup.css'
import {
    Div,
    Dashboard1,
    Dashboard2,
    TextStyles1,
    TextStyles2,
    TextStyles3,
    TextStyles4,
    TextStyles5,
    OverlayStyles1,
    OverlayStyles2,
    Video,
    Cancel,
    Canvas,
    TakeSelfie,
    Gallery
} from './styles';


const Overlay1 = styled.div`${OverlayStyles1};`
const Overlay2 = styled.div`${OverlayStyles2};`
const T1 = styled.div`${TextStyles1};`
const T2 = styled.div`${TextStyles2};`
const T3 = styled.div`${TextStyles3};`
const T4 = styled.div`${TextStyles4};`
const T5 = styled.div`${TextStyles5};`

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
            permissionDenied:false
        }
        sessionStorage.setItem('/'+this.state.to, JSON.stringify(false));
        this.startcamera=this.startcamera.bind(this);
        this.stopcamera=this.stopcamera.bind(this);
        this.takephoto=this.takephoto.bind(this);
        this.handletoggle=this.handletoggle.bind(this);
        this.handleAssist=this.handleAssist.bind(this);

    }
    componentDidMount(){
        this.startcamera();
        if(!this.state.showCamera){
            setTimeout(() => {
                this.photobutton.disabled=false;
                this.stopbutton.disabled=false;
                this.tips.disabled=false;
                this.gallery.disabled=false;
            }, 1000);
            this.photobutton.disabled=true;
            this.stopbutton.disabled=true;
            this.tips.disabled=true;
            this.gallery.disabled=true;

        }
    }
    handletoggle(){
        this.setState({
            toggle:!this.state.toggle,
        })
    }
    startcamera(){

        const CAPTURE_OPTIONS = {
            audio: false,
            video: {facingMode: `${this.state.toggle===true?'user':'environment'}`}
        };

        navigator.mediaDevices.getUserMedia(CAPTURE_OPTIONS)
        .then((stream)=>{
            this.video.srcObject = stream;
        })
        .catch(err=>{
            this.setState({showCamera:false,permissionDenied:true});
        })
    }
    stopcamera(){
        sessionStorage.setItem('/'+this.state.from, JSON.stringify(true));
        sessionStorage.setItem('/camera',JSON.stringify(false));
        this.video.srcObject.getTracks().map((track)=>{track.stop()});
        this.setState({showCamera:false,to:this.state.from});
    }
    takephoto(){
        
        this.canvas.width = this.video.videoWidth;
        this.canvas.height = this.video.videoHeight;

        let context = this.canvas.getContext('2d');
       

        context.drawImage(
            this.video,
            0,
            0,
            this.video.videoWidth,
            this.video.videoHeight,
            0,
            0,
            this.video.videoWidth,
            this.video.videoHeight,
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
    handleAssist(){
        this.setState({permissionDenied:false});
    }
    
    render(){
        if(this.state.showCamera===false){
            if(this.state.permissionDenied===true){
                return(
                    <div>
                        <div style={{borderStyle:"solid",borderColor:"#a4a4a4",marginTop:"10px",marginLeft:"10px",marginRight:"10px",marginBottom:"20px"}}>
                            <h1 className="text-center" style={{marginTop:"15px",marginLeft:"10px", marginRight:"20px", color:"#FF000"}}>Oops !!</h1>
                            <h5 style={{marginTop:"2    0px",marginLeft:"10px",marginRight:"10px", paddingLeft:"10px",paddingRight:"10px",}}>We need to access the camera to complete your KYC process</h5>
                            <header style={{marginLeft:"10px",marginRight:"10px", paddingLeft:"10px",paddingRight:"10px",}}>Follow theses steps to use camera</header>
                            <div>
                                <ul style={{fontSize:"16px",marginTop:"5px",marginLeft:"15px",marginRight:"15px",}}>
                                    <li>Go to <strong>Settings</strong> in your chrome browser.</li>
                                    <li>In <strong>Advanced</strong> section, Select <strong>Site Settings.</strong></li>
                                    <li>Then choose <strong>Camera</strong>.</li>
                                    <li>Now on this page, In the <strong>Blocked</strong> section, you can see the web address. Click on it and allow <strong>Access your camera</strong> option.</li>
                                    <li>Thank You for your Assistance.</li>
                                </ul>
                            </div>
                        </div>
                        <div className="text-center"><button type="button" className="btn btn-success" onClick={this.handleAssist}>Go Back to Camera</button></div>
                    </div>
                );  
            }
            else {
                return <Redirect to={this.state.to}/>
            }
        }
        else{
            return(
                    <div>
                        <Div>

                            <Dashboard1/><Dashboard2/>
                            <Overlay1 toggle={this.state.toggle}></Overlay1>
                            <Overlay2 id={sessionStorage.getItem('ID')} toggle={this.state.toggle}></Overlay2>
                            <T1 toggle={this.state.toggle}>
                                Make sure your face fits inside the <br/>
                                oval and is clearly visible
                            </T1>
                            <T2 id={sessionStorage.getItem('ID')} toggle={this.state.toggle}>
                                Fit {(parseInt(this.state.from.split('govtid')[1])===(1||3))?'front':'back'} side of {sessionStorage.getItem('ID')} card inside the box
                            </T2>
                            <T3 id={sessionStorage.getItem('ID')} toggle={this.state.toggle}>
                                Your {(parseInt(this.state.from.split('govtid')[1])===(1||3))?'Name and Photo':'Address'} should be clearly visible 
                            </T3>
                            <T4 toggle={this.state.toggle}>
                                {sessionStorage.getItem('ID')} {(parseInt(this.state.from.split('govtid')[1])==(1||3)?'Front Side':'Back Side')}
                            </T4>
                            <T5 toggle={this.state.toggle}>
                                Take a Selfie
                            </T5>

                            <Video id="video" autoPlay ref={(ref)=>{this.video=ref}}></Video>
                            <Cancel  className='btn ' onClick={this.stopcamera} id="stopbutton" ref={(ref)=>{this.stopbutton=ref}}>Close</Cancel>
                            <TakeSelfie  className='btn' onClick={this.takephoto} id="clickbutton" ref={(ref)=>{this.photobutton=ref}}></TakeSelfie>
                            
                            <Canvas id="canvas" ref={(ref)=>{this.canvas=ref}}></Canvas>
                            
                            <div className="dropup">
                                <button id="tips"ref={(ref)=>{this.tips=ref}} className="btn btn-secondary">Tips</button>
                                <div className="dropup-content">
                                    <a href="#">Hold the Camera Still</a>
                                    <a href="#">Make Sure there is proper lighting before taking pics</a>
                                </div>    
                            </div>

                        </Div> 
                    </div>
            );
        }
    }
}