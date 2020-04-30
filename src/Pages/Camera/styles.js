import styled , {css} from 'styled-components';
export const Div=styled.div`
    position: relative;
    width:320px;
    height:640px;
`
export const Canvas = styled.canvas`
    display:none;
`
export const TakeSelfie = styled.button`
    position:absolute;
    bottom:80px;
    left:120px;
    border-color:white;
    background:transparent;
    border-radius:50px;
`
export const Cancel = styled.button`
    position:absolute;
    top:10px;
    right:10px;
    background:transparent;
`
export const Video = styled.video`
    position:absolute;
    top:0px;
    left:0px;
`
export const Text = styled.div`
    position:absolute;
    text-align:center;
    color:white;
    height:40px;
    width:280px;
    left:50%;
    bottom:60%;
    transform: translate(-50%,600%);
    z-index:2
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
