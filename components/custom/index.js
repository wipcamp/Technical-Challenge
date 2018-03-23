import React from 'react'
import styled from 'styled-components'

const Box = styled.div`
    border: 2px solid #000;
`

export default class Custom extends React.Component {
      state = {
        text:"",
        todo:[]
      }
    
  handleFullNameChange = (e) => {
    this.setState({
      text: e.target.value
    })
  }

  changeToToDo = (e) => {
    this.state.todo.push(this.state.text)
    this.setState({
      text : ""
    })
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
            {/* {this.state.} */}
          </div>
        </Box>
    <div>
      {this.state.todo.map((data,i)=>(
        <div key={i}>
            <h1 dangerouslySetInnerHTML={{__html: data}}/>
        </div>
      ))}    
    </div>
  </div>
    )
  }
}