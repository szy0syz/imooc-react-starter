var React = require('react');
var ReactDOM = require('react-dom');
import ComponentHeader from './components/header'
import ComponentFooter from './components/footer'
import BodyIndex from './components/bodyIndex'
class Index extends React.Component {
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