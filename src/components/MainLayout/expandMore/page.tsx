import { CaretRightOutlined } from "@ant-design/icons";

const ExpandMore = () => {
  return (
    <span
      style={{
        display: "flex",
        color: "#2A83E9",
        justifyContent: "center",
        cursor: "pointer",
        paddingBottom: "10px",
      }}
    >
      Xem thêm sản phẩm
      <CaretRightOutlined />
    </span>
  );
};

export default ExpandMore;
