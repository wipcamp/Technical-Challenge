import react from 'react'
import styled from 'styled-components'

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
const H = styled.h1`
    font-size:3em;
    text-align: center;
    @font-face {
      font-family: 'Pridi';
      src: url('/static/font/Pridi-Light.ttf');
    }
    font-family: 'Pridi';
    padding-top: 1%;
    @media(min-width:320px){
      font-size:1.5em;
      padding-top: 30%;
    }
    @media(min-width:576px){
      font-size:1.5em;
      padding-top: 25%;
    }
    @media(min-width:768px){
      font-size:2em;
    }
    @media(min-width:1024px){
      font-size:3em;
      padding-top: 1%;
    }
`
const P = styled.p`
  font-size:2em;
  text-align: center;
  @font-face {
    font-family: 'Pridi';
    src: url('/static/font/Pridi-Light.ttf');
  }
  font-family: 'Pridi';
  @media(min-width:320px){
    font-size:1.5em;
  }
  @media(min-width:576px){
    font-size:1.5em;
  }
  @media(min-width:768px){
    font-size:1.5em;
  }
  @media(min-width:1024px){
    font-size:2em;
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
          <H>ยินดีด้วย</H> 
          <P>คุณได้เข้าร่วมกองทัพกับเรา</P>  
          {/* <H>เสียใจด้วยนะ</H> 
          <P>ครั้งหน้าลองใหม่ ...</P>  */}
          <div className="d-flex justify-content-center align-items-center">
          <a href="http://wip.camp">
          <Button type="button" className="btn btn-outline-success text-center">ยืนยันสิทธิ์</Button>
          {/* <Button type="button" className="btn btn-outline-warning text-center">กลับกน้าหลัก</Button> */}
          </a>
          </div>   
    </Bg>

    )
  }
} 
