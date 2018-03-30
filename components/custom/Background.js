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
`
const BgLeft = styled.img`
    position: absolute;
    height: 100vh;
    z-index:1;
    bottom:0;
    left:-1vw;
`
const BgRight = styled.img `
    position: absolute;
    height: 100vh;
    z-index:1;
    bottom:0;
    right:-1vw;
`
const Background = () => (
    <Bg>
        <BgLeft src="../../static/img/Bgleft.png"/>
        <BgRight src="../../static/img/BgRight.png"/>
        <BgBottom src="../../static/img/open.png"/> 
        
    </Bg>
)   

export default Background ;