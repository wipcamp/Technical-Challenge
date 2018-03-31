import react from 'react'
import styled from 'styled-components'
import { wip } from '../../wip.json'

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
font-size:2vw;
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
export default class CheckName extends React.Component {
    state = {
        user:'',
        loading:true
    }
    componentDidMount = () => {
      this.setState({
        user: 'จิว',
        loading: false
      })
    }

      render () {
        if (this.state.loading) {
          return <div>
            loading .. .
            </div>
        }
        if (wip.indexOf(this.state.user) > -1) {
          return <div>
            <H>ยินดีด้วย</H> 
          <P>คุณได้เข้าร่วมกองทัพกับเรา</P> 
          <div className="d-flex justify-content-center">
          <a href="http://wip.camp">
          <Button type="button" className="btn btn-outline-success text-center">ยืนยันสิทธิ์</Button> 
          </a>
          </div>
          </div>
        }
        return  (
          <div>
          <H>เสียใจด้วยนะ</H> 
          <P>ครั้งหน้าลองใหม่ ...</P> 
          {/* <a href="http://wip.camp">
          <Button type="button" className="btn btn-outline-warning text-center">กลับกน้าหลัก</Button>
          </a> */}
          </div>
        )
    }
}
