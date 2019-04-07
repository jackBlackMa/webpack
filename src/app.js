import './main.scss';

import React from 'react';
import ReactDOM from 'react-dom';
import Root from './component/Root';
import Event from './component/绑定原生事件';
import Event2 from './component/阻止事件冒泡';
import Select from './component/Select';

ReactDOM.render(
    <Select/>,
    document.getElementById('app')
);