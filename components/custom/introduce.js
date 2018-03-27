import React from 'react';
import styled from 'styled-components';
import Bg from '../custom/Bg';
import Box from '../custom/Box'

const Img = styled.img`
  width: 30%;
  margin-left:20%;
  position: absolute;
  left: 0;
  z-index: 1;
`

export default class Introduce extends React.Component {
    state = {}
    render() {
        return (
            <Bg className="container-fulid d-flex justify-content-center align-items-center">
                <Box className="ml-5" text="YOOOOOOOOOOOOOOOOOOOOOOOOOOOOO!"></Box>
                <Img src="/static/img/todfire1.png" className="" />
            </Bg>
        )
    }
}