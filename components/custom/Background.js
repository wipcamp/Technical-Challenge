import react from 'react'
import styled from 'styled-components'

const BgLeft = styled.img`
    position: absolute;
    z-index: 1;
    bottom: 0;
    left: -1vw;
    height: 50vh;
    @media(min-width: 576px){
        height: 80vh;
    }
    @media(min-width: 1024px){
        height: 100vh;
    }
`
const BgRight = styled.img`
    position: absolute;
    z-index: 1;
    bottom: 0;
    right: -1vw;
    height: 50vh;
    @media(min-width: 576px){
        height: 80vh;
    }
    @media(min-width: 1024px){
        height: 100vh;
    }
`
const BgCenter = styled.img`
    position: absolute;
    z-index: 1;
    bottom: 0;    
    width: 100vw;
    left: 0;
`
const Bg = styled.div`
    overflow: hidden;
`
const Background = () => (
    <Bg>
        <BgLeft src='/static/img/Bgleft.png'/>
        <BgRight src='/static/img/BgRight.png'/>
        <BgCenter src='/static/img/open.png'/>
    </Bg>
)
export default Background