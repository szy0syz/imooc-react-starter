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
          <Col span={3}></Col>
          <Col span={18} className="container">
            <Row height="700px">
              <Col span={10}>
                <div className="leftContainer">
                  <div className="carousel">
                    <Carousel {...settings}>
                      <div><img src="/images/carousel_1.jpg" />></div>
                      <div><img src="/images/carousel_2.jpg" />></div>
                      <div><img src="/images/carousel_3.jpg" />></div>
                      <div><img src="/images/carousel_4.jpg" />></div>
                    </Carousel>
                  </div>
                  <PCNewsImageBlock count={6} type="guoji" height="0px" width="500px" cartTitle="国际头条" imageWidth="132px"></PCNewsImageBlock>
                </div>
              </Col>
              <Col span={14}>
                <Tabs className="tabs_news">
                  <TabPane tab="头条" key="1">
                    <PCNewsBlock count={20} type="top" width="100%" bordered="false"></PCNewsBlock>
                  </TabPane>
                  <TabPane tab="国内" key="2">
                    <PCNewsBlock count={20} type="guonei" width="100%" bordered="false"></PCNewsBlock>
                  </TabPane>
                  <TabPane tab="国际" key="3">
                    <PCNewsBlock count={20} type="guoji" width="100%" bordered="false"></PCNewsBlock>
                  </TabPane>
                  <TabPane tab="社会" key="4">
                    <PCNewsBlock count={20} type="shehui" width="100%" bordered="false"></PCNewsBlock>
                  </TabPane>
                  <TabPane tab="娱乐" key="5">
                    <PCNewsBlock count={20} type="yule" width="100%" bordered="false"></PCNewsBlock>
                  </TabPane>
                  <TabPane tab="科技" key="7">
                    <PCNewsBlock count={20} type="keji" width="100%" bordered="false"></PCNewsBlock>
                  </TabPane>
                </Tabs>
              </Col>
            </Row>
            <Row>
              <Col span={24}>
              <PCNewsImageBlock count={8} type="guonei" width="100%" cartTitle="国内新闻" imageWidth="160px" />
              </Col>
            </Row>
            <Row>
              <Col span={24}>
              <PCNewsImageBlock count={16} type="keji" width="100%" cartTitle="科技新闻" imageWidth="160px" />
              </Col>
            </Row>
            {/* <div>
              <PCNewsImageBlock count={8} type="guonei" width="100%" cartTitle="国内新闻" imageWidth="132px" />
              <PCNewsImageBlock count={16} type="yule" width="100%" cartTitle="娱乐新闻" imageWidth="132px" />
            </div> */}
          </Col>
          <Col span={3}></Col>
        </Row>
      </div>
    );
  }
}