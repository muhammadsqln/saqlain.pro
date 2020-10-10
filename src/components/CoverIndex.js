import React, { useState, useEffect } from 'react';
import '../App.css';

function CoverIndex(props) {

  const [navIndex, setNavIndex] = useState([]);

  useEffect(() => {
    let dummyNavIndex = [];
    for (let i=0; i<props.numPages; i++) {
      if (i === props.curPage) {
        dummyNavIndex[i] = <button onClick={() => switchPage(i)} className='current'></button>;
      }
      else {
        dummyNavIndex[i] = <button onClick={() => switchPage(i)}></button>;
      }
    }
    setNavIndex(dummyNavIndex);
    // eslint-disable-next-line
  },[props])

  const switchPage = (id) => {
    const idInt = parseInt(id);
    props.setCurPage(idInt);
    // can trigger the animation?
  }

  return (
    <div className = 'cover'>
      <div className = 'coverText'>
        <h1>Muhammad Saqlain</h1>
        <h2>Toronto, Canada</h2>
        <h2>(647) 786-6803</h2>
      </div>
      <div className = 'navArea'>
        {navIndex.map(eachIndex => (
          eachIndex
        ))}
      </div>
    </div>
  )
}

export default CoverIndex;