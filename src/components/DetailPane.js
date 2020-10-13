import React, { useEffect, useRef } from 'react';
import '../App.css';
import Page1 from './pages/Page1.js';
import Page2 from './pages/Page2.js';
import Page3 from './pages/Page3.js';
import Page4 from './pages/Page4.js';
const numOfPages = 4;

function DetailPane(props) {

  const pageRef = useRef();

  useEffect(() => {
    //set number of pages
    props.setNumPages(numOfPages);
    // eslint-disable-next-line
  }, [])

  useEffect(() => {
    //scroll when curPage changes
    const targetY = pageRef.current.offsetHeight * props.curPage;
    pageRef.current.scrollTo(0, targetY);
  }, [props.curPage])

  const scrollHandler = (e) => {
    //change curPage when scrolling
    let currentPage = props.curPage;
    if (e.deltaY < 0 && props.curPage > 0) {
      currentPage--;
      console.log('Intent: scrolling up to page ' + (currentPage+1));
    }
    if (e.deltaY > 0 && props.curPage < numOfPages-1) {
      currentPage++;
      console.log('Intent: scrolling down to page ' + (currentPage+1));
    }
    props.setCurPage(currentPage);
  }

  return (
    <div className = 'pageContainer' onWheel={(e) => scrollHandler(e)} ref={pageRef} id='pageContainer'>
      {console.log('Scrolling to ' + (props.curPage+1))}
      <Page1 />
      <Page2 />
      <Page3 />
      <Page4 />
    </div>
  )
}

export default DetailPane;