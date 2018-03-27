import React from 'react';
import styled from 'styled-components';
import Bg from '../custom/Bg';

export default class Custom extends React.Component {
  state = {}
  render() {
    return (
      <Bg className="container-fulid">
        <div className="row">
        <div className="col-12">
          <img src="/static/img/hanufire1.png"  className="rounded mx-auto d-block"/>
       </div>
       </div>
      </Bg>
    )
  }
}