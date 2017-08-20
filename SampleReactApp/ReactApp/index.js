import React from 'react';
import ReactDOM from 'react-dom';

import HelloWorld from './components/HelloWorld';
import getSampleList from './api/getSampleList';

ReactDOM.render(
    <div>
        <HelloWorld sampleListAPI={getSampleList} maxItems={10} displayAs={"table"} />
        <br />
        <HelloWorld sampleListAPI={getSampleList} maxItems={20} displayAs={"list"} />
    </div>
, document.getElementById('app'));