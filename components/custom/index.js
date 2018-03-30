import React from 'react'
import styled from 'styled-components'

const Sec = styled.div`
  height: 250px;
  width: 900px;
  background-color: white;
  overflow : hidden;
  @media (min-width: 320px) {
    width: 350px;
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

const ImgY = styled.img`
  width: 100%;
  margin-top: -30vh;
  @media (max-width: 720px) {
    margin-top: -50%;
  }
`

const Box = styled.div`
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
  // width: 50vw;
  // height: vh;
  width: 100%;
  height: 100%;
`

export default class Custom extends React.Component {
  state = {}
  render() {
    return (
      <div className="container d-flex justify-content-center">
        <div className="row d-flex justify-content-center">
          <Div>
            <Sec className="row mt-5 rounded-top">
              <div className="col-7 d-flex align-items-center justify-content-center">
                <Box className="rounded"></Box>
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
                <Box className="rounded"></Box>
              </div>
            </Sec>
            <Sec className="row rounded-top">
              <div className="col-7 d-flex align-items-center justify-content-center">
                <Box className="rounded"></Box>
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
                <Box className="rounded"></Box>
              </div>
            </Sec>
            <Sec className="row rounded-top">
              <div className="col-7 d-flex align-items-center justify-content-center">
                <Box className="rounded"></Box>
              </div>
              <div className="col-5">
                <ImgY src="/static/img/todfire.png"/>
              </div>
            </Sec>
            <Sec other className="row rounded-bottom">
              <div className="col-5">
                <ImgL src="/static/img/hanufire.png"/>
              </div>
              <div className="col-7 d-flex align-items-center justify-content-center">
                <Box className="rounded"></Box>
              </div>
            </Sec>
          </Div>
        </div>
      </div>
    )
  }
}