import React from 'react'
import styled from 'styled-components'

const Box = styled.div`
    border: 2px solid #000;

`

export default class Custom extends React.Component {
      state = {
        text:[]
      }
    
  handleFullNameChange = (e) => {
    this.setState({
      text: e.target.value
    })
  }

  changeToToDo = (e) => {
    this.state.handleFullNameChange
  }


  render() {
    return (
      <div>
          Input
          <input type="text" value={this.state.text} onChange={this.handleFullNameChange}/>
          <button type="submit" value="Submit" onClick={this.changeToToDo}>submit</button>
        <Box>
          {console.log(this.changeToToDo)}
        {console.log(this.state.text)}
          <div>
            {this.state.text}
          </div>
        </Box>
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