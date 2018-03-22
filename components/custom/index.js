import React from 'react'
import styled from 'styled-components'

const Box = styled.div`
    border: 2px solid #000;

`

export default class Custom extends React.Component {
    constructor() {
        super();
        this.state = {
          fullName:""
        }
      }
      handleFullNameChange = (e) => {
        this.setState({
          fullName: e.target.value
        })
      }
      handleSubmit = (e) => {
        e.preventDefault();
      }

    render() {
        return (
            <div>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="fullName">Full Name</label>
            <input
              type="text"
              value={this.state.fullName}
              onChange={this.handleFullNameChange}
              name="fullName" />
          <input type="submit" value="Submit" />
          
        </form>
        {console.log(this.state.fullName)}
        <div>
            {this.state.fullName}
        </div>
        {/* <div>{fullName.map((data,i)=>(
            <div key={i}>
                <h1 dangerouslySetInnerHTML={{__html: data.q}}/>
            </div>
            
         ))}
        
        </div> */}
      </div>
        )
    }
}