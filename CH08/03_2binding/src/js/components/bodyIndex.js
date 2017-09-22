import React from 'react';
import BodyChild from './bodyChild';

export default class BodyIndex extends React.Component {
  // 这不是ES6中类的构造函数嘛
  constructor() {
    // 调用父类的所有初始化方法
    super(); //以前学过了
    this.state = { username: 'Jerry', userage: 18 };
  }

  changeUserInfo(age) {
    this.setState({ userage: age });
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
        <p>{this.props.userid} {this.props.username}</p>
        <p>{this.state.userage}</p>
        {/* <input type="button" value="submit" onClick={this.changeUserInfo} />  这里修修改函数里的this，不修改this是button对象了*/}
        <input type="button" value="submit" onClick={this.changeUserInfo.bind(this, 97)} />
        <BodyChild handleChildValueChange={this.handleChildValueChange.bind(this)} />
      </div>
    )
  }
}