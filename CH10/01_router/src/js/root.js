import React from 'react';
import ReactDOM from 'react-dom';
import Index from './index';
import ComponentList from './components/list';
import ComponentDetails from './components/details';
// 这尼玛才几个月时间，完全就跟新一套新的api，也是醉了。
//import { browserHistory, Router, Route, IndexRoute, hashHistory } from 'react-router';

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

// export default class Root extends React.Component {
//   render() {
//     return (
//       // 这里替换了之前的 Index, 变成了程序的入口
//       <Router history={browserHistory}>
//         <Route path='/' component={Index}>
//           <IndexRoute component={Index} />
//           <Route path='list' component={ComponentList} />
//         </Route>
//       </Router>
//     );
//   };
// }

export default class Root extends React.Component {
  render() {
    return (
      //这里替换了之前的 Index，变成了程序的入口
      <Router>
        <div>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/list">list</Link></li>
            <li><Link to="/details">details</Link></li>
          </ul>

          <hr />

          <Route exact path="/" component={Index} />
          <Route path="/list" component={ComponentList} />
          <Route path="/details" component={ComponentDetails} />
        </div>
      </Router>
    );
  };
}

ReactDOM.render(<Root />, document.getElementById('example'));