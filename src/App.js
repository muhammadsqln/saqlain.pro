import React from 'react';
import './App.css';


function Cover() {
    return <div id="cover">

        <h1 class="cover-text">Muhammad Saqlain</h1>
        <h2 class="cover-text">Toronto, Canada</h2>
        <h2 class="cover-text">(647) 786-6803</h2>
    </div>

}



function Navigator(count) {
    return <div id="navigator">
        <Dot selected={false} />
        <Dot selected={true} />
        <Dot selected={false} />
        <Dot selected={false} />
        <Dot selected={false} />
    </div>
}

function Dot(props) {

    const className = props.selected === true ? "dot selected" : "dot";

    return <div className={className}>

    </div>

}


function DetailPane() {
    return <div id="detail-pane">

<DetailTitle title="Experience" />



    </div>
}

function DetailTitle(props) {

    return <div id="title-header">
        <div id="detail-title">
            {props.title}
        </div>
    </div>

}




function App() {
    return <div id="home">
        <Cover />
        <Navigator />
        <DetailPane />






    </div>;
}

export default App;