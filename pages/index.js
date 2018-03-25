import React from 'react'

import Custom from '../components/custom/index'
import Introduce from '../components/custom/introduce'
import Previous from '../components/custom/previous'


export default class Index extends React.Component {
  render() {
    return (
      <div>
        <Introduce/>
        <Previous/>
        <Custom />  
      </div>
    )
  }
}
