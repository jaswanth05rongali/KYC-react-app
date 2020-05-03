import styled , {css} from 'styled-components';
export const Div=styled.div`
    position: fixed;
    background:black;
	top: 54%;
	left: 50%;
	min-width: 100%;
	min-height: 95%;
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
    bottom:5%;
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
export const Video = styled.video`
    position:fixed;
    top: 50.5%;
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
    background-color:rgba(22,29,32,0.5);;
    min-width:100%;
`
export const Dashboard2 = styled.div`
    position:fixed;
    bottom:0%;
    height:7%;
    background-color:rgba(22,29,32,0.5);
    min-width:100%;
`
export const TextStyles1 = css`
    position:fixed;
    text-align:center;
    color:white;
    min-width:100%;
    opacity:80%;
    font-size:16px;
    left:50%;
    bottom:18%;
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
    bottom:${(props)=>{
        switch (props.id) {
            case 'Voter ID':
                return '28%'
            default:
                return '40%'
        }
    }};
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
    top:${(props)=>{
        switch (props.id) {
            case 'Voter ID':
                return '21%'
            default:
                return '23%'
        }
    }};
    transform: translate(-50%,-50%);
    z-index:2;
    display:${(props)=>{return props.toggle === true ? 'none':''}};
`
export const TextStyles4=css`
    position:fixed;
    text-align:center;
    color:white;
    font-size:16px;
    left:23%;
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
export const OverlayStyles1 = css`
    display:${(props)=>{return props.toggle===false?'none':''}};
    position:fixed;
    height:50%;
    width:70%;
    left:50%;
    top:45%;
    border:1px solid white;
    border-radius:80%;
    transform: translate(-50%,-50%);
    z-index:2
`
export const OverlayStyles2 = css`
    display:${(props)=>{return props.toggle===true?'none':''}};
    position:fixed;
    height:${(props)=>{
        switch (props.id) {
            case 'Aadhaar':
                return '30%'
            case 'PAN':
                return '30%' 
            case 'Driving License':
                return '30%'
            case 'Passport':
                return '30%'   
            default:
                return '45%';
        }
    }};
    width:${(props)=>{
        switch (props.id) {
            case 'Aadhaar':
                return '95%'
            case 'PAN':
                return '95%'
            case 'Driving License':
                return '95%'
            case 'Passport':
                return '90%'
            default:
                return '60%';
        }
    }};
    left:50%;
    top:${(props)=>{
        switch (props.id) {
            case 'Voter ID':
                return '45%'
            default:
                return '40%'
        }
    }};
    border:1px solid white;
    border-radius:0%;
    transform: translate(-50%,-50%);
    z-index:2
`