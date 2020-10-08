import React, { useState } from 'react';
import './App.css';
import CoverIndex from './components/CoverIndex.js';
import DetailPane from './components/DetailPane.js';

function App() {

  const [numPages, setNumPages] = useState(5);
  const [curPage, setCurPage] = useState(1);

  const changeNumPages = (pageNum) => {
    setNumPages(pageNum);
  }

  const changeCurPage = (currentPage) => {
    setCurPage(currentPage);
  }

  return (
    <div id="App">
      <CoverIndex numPages={numPages} curPage={curPage} />
      <DetailPane changeNumPage={changeNumPages} changeCurPage={changeCurPage} curPage={curPage}/>
    </div>
  )
}

export default App;