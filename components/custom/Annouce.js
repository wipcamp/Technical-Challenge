import React from 'react';
import styled from 'styled-components';

const MouseFlashlight = styled.div`

cursor: none;
/* --cursorX: 50%;
--cursorY: 50%; */
position: relative;
display: inline-block;
&:before {
  content: '';
  display: block;
  width: 100%;
  height: 100%;
  position: absolute;
  pointer-events: none;
  background: radial-gradient(
    circle 80px at ${props => props.cursorX + ' ' + props.cursorY},
    rgba(0,0,0,0) 0%,
    rgba(0,0,0,.5) 80%,
    rgba(0,0,0,.95) 100%
  )
}
`

class App extends React.Component {
state = {
  x: '50%',
  y: '50%',
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
    <div>
      <MouseFlashlight
        cursorX={x}
        cursorY={y}
        onMouseMove={this.update}
        onTouchMove={this.update}
        innerRef={this.loadRef}
      >
        <img style={{width: '800px'}} src='https://www.gettyimages.ie/gi-resources/images/Homepage/Hero/UK/CMS_Creative_164657191_Kingfisher.jpg' />
      </MouseFlashlight>
    </div>
  )
}
}

export default App