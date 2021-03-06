var React = require('react');
var ReactDOM = require('react-dom');
import ComponentHeader from './components/header'
import ComponentFooter from './components/footer'
import BodyIndex from './components/bodyIndex'

export default class Index extends React.Component { //
  render() {
    var Header = <ComponentHeader />;
    return (
      <div>
        {Header}
        <BodyIndex userid={9527} userage={18} />
        <ComponentFooter />
      </div>
    );
  };
}