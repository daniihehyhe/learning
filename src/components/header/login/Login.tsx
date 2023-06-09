/* eslint-disable no-mixed-spaces-and-tabs */
import React, {useState} from 'react'
import { Modal, Form, Input, Button } from "antd";
import { useTranslation } from 'react-i18next';

const Login = () => {
	const {t}= useTranslation()
  const [visible, setVisible] = useState(false);

  const showModal = () => {
    setVisible(true);
  };

  const handleCancel = () => {
    setVisible(false);
  };

  const onFinish = (values: string) => {
    console.log("Received values:", values);
    // Handle login logic here
  };

  return (
    <>
      <button onClick={showModal} type="submit">
        {t("header.login")}
      </button>

      <Modal
        title="Login"
        visible={visible}
        onCancel={handleCancel}
        footer={null}>
        <Form name="login" onFinish={onFinish}>
          <Form.Item
            label="Username"
            name="username"
            rules={[
              { required: true, message: "Please input your username!" },
            ]}>
            <Input />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[
              { required: true, message: "Please input your password!" },
            ]}>
            <Input.Password />
          </Form.Item>

          <Form.Item>
            <Button className="bg-blue-600" type="primary" htmlType="submit">
              Login
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
}

export default Login