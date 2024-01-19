import React from 'react'
import { useParams } from 'react-router-dom'

const Nextpage = () => {
  const {text} = useParams();

  return (
    <div>
      <h2>Text from previous page</h2>
      <h3>{text}</h3>
    </div>
  )
}

export default Nextpage
