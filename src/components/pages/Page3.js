import React from 'react';
import './Pages.css';

function Page3(props) {


  return (
    <div className = 'page' style={{backgroundColor:'#bbbbbb'}}>
      <p>Page: 3</p>
      <p>Current Y: {props.currentY}/{props.maxY}</p>
    </div>
  )
}

export default Page3;