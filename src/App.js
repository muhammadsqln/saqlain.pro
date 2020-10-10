import React, { useState } from 'react';
import './App.css';
import CoverIndex from './components/CoverIndex.js';
import DetailPane from './components/DetailPane.js';
import PageTitleBar from './components/PageTitleBar.js';

function App() {

  const [numPages, setNumPages] = useState(1);
  const [curPage, setCurPage] = useState(0);

  return (
    <div className="App">
      <CoverIndex numPages={numPages} curPage={curPage} setCurPage={setCurPage}/>
      <div className='appPage'>
        <PageTitleBar curPage={curPage} />
        <DetailPane setNumPages={setNumPages} setCurPage={setCurPage} curPage={curPage}/>
      </div>
      
    </div>
  )
}

export default App;