import React from 'react';
import './Pages.css';

function Page2(props) {


  return (
    <div className = 'page' style={{backgroundColor:'#cccccc'}}>
      <p>Page: 2</p>
      <p>Current Y: {props.currentY}/{props.maxY}</p>
    </div>
  )
}

export default Page2;