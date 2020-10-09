import React from 'react';
import '../App.css';

function DetailPane(props) {

  return (
    <div className = 'detailPane'>
      <p>Current Page: {props.curPage+1}</p>
    </div>
  )
}

export default DetailPane;