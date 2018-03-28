import React from 'react'
import styled from 'styled-components'
import Bg from '../custom/Bg'
import Box from '../custom/Box'
import Light from '../custom/Light'

const Img = styled.img`
  width: 30%;
  margin-top: 7%;
  margin-right:17%;
  position: absolute;
  right: 0;
  z-index: 2;
`
const Img2 = styled.img`
  width: 30%;
  margin-top: 7%;
  margin-right:17%;
  position: absolute;
  right: 0;
  z-index: 1;
  animation: ${Light} 10s infinite;
`

export default class Custom extends React.Component {
  state = {}
  render() {
    return (
      <Bg className="container-fulid d-flex justify-content-center align-items-center">
        <Box className="" text="YoooooooO!"></Box>
        <Img src="/static/img/hanufire.png" />
        <Img2 src="/static/img/hanufire1.png" />
      </Bg>
    )
  }
}