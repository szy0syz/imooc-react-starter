import React from 'react';

export default class BodyIndex extends React.Component {
  // 这不是ES6中类的构造函数嘛
  constructor() {
    // 调用父类的所有初始化方法
    super(); //以前学过了
    this.state = { username: 'Jerry', userage: 18 };
  }

  render() {

    setTimeout(() => {
      // 更改state时用
      this.setState({ username: 'afei233' });
    }, 3000);

    return (
      <div>
        <h2>我是页面的主要内容</h2>
        <p>{this.state.username} {this.state.userage} {this.props.userid} {this.props.username}</p>
      </div>
    )
  }
}