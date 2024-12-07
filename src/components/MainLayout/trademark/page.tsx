import { HeartOutlined } from "@ant-design/icons";
import styles from "../products/product.module.css";
import Img from "./image";

const Trademark = () => {
  return (
    <div className="main-content" style={{ marginTop: "15px" }}>
      <p
        style={{
          marginBottom: "15px",
          fontSize: "2.2rem",
          fontWeight: "500",
          color: "Black",
        }}
      >
        <HeartOutlined style={{ color: "red", fontSize: "2rem" }} /> Tuần lễ
        Thương hiệu Laptop HP
      </p>
      <Img src="/assets/imgs/tuanle.png" alt={"HP"} />
    </div>
  );
};

export default Trademark;
