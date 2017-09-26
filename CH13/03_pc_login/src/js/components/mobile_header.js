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

class MobileHeader extends React.Component {

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

  handleSubmit(e) {
    const form = this.props.form;
    //页面开始向 API 提交数据
    e.preventDefault(); // 阻止冒泡
    var myFetchOptions = {
      method: 'GET'
    };
    this.props.form.validateFieldsAndScroll((err, formData) => {
      if (!err) {
        console.log('Received values of form: ', formData);
        fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=" + this.state.action
          + "&username=" + formData.r_nickname + "&password=" + formData.r_password
          + "&r_userName=" + formData.r_nickname + "&r_password="
          + formData.r_password + "&r_confirmPassword="
          + formData.r_confirm, myFetchOptions)
          .then(response => response.json())
          .then(json => {
            console.log('json', json); // json.NickUserName
            this.setState({ userNickName: formData.r_nickname, userid: json.UserId });
          });
        message.success('请求成功!');
        this.setModalVisable(false);
      }
    });
  };

  login() {
    this.setModalVisable(true);
  }

  render() {
    let { getFieldDecorator } = this.props.form;
    const userShow = this.state.hasLogined ?
      // <Link to="profile">
      //   <Icon type="inbox"></Icon>
      // </Link>
      <Icon type="inbox"></Icon>
      :
      <Icon type="setting" onClick={this.login.bind(this)}></Icon>;
    return (
      <div id="mobileheader">
        <header>
          <img src="images/logo.png" alt="logo" />
          <span>ReactNews</span>
          {userShow}
        </header>

        <Modal title="用户中心" wrapClassName="vertical-center-modal" onOk={() => this.setModalVisable(false)} okText="关闭" onCancel={() => this.setModalVisable(false)} visible={this.state.modalVisable}>
          <Tabs type="card">
            <TabPane tab="注册" key="2">
              <Form layout="horizontal" onSubmit={this.handleSubmit.bind(this)}>
                <FormItem label="昵称">
                  {getFieldDecorator('r_nickname', {
                    rules: [{
                      required: true, message: '请输入昵称!',
                    }],
                  })(
                    <Input placeholder="请输入昵称" />
                    )}
                </FormItem>
                <FormItem label="账号">
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

      </div>
    );
  };
}

export default MobileHeader = Form.create()(MobileHeader);