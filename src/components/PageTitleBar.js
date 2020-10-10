import React, { useState, useEffect } from 'react';
import '../App.css';

function PageTitleBar(props) {

  const [pageTitle, setPageTitle] = useState('Unknown');

  useEffect(() => {
    if (props.curPage === 0) setPageTitle('Title 1');
    else if (props.curPage === 1) setPageTitle('Title 2');
    else if (props.curPage === 2) setPageTitle('Title 3');
    else if (props.curPage === 3) setPageTitle('Title 4');
    else setPageTitle('Error');
  },[props.curPage])

  return (
    <div className = 'pageTitleBar'>
      <div className = 'titleContainer'>
        {pageTitle}
      </div>
    </div>
  )
}

export default PageTitleBar;