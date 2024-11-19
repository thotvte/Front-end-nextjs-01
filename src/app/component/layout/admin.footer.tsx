"use client";
import { Layout } from "antd";
const AdminFooter = () => {
  const { Footer } = Layout;
  return (
    <div>
      <Footer style={{ textAlign: "center" }}>
        THODEPTRAI ©{new Date().getFullYear()} Created by @THODEPTRAI
      </Footer>
    </div>
  );
};
export default AdminFooter;
