import { Card, Col, Modal, Row } from "antd";
import React from "react";

import { Form, Input, Button } from "antd";
import { useHistory } from "react-router";
import { login } from "../redux/action/actLogin";
import { useDispatch, useSelector } from "react-redux";
import { StopOutlined } from "@ant-design/icons";

const LoginPage = () => {

    const fullWidthStyle = { margin: "10px", height: "150px" };
    let history = useHistory();
    const dispatch = useDispatch();
    const authentication = useSelector((state) => state.authentication);
    const loginHandle = (userLogin) => {
        // dispatch(login(userLogin))
        //     .then(() => {
                history.push("/dashbroad");
            // })
            // .catch((err) => {
            //     Modal.error({
            //         icon: <StopOutlined />,
            //         title: <strong className="text-danger">Bạn không có quyền truy cập!</strong>,
            //         content: `Vui lòng liên hệ với admin nếu bạn chưa được cấp quyền.`,
            //     });
            // });
    };

    const onFinish = (userLogin) => {
        console.log(userLogin);
        loginHandle(userLogin);
    };

    const onFinishFailed = (errorInfo) => {
        console.log("Failed:", errorInfo);
    };
    return (
        <div>
            {authentication.isLoggin === false ? (
                <Row gutter={6}>
                    <Col className="gutter-row" span={24} style={fullWidthStyle}></Col>
                    <Col className="gutter-row" span={6}></Col>
                    <Col className="gutter-row" span={12}>
                        <Card
                            title="Đăng nhập "
                            bordered={true}
                            hoverable={true}
                            extra={<a href="#top">Liên hệ</a>}
                        >
                            <Form
                                name="basic"
                                wrapperCol={{ span: 24 }}
                                onFinish={onFinish}
                                onFinishFailed={onFinishFailed}
                                autoComplete="off"
                            >
                                <Form.Item
                                    label="Tài khoản:"
                                    name="username"
                                    rules={[
                                        { required: true, message: "Vui lòng nhập tài khoản!" },
                                        {
                                            pattern: /[\D]/g,
                                            message: "Tài khoản phải bắt đầu bằng chữ",
                                        },
                                    ]}
                                    hasFeedback
                                >
                                    <Input />
                                </Form.Item>

                                <Form.Item
                                    label="Mật khẩu:"
                                    name="password"
                                    rules={[
                                        { required: true, message: "Vui lòng nhập mật khẩu!" },
                                        {
                                            pattern: /[\w]/g,
                                            message: "Mật khẩu không hợp lệ!",
                                        },
                                    ]}
                                    hasFeedback
                                >
                                    <Input.Password />
                                </Form.Item>

                                <Form.Item wrapperCol={{ offset: 10, span: 24 }}>
                                    <Button type="primary" htmlType="submit">
                                        Đăng nhập
                                    </Button>
                                </Form.Item>
                            </Form>
                        </Card>
                    </Col>
                    <Col className="gutter-row" span={6}></Col>
                </Row>
            ) : (
                history.push("/dashbroad")
            )}
        </div>
    );
};

export default LoginPage;

 
