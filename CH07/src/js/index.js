var React = require('react');
var ReactDom = require('react-dom');
import ComponentHeader from './components/header'
class Index extends React.Component {
  render() {
    return (
      <div>
      <ComponentHeader />
      <h2>我是页面的内容</h2>
      </div>
    )
  }
}

ReactDom.render(<Index />, document.getElementById('example'));


// ReactDom.render(
//   <h1>Hello world</h1>,
//   document.getElementById('example')
// );