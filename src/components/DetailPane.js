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
    console.log(pageRef.current);
    const targetY = pageRef.current.offsetHeight * props.curPage;
    pageRef.current.scrollTo(0, targetY);
  }, [props.curPage])

  const scrollHandler = (e) => {
    //change curPage when scrolling
    // const currentY = pageRef.current.scrollTop;
    // const maxY = pageRef.current.scrollTopMax + pageRef.current.offsetHeight;
    // const currentPage = parseInt((currentY/maxY)*numOfPages, 10);
    let currentPage = props.curPage;
    if (e.deltaY < 0 && props.curPage > 0) {
      console.log('scrolling up');
      currentPage--;
    }
    if (e.deltaY > 0 && props.curPage < numOfPages-1) {
      console.log('scrolling down');
      currentPage++;
    }
    props.setCurPage(currentPage);
  }

  return (
    <div className = 'pageContainer' onWheel={(e) => scrollHandler(e)} ref={pageRef} id='pageContainer'>
      <Page1 />
      <Page2 />
      <Page3 />
      <Page4 />
    </div>
  )
}

export default DetailPane;