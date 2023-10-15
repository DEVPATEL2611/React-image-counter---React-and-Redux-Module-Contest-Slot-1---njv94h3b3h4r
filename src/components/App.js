import React, { useState } from 'react'
import '../styles/App.css';
import star from '../star.png'
const App = () => {
  const [height,setHeight] = useState(300);
  const [wigdht,setWidht] = useState(300);
  const imageResize = ()=>{
    setHeight(height+2);
    setWidht(wigdht+2);
  }
  return (
    <div id="main">
      <img src={star}  height={height+"px"} width={wigdht+"px"} onClick={imageResize} />
    </div>
  )
}


export default App;
