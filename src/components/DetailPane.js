import React, { useState, useEffect, useRef } from 'react';
import '../App.css';
import Page1 from './pages/Page1.js';
import Page2 from './pages/Page2.js';
import Page3 from './pages/Page3.js';
import Page4 from './pages/Page4.js';
const numOfPages = 4;

function DetailPane(props) {

  const pageRef = useRef();
  const [currentY, setCurrentY] = useState(0);
  const [maxY, setMaxY] = useState(1);

  useEffect(() => {
    //set number of pages
    props.setNumPages(numOfPages);
    // eslint-disable-next-line
  }, [])

  useEffect(() => {
    //change curPage when scrolling happens
    let currentPage = parseInt((currentY/maxY)*numOfPages-0.01, 10);
    console.log('switching to currentPage: ' + currentPage);
    props.setCurPage(currentPage);
    // eslint-disable-next-line
  }, [currentY])

  useEffect(() => {
    //scroll when curPage changes
  }, [props.curPage])

  const scrollHandler = (e) => {
    setCurrentY(pageRef.current.scrollTop);
    setMaxY(pageRef.current.scrollTopMax);
    console.log(pageRef.current);
  }

  return (
    <div className = 'pageContainer' onScroll={scrollHandler} ref={pageRef} id='root'>
      <Page1 currentY={currentY} maxY={maxY} />
      <Page2 currentY={currentY} maxY={maxY} />
      <Page3 currentY={currentY} maxY={maxY} />
      <Page4 currentY={currentY} maxY={maxY} />
    </div>
  )
}

export default DetailPane;