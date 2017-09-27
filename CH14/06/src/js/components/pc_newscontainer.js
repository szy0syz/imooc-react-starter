import React from 'react';
import { Row, Col, Tabs, Carousel } from 'antd';
const TabPane = Tabs.TabPane;

import PCNewsBlock from './pc_news_block';
import PCNewsImageBlock from './pc_news_image_block';
export default class PCNewsContatiner extends React.Component {
  render() {
    const settings = {
      dots: true,
      speed: 500,
      autoplay: true
    };

    return (
      <div>
        <Row>
          <Col span={2}></Col>
          <Col span={20} className="container">
            <div className="leftContainer">
              <div className="carousel">
                <Carousel {...settings}>
                  <div><img src="/images/carousel_1.jpg" />></div>
                  <div><img src="/images/carousel_2.jpg" />></div>
                  <div><img src="/images/carousel_3.jpg" />></div>
                  <div><img src="/images/carousel_4.jpg" />></div>
                </Carousel>
              </div>
              <PCNewsImageBlock count={6} type="guoji" width="500px" cartTitle="国际头条" imageWidth="132px"></PCNewsImageBlock>
            </div>
            <Tabs className="tabs_news">
              <TabPane tab="头条" key="1">
                <PCNewsBlock count={12} type="top" width="100%" bordered="false"></PCNewsBlock>
              </TabPane>
              <TabPane tab="国内" key="2">
                <PCNewsBlock count={12} type="guonei" width="100%" bordered="false"></PCNewsBlock>
              </TabPane>
              <TabPane tab="国际" key="3">
                <PCNewsBlock count={12} type="guoji" width="100%" bordered="false"></PCNewsBlock>
              </TabPane>
              <TabPane tab="社会" key="4">
                <PCNewsBlock count={12} type="shehui" width="100%" bordered="false"></PCNewsBlock>
              </TabPane>
              <TabPane tab="娱乐" key="5">
                <PCNewsBlock count={12} type="yule" width="100%" bordered="false"></PCNewsBlock>
              </TabPane>
              <TabPane tab="体育" key="6">
                <PCNewsBlock count={12} type="tiyu" width="100%" bordered="false"></PCNewsBlock>
              </TabPane>
              <TabPane tab="科技" key="7">
                <PCNewsBlock count={12} type="keji" width="100%" bordered="false"></PCNewsBlock>
              </TabPane>
            </Tabs>
          </Col>
          <Col span={2}></Col>
        </Row>
      </div>
    );
  }
}