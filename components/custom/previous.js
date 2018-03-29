import React from 'react';
import styled from 'styled-components';
import Bg from '../custom/Bg';
import Background from '../custom/Background'

const H1 = styled.h1`
    text-align: center;
    color:#fff;
`
const P = styled.p`
    color:#fff;
`

const Bg2 = styled.div`
  background-color: #171611;
  position: relative;
  z-index: 1;
  overflow: hidden;
  height:150vh;
`
const BgLeft = styled.img`

`
const Div = styled.div`
  position: relative;
  z-index: 3;
`

const Link = styled.a`
    color:white;
    &:hover{
      color:#0f0;
      text-decoration-line: none
    }
`

const Name = [
  { id: 0, name: "wip1", lastname: "t", confirm: "ยืนยันสิทธ์" },
  { id: 1, name: "wip2", lastname: "t", confirm: "ยืนยันสิทธ์" },
  { id: 2, name: "wip3", lastname: "tt", confirm: "ยืนยันสิทธ์" },
  { id: 4, name: "wip4", lastname: "tk", confirm: "ยืนยันสิทธ์" },
  { id: 5, name: "wip5", lastname: "tark", confirm: "ยืนยันสิทธ์" },
  { id: 6, name: "wip6", lastname: "dark", confirm: "ยืนยันสิทธ์" },
  { id: 7, name: "wip7", lastname: "tadark", confirm: "ยืนยันสิทธ์" },
  { id: 8, name: "wip8", lastname: "t", confirm: "ยืนยันสิทธ์" },
  { id: 9, name: "wip9", lastname: "t", confirm: "ยืนยันสิทธ์" },
  { id: 10, name: "wip10", lastname: "tt", confirm: "ยืนยันสิทธ์" },
  // { id: 11, name: "wip11", lastname: "tk",confirm:"ยืนยันสิทธ์"},
  // { id: 12, name: "wip12", lastname: "tark",confirm:"ยืนยันสิทธ์"},
  // { id: 13, name: "wip13", lastname: "dark",confirm:"ยืนยันสิทธ์"},
  // { id: 14, name: "wip14", lastname: "tadark",confirm:"ยืนยันสิทธ์"},
  // { id: 15, name: "wip15", lastname: "t",confirm:"ยืนยันสิทธ์"},
  // { id: 16, name: "wip16", lastname: "t",confirm:"ยืนยันสิทธ์"},
  // { id: 17, name: "wip17", lastname: "tt",confirm:"ยืนยันสิทธ์"},
  // { id: 18, name: "wip18", lastname: "tk",confirm:"ยืนยันสิทธ์"},
  // { id: 19, name: "wip19", lastname: "tark",confirm:"ยืนยันสิทธ์"},
  // { id: 20, name: "wip20", lastname: "dark",confirm:"ยืนยันสิทธ์"},
]

export default class Previous extends React.Component {
  state = {}
  render() {
    return (
      <Bg2 className="container-fulid">
        <Background/>
        <Div className="row d-flex justify-content-center">
          <div className="col"></div>
          <div className="col-8 ">  
            <H1>เอาหล่ะ ... มาลุ้นกัน</H1>
            <table className="table table-hover thead-light">
               {
                 Name.map((data, i) =>
                   <tbody>
                     <tr>
                       <th scope="col"><Link href='https://itim.wip.camp' target="_blank">{data.confirm}</Link></th>
                       <td><P>{data.name}</P></td>
                       <td><P>{data.lastname}</P></td>
                     </tr>
                   </tbody>
                 )
               } 
           </table>
          </div>  
          <div className="col"></div>
        </Div>
      </Bg2>
    )
  }
}
