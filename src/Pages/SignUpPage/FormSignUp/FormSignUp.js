import React from "react";
import { Form, Input, message, Button } from "antd";
import { userService } from "../../../Services/UserService/userService.js";
import { useHistory } from "react-router-dom";
export default function FormSignUp() {
  const history = useHistory();
  const onFinish = (values) => {
    console.log("Success:", values);
    handleSignUp(values);
    history.push("/sign-in");
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  const handleSignUp = (values) => {
    userService
      .setUser(values)
      .then((res) => {
        success(res.data.message);
        console.log(res);
      })
      .catch((err) => {
        error(err.response.data.content);
        console.log({ err });
      });
  };
  const success = (content) => {
    message.success(content, 3);
  };
  const error = (content) => {
    message.error(content, 3);
  };
  return (
    <div className=" w-3/5 bg-white p-6  shadow-slate-900 rounded-xl shadow-lg">
      <p className="text-center text-gray-500 text-4xl font-bold">SIGN UP</p>

      <Form
        name="basic"
        labelCol={{
          span: 24,
        }}
        wrapperCol={{
          span: 24,
        }}
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="Tài Khoản"
          name="taiKhoan"
          rules={[
            {
              required: true,
              message: "không được bỏ trống",
            },
            {
              validator: (_, value) =>
                !value.includes(" ")
                  ? Promise.resolve()
                  : Promise.reject(new Error("không được chứa khoảng trắng")),
            },
            {
              min: 10,
              message: "Tối thiểu 10 kí tự",
            },
          ]}
          validateTrigger="onBlur"
          hasFeedback
        >
          <Input />
        </Form.Item>

        <Form.Item
          validateTrigger="onBlur"
          label="Mật khẩu"
          name="matKhau"
          rules={[
            {
              required: true,
              message: "không được bỏ trống",
            },
            {
              min: 8,
              message: "Tối thiểu 8 kí tự",
            },
          ]}
          hasFeedback
        >
          <Input.Password />
        </Form.Item>
        <Form.Item
          validateTrigger="onBlur"
          label="Nhập lại mật khẩu"
          name="confirmMatKhau"
          rules={[
            {
              required: true,
              message: "không được bỏ trống",
            },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue("matKhau") === value) {
                  return Promise.resolve();
                }

                return Promise.reject(
                  new Error("Mật khẩu không trtungf khớp ")
                );
              },
            }),
          ]}
          hasFeedback
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          validateTrigger="onBlur"
          label="E-mail"
          name="email"
          rules={[
            {
              required: true,
              message: "không được bỏ trống",
            },
            {
              type: "email",
              message: "email không hợp lệ ",
            },
          ]}
          hasFeedback
        >
          <Input />
        </Form.Item>
        <Form.Item
          validateTrigger="onBlur"
          label="Số điện thoại"
          name="soDienThoai"
          rules={[
            {
              required: true,
              message: "không được bỏ trống",
            },

            {
              len: 10,
              message: "Độ dài không phù hợp",
            },

            {
              validator: (_, value) =>
                /\d+/g.test(value)
                  ? Promise.resolve()
                  : Promise.reject(new Error("Số điện thoại không hợp lệ")),
            },
          ]}
          hasFeedback
        >
          <Input />
        </Form.Item>
        <Form.Item
          validateTrigger="onBlur"
          label="Họ tên"
          name="hoTen"
          rules={[
            {
              required: true,
              message: "Tên không được bỏ trống",
            },

            {
              validator: (_, value) =>
                !/\d/.test(value)
                  ? Promise.resolve()
                  : Promise.reject(new Error("Tên không hợp lệ")),
            },
          ]}
          hasFeedback
        >
          <Input />
        </Form.Item>
        <Form.Item
          wrapperCol={{
            offset: 10,
            span: 4,
          }}
        >
          <Button htmlType="submit">Sign up </Button>
        </Form.Item>
      </Form>
    </div>
  );
}
