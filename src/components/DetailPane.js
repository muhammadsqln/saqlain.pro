import React from 'react';
import '../App.css';

function DetailPane(props) {

  const decrementPage = () => {
    props.setCurPage(props.curPage-1);
  }

  const incrementPage = () => {
    props.setCurPage(props.curPage+1);
  }

  return (
    <div className = 'detailPane'>
      <p>Current Page: {props.curPage+1}</p>
      <button onClick={decrementPage}>Prev Page</button>
      <button onClick={incrementPage}>Next Page</button>
    </div>
  )
}

export default DetailPane;