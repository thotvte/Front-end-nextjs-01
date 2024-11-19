import { Layout, Menu, theme } from "antd";
import AdminFooter from "../../component/layout/admin.footer";
import AdminHeader from "../../component/layout/admin.header";
import AdminSideBar from "../../component/layout/admin.sidebar";
import AdminContent from "../../component/layout/admin.content";

const AdminLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const { Content } = Layout;
  return (
    <Layout>
      <AdminSideBar />
      <Layout>
        <AdminHeader />
        <AdminContent>{children}</AdminContent>
        <AdminFooter />
      </Layout>
    </Layout>
  );
};

export default AdminLayout;
