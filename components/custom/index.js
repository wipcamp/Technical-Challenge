import React from 'react'
import styled from 'styled-components'

const Sec = styled.div`
  height: 250px;
  width: 900px;
  background-color: none;
  overflow : hidden;
  border: 10px solid black;
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
  padding-left: 10%;
  padding-top: 2%;
  font-size: 1.5em;
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
  width: 100%;
  height: 50%;
  background-color: #5D985C;
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
  width: 100%;
  height: 50%;
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
                <BoxY className="rounded"><Text>สวัสดีค่ะ</Text></BoxY>
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
                <BoxL className="rounded"></BoxL>
              </div>
            </Sec>
            <Sec className="row">
              <div className="col-7 d-flex align-items-center justify-content-center">
                <BoxY className="rounded"></BoxY>
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
                <BoxL className="rounded"></BoxL>
              </div>
            </Sec>
            <Sec className="row">
              <div className="col-7 d-flex align-items-center justify-content-center">
                <BoxY className="rounded"></BoxY>
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
                <BoxL className="rounded"></BoxL>
              </div>
            </Sec>
          </Div>
        </div>
      </div>
    )
  }
}