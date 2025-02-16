"use client";
import { Button, Col, Divider, Form, Input, notification, Row } from "antd";
import { ArrowLeftOutlined } from "@ant-design/icons";
import Link from "next/link";
import { authenticate } from "@/utils/actions";
import { useRouter } from "next/navigation";
import ModalReactive from "./modal.reactive";
import { useEffect, useState } from "react";
import ModalChangePassword from "./modal.change.password";
import Header from "../MainLayout/header/page";
import Footer from "../MainLayout/footer/page";
import { signIn, useSession } from "next-auth/react"; // Import signIn from next-auth

const Login = () => {
  const router = useRouter();
  const { data: session, status } = useSession(); // Get session info
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [userEmail, setUserEmail] = useState("");
  const [changePassword, setChangePassword] = useState(false);

  // Điều hướng sau khi session được tải (người dùng đã đăng nhập)
  useEffect(() => {
    if (status === "loading") {
      return; // Đợi session được tải
    }
    if (status === "authenticated") {
      router.refresh();
      if (session?.user?.role === "ADMIN") {
        router.push("/dashboard");
      } else if (session?.user?.role === "USER") {
        router.push("/user");
      } else {
        notification.error({
          message: "Error",
          description: "Invalid role.",
        });
      }
    }
  }, [status, session, router]);

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
      // Đăng nhập thành công, bạn có thể gọi signIn() từ next-auth để cập nhật session
      notification.success({
        message: "Login successful",
        description: "You are successfully logged in!",
      });

      // Gọi signIn từ next-auth để cập nhật session
      signIn("credentials", {
        username: username,
        password: password,
        redirect: false, // Không tự động chuyển hướng khi đăng nhập thành công
      }).then(() => {
        // Sau khi cập nhật session, kiểm tra và điều hướng
        router.push(session?.user?.role === "ADMIN" ? "/dashboard" : "/user");
      });
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
