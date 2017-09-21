import React from 'react';

export default class BodyIndex extends React.Component {

  // 生命周期函数
  componentWillMount() {
    // 第一次加载组件函数
    console.log('BodyIndex - componentWillMount');
  }

  componentDidMount() {
    // 组件加载完
    console.log('BodyIndex - componentDidMount');
  }

  render() {
    var userName = 'Jerry';
    var boolInput = true;
    var html1 = 'jerry\u0020shi';  // jerry&nbsp;shi 使用Unicode转码
    var html2 = 'jerry&nbsp;shi'
    return (
      <div>
        <h2>我是页面的主要内容</h2>
        <p>{userName === '' ? '用户还没登录' : '用户名: ' + userName}</p>
        <p><input type="button" value={userName} disabled={boolInput} /></p>
        {/*一些注释*/}
        <p>{html1}</p>
        <p dangerouslySetInnerHTML={{ __html: html2 }}></p>
      </div>
        )
  }
}