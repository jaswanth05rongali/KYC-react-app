import styled , {css} from 'styled-components';
export const Div=styled.div`
    position: fixed;
    background:black;
	top: 50%;
	left: 50%;
	min-width: 100%;
	min-height: 100%;
	width: auto;
	height: auto;
	z-index: -100;
	transform: translateX(-50%) translateY(-50%);
`
export const Canvas = styled.canvas`
    display:none;
`
export const TakeSelfie = styled.button`

    position:absolute;
    height:70px;
    width:70px;
    border-radius:50%;
    bottom:8%;
    left:50%;
    transform: translate(-50%,-50%);
    background-color:rgba(255, 255, 255, 1);
    border: 1px solid rgba(150, 150, 150, 0.4);
    border-width:10px;
`
export const Cancel = styled.button`
    position:fixed;
    color:white;
    top:1%;
    right:2%;
    font-size:18px;
    background:transparent;
    border-color:transparent;    
`
export const Tips = styled.button`
    position:fixed;
    color:white;
    bottom:1%;
    right:2%;
    font-size:18px;
    background:transparent;
    border-color:transparent; 
    z-index:999;   
`
export const Gallery = styled.button`
    position:fixed;
    color:white;
    bottom:-1.5%;
    left:50%;
    font-size:18px;
    background:transparent;
    border-color:transparent;  
    transform: translateX(-50%) translateY(-50%);  
`
export const Video = styled.video`
    position:fixed;
    top: 50%;
	left: 50%;
	min-width: 100%;
	min-height: 100%;
	width: auto;
	height: auto;
	z-index: -100;
	transform: translateX(-50%) translateY(-50%);
`
export const Dashboard1 = styled.div`
    position:fixed;
    top:0%;
    height:7%;
    background-color:rgba(22,29,32,0.7);;
    min-width:100%;
`
export const Dashboard2 = styled.div`
    position:fixed;
    bottom:0%;
    height:7%;
    background-color:rgba(22,29,32,0.7);
    min-width:100%;
`
export const TextStyles1 = css`
    position:fixed;
    text-align:center;
    color:white;
    opacity:40%;
    font-size:16px;
    left:50%;
    bottom:40%;
    transform: translate(-50%,-50%);
    z-index:2;
    display:${(props)=>{return props.toggle === false ? 'none':''}};
`
export const TextStyles2 = css`
    position:fixed;
    text-align:center;
    color:white;
    width:100%;
    font-size:16px;
    left:50%;
    bottom:30%;
    transform: translate(-50%,-50%);
    z-index:2;
    display:${(props)=>{return props.toggle === true ? 'none':''}};
    `
export const TextStyles3 = css`
   position:fixed;
    text-align:center;
    color:white;
    width:100%;
    font-size:16px;
    left:50%;
    top:33%;
    transform: translate(-50%,-50%);
    z-index:2;
    display:${(props)=>{return props.toggle === true ? 'none':''}};
`
export const TextStyles4=css`
    position:fixed;
    text-align:center;
    color:white;
    font-size:16px;
    left:20%;
    top:3.5%;
    transform: translate(-50%,-50%);
    display:${(props)=>{return props.toggle === true ? 'none':''}};
`
export const TextStyles5=css`
    position:fixed;
    text-align:center;
    color:white;
    font-size:16px;
    left:20%;
    top:3.5%;
    transform: translate(-50%,-50%);
    display:${(props)=>{return props.toggle === false ? 'none':''}};
`
export const OverlayStyles = css`
    position:fixed;
    height:${(props)=>{return props.toggle === true ? '44%' : '30%'}};
    width:${(props)=>{return props.toggle === true ? '70%' : '90%'}};
    left:50%;
    top:50%;
    border:1px solid white;
    border-radius:${(props)=>{return props.toggle===true ? '80%' : '0%'}};
    transform: translate(-50%,-50%);
    z-index:2
`
