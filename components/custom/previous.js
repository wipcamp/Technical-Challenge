import React from 'react';
import styled from 'styled-components';
import Bg from '../custom/Bg';

const H1 = styled.h1`
    text-align: center;
    color:white;
`
const P = styled.p`
    color:white;
`

const Bg1 = Bg.extend`
  height:130vh;
  color:white;
  background-color: #171611;
  overflow: hidden;
`
const BgLeft = styled.img`
    position : absolute;
    z-index:1;
    height: 130vh;
    left: -1vw;
    bottom : -230vh;
`
const BgRight = styled.img`
  position : absolute;
  z-index:1;
  height: 130vh;
  right: 0vw;
  bottom : -230vh;
`
const BgCenter = styled.img`
  position : absolute;
  z-index: 2;
  width : 100%;
  left : 0%;
  bottom: -230vh;
`
const Table = styled.div`
    z-index: 3;
    width: 60vw;
    margin-left: 20vw;
`
const Name = [
  { id: 0, name: "wip1", lastname: "t",confirm:"ยืนยันสิทธ์"},
  { id: 1, name: "wip2", lastname: "t",confirm:"ยืนยันสิทธ์"},
  { id: 2, name: "wip3", lastname: "tt",confirm:"ยืนยันสิทธ์"},
  { id: 4, name: "wip4", lastname: "tk",confirm:"ยืนยันสิทธ์"},
  { id: 5, name: "wip5", lastname: "tark",confirm:"ยืนยันสิทธ์"},
  { id: 6, name: "wip6", lastname: "dark",confirm:"ยืนยันสิทธ์"},
  { id: 7, name: "wip7", lastname: "tadark",confirm:"ยืนยันสิทธ์"},
  { id: 8, name: "wip8", lastname: "t",confirm:"ยืนยันสิทธ์"},
  { id: 9, name: "wip9", lastname: "t",confirm:"ยืนยันสิทธ์"},
  { id: 10,name: "wip10", lastname: "tt",confirm:"ยืนยันสิทธ์"},
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
      <Bg1 className="container-fulid">
        <BgLeft src='/static/img/Bgleft.png'/>
        <BgRight src='/static/img/BgRight.png'/>
        <BgCenter src='/static/img/BgCenter.png'/>
        <Table className="row">
          <div className="col"></div>
          <div className="col-8">
            <H1>เอาหล่ะ ... มาลุ้นกัน !!!</H1>
            <table className="table table-hover thead-light">
            {
              Name.map((data,i)=>
              <tbody>
                <tr>
                    <th scope="col"><a href='https://itim.wip.camp' target="_blank">{data.confirm}</a></th>
                    <td>{data.name}</td>
                    <td>{data.lastname}</td>
                </tr>
              </tbody>
              )
            }
            </table>
                    {/* <table className="table table-hover table-dark">
                <tbody>
                  <tr>
                    <th scope="col">ยืนยันสิทธิ์</th>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                  </tr>
                </tbody>
              </table> */}
                    </div>
            <div className="col"></div>
          </Table>
            </Bg1>

            
        )
    }
}
