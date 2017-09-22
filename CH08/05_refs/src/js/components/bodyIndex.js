import React from 'react';
import ReactDOM from 'react-dom';
import BodyChild from './bodyChild';

const defaultProps = {
  username: 'Defaule-123'
}

export default class BodyIndex extends React.Component {
  // 这不是ES6中类的构造函数嘛
  constructor() {
    // 调用父类的所有初始化方法
    super(); //以前学过了
    this.state = { username: 'Jerry', userage: 18 };
  }

  changeUserInfo(age) {
    this.setState({ userage: age });

    //第一种方法：原生方式
    // var mySubmitBtn = document.getElementById('submitbBtn');
    // ReactDOM.findDOMNode(mySubmitBtn).style.color = 'red';

    this.refs.submitbBtn.style.color = 'red';

  }

  handleChildValueChange(event) {
    this.setState({ userage: event.target.value });
  }

  render() {
    // setTimeout(() => {
    //   // 更改state时用
    //   this.setState({ username: 'afei233' });
    // }, 3000);

    return (
      <div>
        <h2>我是页面的主要内容</h2>
        <p>接收父组件传递的：userid: {this.props.userid}, username: {this.props.username}, userage: {this.props.userage}</p>
        <p>{this.state.userage}</p>
        {/* <input type="button" value="submit" onClick={this.changeUserInfo} />  这里修修改函数里的this，不修改this是button对象了*/}
        <input id="submitbBtn" ref="submitbBtn" type="button" value="submit" onClick={this.changeUserInfo.bind(this, 97)} />
        <BodyChild {...this.props} xid={444} handleChildValueChange={this.handleChildValueChange.bind(this)} />
      </div>
    )
  }
}

BodyIndex.propTypes = {
  userid: React.PropTypes.number.isRequired,
  userage: React.PropTypes.number
}

BodyIndex.defaultProps = defaultProps;