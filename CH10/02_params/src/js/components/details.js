import React from 'react';
export default class ComponentDetails extends React.Component{
  render(){
    console.log(this);
    return (
      <div>
        <h2>这里是嵌套在首页中的详细的页面</h2>
        <p>接收ID：{this.props.match.params.id}</p>
      </div>
    );
  };
}
