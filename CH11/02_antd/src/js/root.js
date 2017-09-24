import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import { Button } from 'antd';

// import {
//   BrowserRouter as Router,
//   Route,
//   Link
// } from 'react-router-dom'

export default class Root extends React.Component {
  render() {
    return (
      <div>
        <Button type="primary">Primary</Button>
        <Button>Default</Button>
        <Button type="dashed">Dashed</Button>
        <Button type="danger">Danger</Button>
      </div>
    );
  };
}

ReactDOM.render(<Root />, document.getElementById('miainContainer'));