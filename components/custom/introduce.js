import React from 'react';
import styled from 'styled-components';
import Bg from '../custom/Bg';
import Box from '../custom/Box'
import Light from '../custom/Light'

const Img = styled.img`
  width: 30%;
  margin-left:20%;
  position: absolute;
  left: 0;
  z-index: 2;
`
const Img2 = styled.img`
  width: 30%;
  margin-left:20%;
  position: absolute;
  left: 0;
  z-index: 1;
  animation: ${Light} 12s infinite;
`

export default class Introduce extends React.Component {
    state = {}
    render() {
        return (
            <Bg className="container-fulid d-flex justify-content-center align-items-center">
                <Box className="ml-5" text="YOOOOOOOOOOOOOOOOOOOOOOOOOOOOO!"></Box>
                <Img src="/static/img/todfire.png" className="" />
                <Img2 src="/static/img/todfire1.png" />
            </Bg>
        )
    }
}