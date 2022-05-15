import { Button, Form, Input } from "antd";
import React from "react";
import { useDispatch } from "react-redux";
import { userActions } from "../../../Redux/Actions/userActions";
export default function FormSignIn() {
  const onFinish = (values) => {
    // console.log("Success:", values);
    handleSignIn(values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  // const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleSignIn = (values) => {
    // userService
    //   .gettUser(values)
    //   .then((res) => {
    //     success("Bạn đã đăng nhập");
    //     navigate("/");
    //     localServices.setUser(res.data.content);
    //     dispatch({
    //       type: SET_INFOR,
    //       payload: res.data.content,
    //     });
    //   })
    //   .catch((err) => {
    //     error(err.response.data.content);
    //   });
    dispatch(userActions(values));
  };
  // const error = (content) => {
  //   message.error(content);
  // };
  // const success = (content) => {
  //   message.success(content);
  // };
  return (
    <div className=" w-2/6 mx-auto rounded-xl shadow-xl p-5 bg-white">
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
          label="Tài khoản"
          name="taikhoan"
          rules={[
            {
              required: true,
              message: "Không được bỏ trống",
            },
          ]}
          hasFeedback
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Mật khẩu"
          name="matKhau"
          rules={[
            {
              required: true,
              message: "Không được bỏ trống",
            },
          ]}
          hasFeedback
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          wrapperCol={{
            offset: 10,
            span: 16,
          }}
        >
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}
