import React from 'react';
import styled from 'styled-components';
import Bg from '../custom/Bg'
import Tada from '../custom/animate/Tada'
import Pulse from '../custom/animate/pulse'

const Background = Bg.extend`
    background-image: url('/static/img/bg2.png');
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
    position: relative;
    top: 10px;
    font-size: 3em;
    text-align: center;
    color: white;
`
const Div =styled.div`
    position: absolute;
    transform: translate(-50%, -50%);
    top: 50%;
    left:50%;
`

export default class Introduce extends React.Component {
    state = {}
    render() {
        return (
            <Background>
                <Div>
                    <Box src='/static/img/box.svg'/>
                    <Font>กดที่ฉันสิออเจ้า</Font>
                </Div>
            </Background>
        )
    }
}