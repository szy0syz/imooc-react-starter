import React from 'react';
import { Row, Col, Tabs, Carousel } from 'antd';
const TabPane = Tabs.TabPane;

export default class PCNewsContatiner extends React.Component {
  render() {
    const settings = {
      dots: true,
      speed: 100,
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
            </div>
          </Col>
          <Col span={2}></Col>
        </Row>
      </div>
    );
  }
}