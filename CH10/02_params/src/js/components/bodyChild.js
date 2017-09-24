import React from 'react';

export default class BodyChild extends React.Component {
  render() {
    return (
      <div>
          <p>子页面输入：<input type="text" onChange={this.props.handleChildValueChange} /></p>
          <p>接收爷爷组件：userid: {this.props.userid}, userage: {this.props.userage}, xid: {this.props.xid}</p>
      </div>
    )
  }
}