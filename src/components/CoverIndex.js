import React, { useLayoutEffect } from 'react';
import '../App.css';

function CoverIndex(props) {

  let navIndex = [];
  let navIndex2 = [
    <button id='0' onClick={(e) => switchPage(e.target.id)}></button>,
    <button id='1' onClick={(e) => switchPage(e.target.id)} className = 'current'></button>,
    <button id='2' onClick={(e) => switchPage(e.target.id)}></button>
  ]

  const switchPage = (id) => {
    props.setCurPage(id);
    console.log('pressed button: ' + id);
  }

  useLayoutEffect(() => {
    for (let i=0; i<props.numPages; i++) {
      if (i === props.curPage) {
        navIndex[i] = <button className='current' key={i}></button>;
      }
      else {
        navIndex[i] = <button key={i}></button>;
      }
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
        {navIndex2.map(eachIndex => (
          eachIndex
        ))}
      </div>
      {console.log(navIndex)}
    </div>
  )
}



export default CoverIndex;