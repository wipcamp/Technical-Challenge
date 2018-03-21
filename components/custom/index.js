import React from 'react'
import styled from 'styled-components'

const Card = styled.figure`
    ${console.log(props => props.deg)}
    transform: rotateY( ${props => props.deg} deg ) translateZ( 288px );
`

export default class Custom extends React.Component {
    state = {
        number: 1,
        deg: [0, 40, 80, 120, 160, 200, 240, 280, 320]
    }
    
    random = () => {
        let rand = Math.floor(Math.random() * 10)
        
        console.log(this.state.number)
        setInterval( () => {
            this.setState({
                number:  Math.floor(Math.random() * 10)
            })
        } , 1000)
    }

    render() {
        return (
            <div>
                <button onClick={this.random}>Random</button>
                {this.state.number}
                <div className="position">
                    <section className="container">
                        <div id="carousel">
                            {
                                this.state.deg.map(
                                    (data, i ) => <Card deg={this.state.deg[this.state.number]} key={i} id={i}>
                                    
                                    {
                                        // i % 2 == 0 ? 'ติด' : ' ไม่ติด'
                                        i
                                    }</Card>
                                )
                            }
                        </div>
                    </section>
                </div>
                
            </div>

        )
    }

}