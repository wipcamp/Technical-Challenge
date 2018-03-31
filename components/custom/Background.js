import react from 'react'
import styled from 'styled-components'
import Check from './Checkname'

const Bg = styled.body`
    height: 100vh;
    width:100vw;
    
`
const BgBottom = styled.img`
    position: absolute;
    width: 100vw;
    z-index:2;
    bottom: 0;
    left:0;
    @media(min-width:320px){
      width: 200vw;
      margin-left:-50%;
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
const BgLeft = styled.img`
    position: absolute;
    height: 100vh;
    z-index:1;
    bottom:0;
    left:-1vw;
    @media(max-width:576px){
      display:none;
    }
    @media(max-width:768px){

    }
`
const BgRight = styled.img `
    position: absolute;
    height: 100vh;
    z-index:1;
    bottom:0;
    right:-1vw;
    @media(max-width:576px){
      display:none;
    }
    @media(max-width:768px){
    }
`
const Button = styled.button`
    cursor:pointer;
`


export default class Background extends React.Component {
  render() {
    return(
    <Bg>
        <BgLeft src="../../static/img/Bgleft.png"/>
        <BgRight src="../../static/img/BgRight.png"/>
        <BgBottom src="../../static/img/open.png"/>

          <div className="d-flex justify-content-center align-items-center">
          <Check/>
          </div>   
    </Bg>

    )
  }
} 
