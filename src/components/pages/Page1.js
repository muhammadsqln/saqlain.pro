import React from 'react';
import './Pages.css';

function Page1(props) {


  return (
    <div className = 'page' style={{backgroundColor:'#dddddd'}}>
      <p>Page: 1</p>
      <p>Current Y: {props.currentY}/{props.maxY}</p>
    </div>
  )
}

export default Page1;