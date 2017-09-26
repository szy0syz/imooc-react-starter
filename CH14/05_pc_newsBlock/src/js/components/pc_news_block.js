import React from 'react';
import { Card } from 'antd';
import { Router, Route, Link, browserHistory } from 'react-router';

export default class PCNewsBlock extends React.Component {

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
    const { news } = this.state;
    const newsList = news.length
      ?
      news.map((item, index) => (
        <li key={index}>
          {item.title}
          {/* <Link to={`details/${item.uniquekey}`} taget="_blank">
            {item.title}
          </Link> */}
        </li>
      ))
      :
    "没有加载到新闻";
    // console.log(news); // ok 有数据
    return (
      <div className="topNewsList">
        <Card>
          <ul>
            {newsList}
          </ul>
        </Card>
      </div>
    );
  }
}