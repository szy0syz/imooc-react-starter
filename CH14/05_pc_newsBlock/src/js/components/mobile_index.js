import React from 'react';
import {
  Col,
  Row,
  Menu,
  Icon,
  Tabs,
  Form,
  Input,
  Modal,
  Button,
  message,
  Checkbox
} from 'antd';
const TabPane = Tabs.TabPane;
import MobileHeader from './mobile_header';
import MobileFooter from './mobile_footer';

export default class MobileIndex extends React.Component {
  
  render() {
    return (
      <div>
        <MobileHeader></MobileHeader>
        <Tabs type="card">
          <TabPane tab="头条" key="1">123</TabPane>
          <TabPane tab="社会" key="2">456</TabPane>
          <TabPane tab="国内" key="3">789</TabPane>
          <TabPane tab="国际" key="4">
            444444444
          </TabPane>
          <TabPane tab="娱乐" key="5">
            5555555555
          </TabPane>
        </Tabs>
        <MobileFooter></MobileFooter>
      </div>
    );
  };
}