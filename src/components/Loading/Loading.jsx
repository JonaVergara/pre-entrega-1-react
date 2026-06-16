import React from 'react'
import { BounceLoader } from 'react-spinners'
import "./loading.css" 


const Loading = () => {
  return (
    <div className='loading'>    
    <BounceLoader color="#CBFF01" size = {100} />
    </div>
  )
}

export default Loading