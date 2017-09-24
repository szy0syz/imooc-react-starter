import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';

import PCIndex from './components/pc_index';

// import {
//   BrowserRouter as Router,
//   Route,
//   Link
// } from 'react-router-dom'

export default class Root extends React.Component {
  render() {
    return (
      <div>
        <PCIndex></PCIndex>
      </div>
    );
  };
}

ReactDOM.render(<Root />, document.getElementById('miainContainer'));