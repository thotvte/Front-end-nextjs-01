"use client";
import { Layout } from "antd";

const AdminFooter = () => {
  const { Footer } = Layout;

  return (
    <>
      <Footer style={{ textAlign: "center" }}>
        THO DEP TRAI ©{new Date().getFullYear()} Created by @thodeptrai
      </Footer>
    </>
  );
};

export default AdminFooter;
