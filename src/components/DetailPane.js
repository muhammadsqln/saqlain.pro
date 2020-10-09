import React, { useState } from 'react';
import '../App.css';

function DetailPane(props) {

  const [scrollDir, setScrollDir] = useState('none');

  const scrollHandler = (e) => {

    setScrollDir(e.deltaY);
    console.log('Y: ' + e.deltaY);

    setTimeout(() => {
      if (e.deltaY < 0) {
        //scroll up
        console.log('scroll up');
        props.curPage = props.setCurPage(props.curPage-1);
      }
      else if (e.deltaY > 0) {
        //scroll down
        console.log('scroll down');
        props.curPage = props.setCurPage(props.curPage+1);
      }
      else setScrollDir('none');
    }, 500)
  }

  return (
    <div className = 'detailPane' onWheel={(e) => scrollHandler(e)}>
      <div className = 'page' style={{backgroundColor:'#dddddd'}}>
        <div>
        Page: 1
        <p>Scroll direction: {scrollDir}</p>
        </div>
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