import Footer from "@/components/MainLayout/footer/page";
import Header from "@/components/MainLayout/header/page";
import ListProduct from "@/components/MainLayout/products/listProduct";
import ListProductPc from "@/components/MainLayout/products/listProductPc";
import { RightOutlined } from "@ant-design/icons";
import Link from "next/link";

const SmartwatchPage = () => {
  return (
    <>
      <Header />
      <div style={{ width: "1170px", margin: "0 auto" }}>
        <div>
          <div style={{ display: "flex", marginTop: "20px" }}>
            <Link href={"/"}>
              <span
                style={{
                  fontSize: "14px",
                  fontWeight: "400",
                  lineHeight: "20px",
                  textAlign: "left",
                  color: "rgba(152, 162, 179, 1)",
                }}
              >
                Trang chủ
              </span>
            </Link>
            <RightOutlined />
            <span
              style={{
                fontSize: "18px",
                fontWeight: "600",
                lineHeight: "20px",
                textAlign: "left",
                color: "black",
              }}
            >
              PC, MÁY IN
            </span>
          </div>

          <ListProductPc />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default SmartwatchPage;
