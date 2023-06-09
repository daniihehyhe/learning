import React, { useState } from "react";
    import { Modal, Form, Input, Button } from "antd";
import { useTranslation } from "react-i18next";

    const ModalRegistration: React.FC = () => {
			const { t } = useTranslation();
      const [visible, setVisible] = useState(false);

      const showModal = () => {
        setVisible(true);
      };

      const handleCancel = () => {
        setVisible(false);
      };

      const onFinish = (values: string) => {
        console.log("Received values:", values);
        // Handle registration logic here
      };

      return (
        <>
          <button
            onClick={showModal}
            className="bg-blackc24 px-4 text-white py-2 rounded-lg dark:invert"
            type="submit">
            {t("header.join")}
          </button>
          <Modal
            title="Registration"
            visible={visible}
            onCancel={handleCancel}
            footer={null}
            className="rounded-lg">
            <p className="mb-4 text-gray-600">
              Welcome! Please provide the following information to register:
            </p>
            <Form name="registration" onFinish={onFinish}>
              <Form.Item
                label="Name"
                name="name"
                rules={[
                  { required: true, message: "Please input your name!" },
                ]}>
                <Input />
              </Form.Item>

              <Form.Item
                label="Email"
                name="email"
                rules={[
                  { required: true, message: "Please input your email!" },
                  {
                    type: "email",
                    message: "Please enter a valid email address!",
                  },
                ]}>
                <Input />
              </Form.Item>

              <Form.Item
                label="Password"
                name="password"
                rules={[
                  { required: true, message: "Please input your password!" },
                  {
                    min: 6,
                    message: "Password must be at least 6 characters!",
                  },
                ]}>
                <Input.Password />
              </Form.Item>
              <Form.Item
                label="Password"
                name="password"
                rules={[
                  { required: true, message: "Please input your password!" },
                  {
                    min: 6,
                    message: "Password must be at least 6 characters!",
                  },
                ]}>
                <Input.Password />
              </Form.Item>
              <Form.Item>
                <Button
                  className="bg-blue-600"
                  type="primary"
                  htmlType="submit">
                  Register
                </Button>
              </Form.Item>
            </Form>
          </Modal>
        </>
      );
    };

    export default ModalRegistration;
