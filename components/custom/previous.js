import React from 'react';
import styled from 'styled-components';
import Bg from '../custom/Bg';


// const Img = styled.img`
//   width: 30%;
//   margin-top: 5%;
//   margin-left:17%;
//   position: absolute;
//   left: 0;
// `

export default class Previous extends React.Component {
    state = {}
    render() {
        return (
            <Bg className="container-fulid">
                <div className="row">
                    <div className="col-12">
                        {/* <Img src="/static/img/todfire1.png" className="" /> */}
                    </div>
                </div>
            </Bg>
        )
    }
}
