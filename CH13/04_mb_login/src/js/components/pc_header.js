import React, { Component } from 'react';
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

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

const FormItem = Form.Item;
const TabPane = Tabs.TabPane;
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

class PCHeader extends Component {
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

  checkPassword(rule, value, callback) {
    const form = this.props.form;
    if (value && value !== form.getFieldValue('r_password')) {
      callback('Two passwords that you enter is inconsistent!');
    } else {
      callback();
    }
  };
  checkConfirm(rule, value, callback) {
    const form = this.props.form;
    if (value && this.state.confirmDirty) {
      form.validateFields(['r_confirm'], { force: true });
    }
    callback();
  }

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

  changeTabPans(key) {
    if (key === "1") {
      this.setState({ action: 'login' });
    }
    if (key === "2") {
      this.setState({ action: 'register' });
    }
  }

  handleSubmit(e) {
    const form = this.props.form;
    e.preventDefault(); // 阻止冒泡
    var myFetchOptions = {
      method: 'GET'
    };

    // 如果是登录
    if (this.state.action === "login") {
      this.setState({ hasLogined: true, userNickName: 'jerry' });
      message.success('登录成功!');
      this.setModalVisable(false);
      return;
    }

    this.props.form.validateFieldsAndScroll((err, formData) => {
      if (!err) {
        console.log('Received values of form: ', formData);
        // fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=" + this.state.action
        //   + "&username=" + formData.r_nickname + "&password=" + formData.r_password
        //   + "&r_userName=" + formData.r_nickname + "&r_password="
        //   + formData.r_password + "&r_confirmPassword="
        //   + formData.r_confirm, myFetchOptions)
        //   .then(response => response.json())
        //   .then(json => {
        //     console.log('json', json); // json.NickUserName
        //     this.setState({ userNickName: formData.r_nickname, userid: json.UserId });
        //   });
        // 如果是注册
        if (this.state.action === "register") {
          this.setState({ hasLogined: true, userNickName: formData.r_nickname });
          message.success('注册成功!');
          this.setModalVisable(false);
        }
      }
    });
  };

  render() {
    let { getFieldDecorator } = this.props.form;
    const userShow = this.state.hasLogined
      ?
      <Menu.Item key="logout" className="register">
        <Button type="primary" htmlType="button">{this.state.userNickName}</Button>
        &nbsp;&nbsp;
      {/* <Link target="_blank">
          <Button type="dashed" htmlType="button">个人中心</Button>
      </Link> */}
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
              {userShow}
            </Menu>

            <Modal title="用户中心" wrapClassName="vertical-center-modal" onOk={() => this.setModalVisable(false)} okText="关闭" onCancel={() => this.setModalVisable(false)} visible={this.state.modalVisable}>
              <Tabs type="card" onChange={this.changeTabPans.bind(this)}>
                <TabPane tab="登录" key="1">
                  <Form layout="horizontal" onSubmit={this.handleSubmit.bind(this)}>
                    <FormItem label="账号" hasFeedback>
                      {getFieldDecorator('r_email', {
                        rules: [{
                          type: 'email', message: '请输入正确的邮箱!',
                        }, {
                          required: true, message: '请输入邮箱账号!',
                        }],
                      })(
                        <Input placeholder="请输入邮箱" />
                        )}
                    </FormItem>
                    <FormItem label="密码" hasFeedback>
                      {getFieldDecorator('r_password', {
                        rules: [{
                          required: true, message: '请输入密码!',
                        }, {
                          validator: this.checkConfirm.bind(this),
                        }],
                      })(
                        <Input type="password" placeholder="请输入密码" />
                        )}
                    </FormItem>
                    <Button type="primary" htmlType="submit">登录</Button>
                  </Form>
                </TabPane>
                <TabPane tab="注册" key="2">
                  <Form layout="horizontal" onSubmit={this.handleSubmit.bind(this)}>
                    <FormItem label="昵称" hasFeedback>
                      {getFieldDecorator('r_nickname', {
                        rules: [{
                          required: true, message: '请输入昵称!',
                        }],
                      })(
                        <Input placeholder="请输入昵称" />
                        )}
                    </FormItem>
                    <FormItem label="账号" hasFeedback>
                      {getFieldDecorator('r_email', {
                        rules: [{
                          type: 'email', message: '请输入正确的邮箱!',
                        }, {
                          required: true, message: '请输入邮箱账号!',
                        }],
                      })(
                        <Input placeholder="请输入邮箱账号" />
                        )}
                    </FormItem>
                    <FormItem label="密码" hasFeedback>
                      {getFieldDecorator('r_password', {
                        rules: [{
                          required: true, message: 'Please input your password!',
                        }, {
                          validator: this.checkConfirm.bind(this),
                        }],
                      })(
                        <Input type="password" />
                        )}
                    </FormItem>
                    <FormItem label="确认密码" hasFeedback>
                      {getFieldDecorator('r_confirm', {
                        rules: [{
                          required: true, message: 'Please confirm your password!',
                        }, {
                          validator: this.checkPassword.bind(this),
                        }],
                      })(
                        <Input type="password" onBlur={this.handleConfirmBlur} />
                        )}
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

// 对from二次封装！
export default PCHeader = Form.create()(PCHeader);