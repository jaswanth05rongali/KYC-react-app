import styled , {css} from 'styled-components';
export const Div=styled.div`
    position: fixed;
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
    height:50px;
    width:50px;
    border-color:white;
    border-radius:50%;
    bottom:10%;
    left:50%;
    transform: translate(-50%,-50%);
   
`
export const Cancel = styled.button`
    position:fixed;
    top:0%;
    right:0%;
    font-size:18px;
    background:transparent;
    border-color:transparent;    
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
    min-width: 100%;
    min-height: 100%;
    width: auto;
    height: auto;
    z-index: -100;
    transform: translateX(-50%) translateY(-50%);

`
export const TextStyles1 = css`
    position:fixed;
    text-align:center;
    color:white;
    font-size:16px;
    left:50%;
    bottom:20%;
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
    bottom:40%;
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
    top:23%;
    transform: translate(-50%,-50%);
    z-index:2;
    display:${(props)=>{return props.toggle === true ? 'none':''}};
`
export const OverlayStyles = css`
    position:fixed;
    height:${(props)=>{return props.toggle === true ? '50%' : '30%'}};
    width:${(props)=>{return props.toggle === true ? '70%' : '90%'}};
    left:50%;
    top:40%;
    border:1px solid white;
    border-radius:${(props)=>{return props.toggle===true ? '80%' : '0%'}};
    transform: translate(-50%,-50%);
    z-index:2
`
