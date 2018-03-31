import React from 'react'
import styled from 'styled-components'

const Sec = styled.div`
  height: 250px;
  width: 900px;
  background-color: none;
  overflow : hidden;
  padding: 10px;
  border: 10px solid black;
  font-size: 1.5vw;
  @media (min-width: 320px) {
    width: 300px;
    height: 100px;
    border: 4px solid black;
  }
  @media (min-width: 720px) {
    width: 600px;
    height: 200px;
  }
  @media (min-width: 1024px) {
    width: 900px;
    height: 250px;
    border: 10px solid black;
  }
  
`

const Text = styled.p`
  @font-face {
    font-family: 'Pridi';
    src: url('/static/font/Pridi-Light.ttf');
  }
  font-family: 'Pridi';
  color: white;
  margin: 0;
`

const ImgY = styled.img`
  width: 120%;
  margin-top: -4vh;
  @media (min-width: 720px) {
    margin-top: -35%;

  }
  @media (min-width: 1024px) {
    margin-top: -30%;
    width: 100%;
  }
`

const BoxY = styled.div`
  min-height: 50%;
  padding: 10px;
  min-width : 115%;
  background-color: #5D985C;
  @media(min-width:720px){
    min-width : 100%;
  }
`
const SelectorY = styled.div`
  border-top: 10px solid transparent;
	border-bottom: 10px solid transparent;
	border-left: 10px solid #5D985C;
`
const SelectorL = styled.div`
  border-top: 10px solid transparent;
	border-bottom: 10px solid transparent;
	border-right: 10px solid #FCB933;
`
const BoxL = styled.div`
  min-height: 50%;
  padding: 10px;
  min-width : 100%;
  background-color: #FCB933;
`
const ImgL = styled.img`
  width: 140%;
  float: left;
  margin-top: -5%;
  @media(min-width:320px){
    margin-left: -20%;
  }
  @media(min-width:720px){
    width: 130%;
    margin-top: -10%;
    margin-left: -10%;
  }
  @media(min-width:1024px){
    width: 110%;
    margin-left: 0%;
  }
` 
const Div = styled.div`
  width: 100%;
  background-color: #ffffcc;
  padding : 10px;
  padding-top : 0;
  padding-bottom: 0;
  margin-top: 20px;
  border: 10px solid black;
  border-top : none;
  @media(min-width:320px){
    border: 8px solid black;
  }
`

export default class Custom extends React.Component {
  state = {}
  render() {
    return (
      <div className="container d-flex justify-content-center">
        <div className="row d-flex justify-content-center">
          <Div className="rounded">
            <Sec id="Top" className="row">
              <div className="col-7 d-flex align-items-center justify-content-center">
                <BoxY className="rounded d-flex justify-content-center"><Text className="align-middle">สวัสดีเจ้าลิง เจ้ารู้ไหมว่าวันนี้เป็นวันอะไร?</Text></BoxY>
                <SelectorY/>
                </div>
              <div className="col-5">
                <ImgY src="/static/img/todfire.png"/>
              </div>
            </Sec>
            <Sec other className="row">
              <div className="col-5">
                <ImgL src="/static/img/hanufire.png"/>
              </div>
              <div className="col-7 d-flex align-items-center justify-content-center">
                <SelectorL/>
                <BoxL className="rounded"><Text>วันนี้เป็นวันประกาศผลค่าย Wip Camp ครั้งที่ 10 ใช่ไหมเจ้ายักษ์?</Text></BoxL>
              </div>
            </Sec>
            <Sec className="row">
              <div className="col-7 d-flex align-items-center justify-content-center">
                <BoxY className="rounded"><Text>ฉลาดมากเจ้าลิง ใช่แล้ววันนี้เป็นวันประกาศรายชื่อของผู้ที่มีสิทธิ์ที่จะมาเข้าร่วมกองทัพกับเรายังไงล่ะ</Text></BoxY>
                <SelectorY/>
              </div>
              <div className="col-5">
                <ImgY src="/static/img/todfire.png"/>
              </div>
            </Sec>
            <Sec other className="row">
              <div className="col-5">
                <ImgL src="/static/img/hanufire.png"/>
              </div>
              <div className="col-7 d-flex align-items-center justify-content-center">
                <SelectorL/>
                <BoxL className="rounded"><Text>แล้วข้าจะรู้ได้ยังไงล่ะเจ้ายักษ์ ว่ามีใครที่จะมาเข้าร่วมกองทัพกับเราบ้าง?</Text></BoxL>
              </div>
            </Sec>
            <Sec className="row">
              <div className="col-7 d-flex align-items-center justify-content-center">
                <BoxY className="rounded"><Text>เจ้าก็แค่เปิดกล่องดวงใจนั่นดู แล้วกล่องจะบอกทุกสิ่งกับเจ้าเอง แต่เจ้าจะต้องรับคบเพลิงจากข้าไปด้วย มันจะมีประโยชน์ต่อเจ้าเอง</Text></BoxY>
                <SelectorY/>
              </div>
              <div className="col-5">
                <ImgY src="/static/img/todfire.png"/>
              </div>
            </Sec>
            <Sec id="Bottom" other className="row">
              <div className="col-5">
                <ImgL src="/static/img/hanufire.png"/>
              </div>
              <div className="col-7 d-flex align-items-center justify-content-center">
                <SelectorL/>
                <BoxL className="rounded"><Text>ขอบใจเจ้ามากเลย ข้าลุ้นจะแย่อยู่แล้วว่าใครกันที่จะมาเข้าร่วมกองทัพกับเราในครั้งนี้</Text></BoxL>
              </div>
            </Sec>
          </Div>
        </div>
      </div>
    )
  }
}