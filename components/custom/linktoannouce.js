import React from 'react';
import styled from 'styled-components';
import Tada from '../custom/animate/Tada'
import Pulse from '../custom/animate/pulse'

const Background = styled.div`
    position: relative;
    height: 100vh;
`
const Box = styled.img`
    position: relative;
    width: 60vw;
    animation: ${Pulse} 0.8s infinite;
    cursor: pointer;
    @media(min-width:576px){
        width: 40vw;
    }
    @media(min-width:768px){
        width: 35vw;
    }
    @media(min-width:1024px){
        width: 25vw;
    }
    &:hover{
        animation: ${Tada} 1s infinite;
    }
    &:active{
        animation: none;
        transform: scale3d(0.9, 0.9, 0.9);
    }
    
`

const Font = styled.div`
    @font-face {
        font-family: 'Pridi';
        src: url('/static/font/Pridi-Light.ttf');
    }
    font-family: 'Pridi';
    position: relative;
    top: 10px;
    font-size: 3em;
    text-align: center;
    color: white;
`

const openBox = () => {document.getElementById('Box').src = '../../static/img/openBox.png'
                       document.getElementById('Box').style.animation = 'none'
                       document.getElementById('Box').style.width = '25vw'}

export default class Introduce extends React.Component {
    state = {}
    render() {
        return (    
            <Background className="d-flex justify-content-center align-items-center">
                 <div className="text-center">
                    <Box id='Box' onClick={openBox} src='/static/img/box.svg'/>
                    <Font>กดที่ฉันสิออเจ้า</Font>
                </div>    
            </Background>
        )
    }
}