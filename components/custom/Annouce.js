import React from 'react';
import styled from 'styled-components';
import Bg from '../custom/Background'

const Bg1 = styled.div`
  overflow-x:hidden;
  overflow-y:hidden;
` 
const MouseFlashlight = styled.div`
cursor: none;
/* --cursorX: 50%;
--cursorY: 50%; */
position: relative;
display: inline-block;
z-index:5;
&:before {
  content: '';
  display: block;
  width: 100%;
  height: 100%;
  position: absolute;
  pointer-events: none;
  background: radial-gradient(
    circle 15vmax at ${props => props.cursorX + ' ' + props.cursorY},
    rgba(0,0,0,0) 0%,
    rgba(0,0,0,.5) 80%,
    rgba(0,0,0,.95) 100%
  )

}
  @media(min-width:320px){
    background: radial-gradient(
      circle 50vmax at ${props => props.cursorX + ' ' + props.cursorY},
      rgba(0,0,0,0) 0%,
      rgba(0,0,0,.5) 80%,
      rgba(0,0,0,.95) 100%
    )
  }
  @media(min-width:576px){
  width: 150vw;
  margin-left:-25%;
  }
  @media(min-width:768px){
  width: 120vw;
  margin-left:-10%;
  }
  @media(min-width:1024px){
  width: 100vw;
  margin-left:0%;
  }
`

export default class App extends React.Component {
state = {
  x: '50%',
  y: '60%',
  node: null
}

update = (e) => {
  let x = e.clientX || e.touches[0].clientX
  let y = e.clientY || e.touches[0].clientY
  const { node } = this.state
  x -= node.offsetLeft
  y -= node.offsetTop
  this.setState({
    x: x + 'px',
    y: y + 'px'
  })
}

loadRef = (node) => {
   this.setState({ node })
}

render() {
  const { x, y } = this.state
  return (
    <Bg1>
      <MouseFlashlight
        cursorX={x}
        cursorY={y}
        onMouseMove={this.update}
        onTouchMove={this.update}
        innerRef={this.loadRef}
      >
      <Bg/>
      </MouseFlashlight>
    </Bg1>
  )
}
}
