import React from 'react'
import styled from 'styled-components'

const Sec = styled.div`
  height: 250px;
  width: 900px;
  background-color: none;
  overflow : hidden;
  @media (min-width: 320px) {
    width: 300px;
    height: 100px;
  }
  @media (min-width: 720px) {
    width: 600px;
    height: 200px;
  }
  @media (min-width: 1024px) {
    width: 900px;
    height: 250px;
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
  width: 100%;
  margin-top: -22vh;
  @media (max-width: 720px) {
    margin-top: -40%;
  }
  @media (min-width: 1024px) {
    margin-top: -50%;
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
  width: 100%;
  float: left;
  margin-top: -15%;
  margin-left: %;
` 
const Div = styled.div`
  width: 100%;
  height: 100%;
  background-color: #ffffcc;
  padding : 10px;
  margin-top: 20px;
  
`

export default class Custom extends React.Component {
  state = {}
  render() {
    return (
      <div className="container d-flex justify-content-center">
        <div className="row d-flex justify-content-center">
          <Div className="rounded">
            <Sec className="row">
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
            <Sec other className="row">
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