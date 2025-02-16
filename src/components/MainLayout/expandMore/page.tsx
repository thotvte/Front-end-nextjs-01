import { CaretRightOutlined } from "@ant-design/icons";
import { Pagination } from "antd";
import Link from "next/link";

const ExpandMore = () => {
  return (
    <div>
      <span
        style={{
          display: "flex",
          color: "#2A83E9",
          justifyContent: "center",
          cursor: "pointer",
          paddingBottom: "10px",
        }}
      >
        <Link href={"/sanpham/dienthoai"}>
          Xem thêm sản phẩm
          <CaretRightOutlined />
        </Link>
      </span>
    </div>
  );
};

export default ExpandMore;
