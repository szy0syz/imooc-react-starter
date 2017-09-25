import React from 'react';
import { Row, Col } from 'antd';
import {
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

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

const FormItem = Form.Item;
const TabPane = Tabs.TabPane;
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

class PCHeader extends React.Component {
  constructor() {
    super();
    this.state = {
      current: 'top',
      modalVisable: false,
      action: 'login',
      hasLogined: false,
      userNickName: '',
      userid: 0
    };
  };

  setModalVisable(value) {
    this.setState({ modalVisable: value });
  };

  handleClick(e) {
    if (e.key === 'register') {
      // 将注册指示高亮
      this.setState({ current: 'register' });
      // 不仅高亮，还要显示模态窗口
      this.setModalVisable(true);
    } else {
      // 高亮
      this.setState({ current: e.key });
    }
  }

  handleSubmit(e) {
    //页面开始向 API 提交数据
  }

  render() {
    let { getFieldDecorator } = this.props.form;
    const userShow = this.state.hasLogined
      ?
      <Menu.Item key="logout" className="register">
        <Button type="primary" htmlType="button">{this.state.userNickName}</Button>
        &nbsp;&nbsp;
      <Link target="_blank">
          <Button type="dashed" htmlType="button">个人中心</Button>
        </Link>
        &nbsp;&nbsp;
      <Button type="danger" htmlType="button">退出</Button>
      </Menu.Item>
      :
      <Menu.Item key="register" className="register">
        <Icon type="appstore"></Icon>注册/登录
      </Menu.Item>;

    return (
      <header>
        <Row>
          <Col span={2}></Col>
          <Col span={4}>
            <a href="/" className="logo">
              <img src="images/logo.png" alt="logo" />
              <span>ReactNews</span>
            </a>
          </Col>
          <Col span={16}>
            <Menu mode="horizontal" onClick={this.handleClick.bind(this)} selectedKeys={[this.state.current]}>
              <Menu.Item key="top">
                <Icon type="appstore"></Icon>头条
              </Menu.Item>
              <Menu.Item key="guonei">
                <Icon type="appstore"></Icon>国内
              </Menu.Item>
              <Menu.Item key="guoji">
                <Icon type="appstore"></Icon>国际
              </Menu.Item>
              <Menu.Item key="shehui">
                <Icon type="appstore"></Icon>社会
              </Menu.Item>
              <Menu.Item key="yule">
                <Icon type="appstore"></Icon>娱乐
              </Menu.Item>
              <Menu.Item key="tiyu">
                <Icon type="appstore"></Icon>体育
              </Menu.Item>
              <Menu.Item key="keji">
                <Icon type="appstore"></Icon>科技
              </Menu.Item>
              <Menu.Item key="shishang">
                <Icon type="appstore"></Icon>时尚
              </Menu.Item>
              {userShow}
            </Menu>

            <Modal title="用户中心" wrapClassName="vertical-center-modal" onOk={() => this.setModalVisable(false)} okText="关闭" onCancel={() => this.state.setModalVisable(false)} visible={this.state.modalVisable}>
              <Tabs type="card">
                <TabPane tab="注册" key="2">
                  <Form horizontal onSubmit={this.handleSubmit.bind(this)}>
                    <FormItem lable="账户">
                      <Input placeholder="请输入账号" {...getFieldDecorator('r_userName') } />
                    </FormItem>
                    <FormItem lable="密码">
                      <Input type="password" placeholder="请输入密码" {...getFieldDecorator('r_password') } />
                    </FormItem>
                    <FormItem lable="确认密码">
                      <Input type="password" placeholder="请再次输入密码" {...getFieldDecorator('r_confirmPassword') } />
                    </FormItem>
                    <Button type="primary" htmlType="submit">注册</Button>
                  </Form>
                </TabPane>
              </Tabs>
            </Modal>

          </Col>
          <Col span={2}></Col>
        </Row>

      </header>
    );
  };
}

export default PCHeader = Form.create()(PCHeader);