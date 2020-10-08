import React, { useEffect } from 'react';
import '../App.css';

function CoverIndex(props) {

  let navIndex = [];

  useEffect(() => {
    for (let i=0; i<props.numPages; i++) {
      if (i === props.curPage) {
        navIndex[i] = <li className = 'clicked'>o</li>
      }
      else navIndex[i] = <li>o</li>
    }
  },[navIndex, props])

  return (
    <div className = 'cover'>
      <div className = 'coverText'>
        <h1>Muhammad Saqlain</h1>
        <h2>Toronto, Canada</h2>
        <h2>(647) 786-6803</h2>
      </div>
      <div className = 'navArea'>
        <ul>
          {navIndex.map(eachNav => (
            eachNav
          ))}
        </ul>
      </div>
    </div>
  )
}



export default CoverIndex;