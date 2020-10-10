import React, { useState, useEffect , useRef} from 'react';
import '../App.css';

function DetailPane(props) {

  const [scrollDir, setScrollDir] = useState('none');
  const pageRef = useRef();

  useEffect(() => {
    props.setNumPages(5);
    // eslint-disable-next-line
  }, [])

  useEffect(() => {
    //scroll page when curPage changes
    document.getElementsByClassName('detailPane').scrollTop = 0;
  }, [props.curPage])

  const scrollHandler = (e) => {

    setScrollDir(e.deltaY);
    const timeoutFunc = (e) => setTimeout(changeCurrentPage(e), 200)
    timeoutFunc(e);
    
  }

  const changeCurrentPage = (e) => {
    if (e.deltaY < 0 && props.curPage > 0) {
      //scroll up
      console.log('scroll up');
      props.setCurPage(props.curPage-1);
    }
    else if (e.deltaY > 0 && props.curPage < 4) {
      //scroll down
      console.log('scroll down');
      props.setCurPage(props.curPage+1);
    }
    else setScrollDir('none');
  }

  return (
    <div className = 'detailPane' onWheel={(e) => scrollHandler(e)} ref={pageRef} id='root'>
      <div className = 'page' style={{backgroundColor:'#dddddd'}}>
        Page: 1
        <p>Scroll direction: {scrollDir}</p>
      </div>
      <div className = 'page' style={{backgroundColor:'#cccccc'}}>
        Page: 2
        <p>Scroll direction: {scrollDir}</p>
      </div>
      <div className = 'page' style={{backgroundColor:'#bbbbbb'}}>
        Page: 3
        <p>Scroll direction: {scrollDir}</p>
      </div>
      <div className = 'page' style={{backgroundColor:'#aaaaaa'}}>
        Page: 4
        <p>Scroll direction: {scrollDir}</p>
      </div>
      <div className = 'page' style={{backgroundColor:'#999999'}}>
        Page: 5
        <p>Scroll direction: {scrollDir}</p>
      </div>
    </div>
  )
}

export default DetailPane;