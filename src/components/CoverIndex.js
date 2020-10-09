import React, { useEffect } from 'react';
import '../App.css';

function CoverIndex(props) {

  let navIndex = [];
  let navIndex2 = [
    <button></button>,
    <button></button>,
    <button></button>
  ]

  useEffect(() => {
    for (let i=0; i<props.numPages; i++) {
      if (i === props.curPage) {
        navIndex[i] = <button></button>
      }
      else navIndex[i] = <button></button>
    }
  },[navIndex, props])

  return (
    <div className = 'cover'>
      <div className = 'coverText'>
        <h1>Muhammad Saqlain</h1>
        <h2>Toronto, Canada</h2>
        <h2>(647) 786-6803</h2>
        <p>Size of index: {navIndex.length}</p>
      </div>
      <div className = 'navArea'>
        {navIndex2.map(eachNav => (
          eachNav
        ))}
      </div>
    </div>
  )
}



export default CoverIndex;