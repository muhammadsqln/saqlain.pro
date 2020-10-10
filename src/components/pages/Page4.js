import React from 'react';
import './Pages.css';

function Page1(props) {


  return (
    <div className = 'page' style={{backgroundColor:'#aaaaaa'}}>
      <p>Page: 4</p>
      <p>Current Y: {props.currentY}/{props.maxY}</p>
    </div>
  )
}

export default Page1;