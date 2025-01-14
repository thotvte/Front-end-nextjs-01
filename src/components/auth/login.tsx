"use client";
import { Button, Col, Divider, Form, Input, notification, Row } from "antd";
import { ArrowLeftOutlined } from "@ant-design/icons";
import Link from "next/link";
import Image from "next/image";
import { authenticate, login } from "@/utils/actions";
import { useRouter } from "next/navigation";
import ModalReactive from "./modal.reactive";
import { useState } from "react";
import ModalChangePassword from "./modal.change.password";
import Header from "../MainLayout/header/page";
import Footer from "../MainLayout/footer/page";
import { useSession } from "next-auth/react"; // Import useSession

const Login = () => {
  const router = useRouter();
  const { data: session, status } = useSession();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [userEmail, setUserEmail] = useState("");
  const [changePassword, setChangePassword] = useState(false);

  const onFinish = async (values: any) => {
    const { username, password } = values;
    setUserEmail("");
    const res = await authenticate(username, password);
    if (res?.error) {
      if (res?.code === 2) {
        setIsModalOpen(true);
        setUserEmail(username);
        return;
      }
      notification.error({
        message: "Error login",
        description: res?.error,
      });
    } else {
      if (session?.user?.role === "ADMIN") {
        console.log("role ", session?.user?.role);
        router.push("/dashboard");
      } else if (session?.user?.role === "USER") {
        console.log("role ", session?.user?.role);
        router.push("/user");
      } else {
        console.log(session);
        notification.error({
          message: "Error",
          description: "Invalid role.",
        });
      }
    }
  };

  return (
    <>
      <Header />

      <div style={{ height: "500px" }}>
        <Row justify={"center"} style={{ margin: "70px" }}>
          <Col xs={24} md={16} lg={8} style={{ maxWidth: "450px" }}>
            <fieldset
              style={{
                padding: "15px",
                margin: "5px",
                border: "1px solid #ccc",
                borderRadius: "5px",
              }}
            >
              <legend>Đăng Nhập</legend>
              <Form
                name="basic"
                onFinish={onFinish}
                autoComplete="off"
                layout="vertical"
              >
                <Form.Item
                  label="Email"
                  name="username"
                  rules={[
                    {
                      required: true,
                      message: "Please input your email!",
                    },
                  ]}
                >
                  <Input />
                </Form.Item>

                <Form.Item
                  label="Password"
                  name="password"
                  rules={[
                    {
                      required: true,
                      message: "Please input your password!",
                    },
                  ]}
                >
                  <Input.Password />
                </Form.Item>

                <Form.Item>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <Button type="primary" htmlType="submit">
                      Login
                    </Button>
                    <Button type="link" onClick={() => setChangePassword(true)}>
                      Quên mật khẩu ?
                    </Button>
                  </div>
                </Form.Item>
              </Form>
              <Link href={"/"}>
                <ArrowLeftOutlined /> Quay lại trang chủ
              </Link>
              <Divider />
              <div style={{ textAlign: "center" }}>
                Chưa có tài khoản?{" "}
                <Link href={"/auth/register"}>Đăng ký tại đây</Link>
              </div>
            </fieldset>
          </Col>
        </Row>
        <ModalReactive
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
          userEmail={userEmail}
        />
        <ModalChangePassword
          isModalOpen={changePassword}
          setIsModalOpen={setChangePassword}
        />
      </div>

      <Footer />
    </>
  );
};

export default Login;
