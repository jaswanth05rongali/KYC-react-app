import styled , {css} from 'styled-components';
export const Div=styled.div`
    /* position: relative;
    background-color:white;
    text-align:center; */
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
    position:absolute;
    text-align:center;
    color:white;
    height:40px;
    width:280px;
    left:50%;
    bottom:20%;
    transform: translate(-50%,-50%);
    z-index:2;
    display:${(props)=>{return props.toggle === false ? 'none':''}};
`
export const TextStyles2 = css`
    position:absolute;
    text-align:center;
    color:white;
    height:40px;
    width:280px;
    left:50%;
    bottom:110%;
    transform: translate(-50%,600%);
    z-index:2;
    display:${(props)=>{return props.toggle === true ? 'none':''}};
    `
export const TextStyles3 = css`
    position:absolute;
    text-align:center;
    color:white;
    height:40px;
    width:280px;
    left:50%;
    top:18%;
    transform: translate(-50%,600%);
    z-index:2;
    display:${(props)=>{return props.toggle === true ? 'none':''}};
`
export const OverlayStyles = css`
    position:absolute;
    height:${(props)=>{return props.toggle === true ? '320px' : '200px'}};
    width:${(props)=>{return props.toggle === true ? '240px' : '290px'}};
    left:50%;
    top:40%;
    border:1px solid white;
    border-radius:${(props)=>{return props.toggle===true ? '80%' : '0%'}};
    transform: translate(-50%,-50%);
    z-index:2
`
