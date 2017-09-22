var React = require('react');
var ReactDOM = require('react-dom');
import ComponentHeader from './components/header'
import ComponentFooter from './components/footer'
import BodyIndex from './components/bodyIndex'
class Index extends React.Component {
  // 生命周期函数
  componentWillMount() {
    // 第一次加载组件函数
    console.log('Index - componentWillMount');
  }

  componentDidMount() {
    // 组件加载完
    console.log('Index - componentDidMount');
  }
  render() {
    var Header = <ComponentHeader />;
    return (
      <div>
        {Header}
        <BodyIndex />
        <ComponentFooter />
      </div>
    )
  }
}

ReactDOM.render(<Index />, document.getElementById('example'));