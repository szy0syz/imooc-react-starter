import React from 'react';
import { Card } from 'antd';
import { Router, Route, Link, browserHistory } from 'react-router';

export default class PCNewsImageBlock extends React.Component {

  constructor() {
    super();
    this.state = {
      news: ''
    };
  }

  componentWillMount() {
    var myFetchOptions = {
      method: 'GET'
    };
    fetch(`http://newsapi.gugujiankong.com/Handler.ashx?action=getnews&type=${this.props.type}&count=${this.props.count}`, myFetchOptions)
      .then(res => res.json())
      .then(json => this.setState({ news: json }));
  }

  render() {
    const styleImage = {
      display: "block",
      width: this.props.imageWidth,
      height: "90px"
    };
    const styleH3 = {
      width: this.props.imageWidth,
      whiteSpace: "nowrap",
      overflow: "hidden",
      textOverflow: "ellipsis"
    };
    const { news } = this.state;
    console.log(news);
    const newsList = news.length
      ?
      news.map((item, index) => (
        <li key={index}>
          <div key={index} className="imageblock">
            <div className="custom-image">
              <img alt="" style={styleImage} src={item.thumbnail_pic_s} />
            </div>
            <div className="custom-card">
              <h3 style={styleH3} >{item.title}</h3>
              <p>{item.author_name}</p>
            </div>
          </div>
        </li>
      ))
      :
      "没有加载到新闻";
    console.log(newsList);
    return(
      <div>
      <Card title={this.props.cartTitle} bordered={true} style={{ width: this.props.width }}>
        {newsList}
      </Card>
    </div>
    );
  };
}