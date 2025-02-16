import {
  BarChartOutlined,
  PlusCircleOutlined,
  StarOutlined,
} from "@ant-design/icons";

interface Products {
  data: any;
  _id: string;
  name: string;
  description: string;
  price: number;
  stockQuantity: number;
  discount: number;
  image: string[];
  category: string;
  ram: string;
  storageCapacity: string;
  cpu: string;
  gpu: string;
  operatingSystem: string;
  cpuSpeed: string;
  cameraResolution: string;
  screenTechnology: string;
  screenResolution: string;
  widescreen: string;
  batteryCapacity: string;
  maximumChargingSupport: string;
  design: string;
  theLaunchTime: string;
  material: string;
  sizeAndVolume: string;
  company: string;
  color: string;
}

const ProductInfoTop = ({ product }: { product: Products }) => {
  return (
    <div
      className="main-content"
      style={{
        boxSizing: "border-box",
        display: "flex",
        marginBottom: "15px",
        paddingTop: "15px",
      }}
    >
      <h1
        style={{
          color: "rgb(51, 51, 51)",
          fontSize: "20px",
          fontWeight: "700",
          lineHeight: "28px",
          marginRight: "12px",
        }}
      >
        {/* Adapter Sạc Type C PD 25W Samsung EP-T2510N */}
        {product.data.name}
      </h1>
      <span
        style={{
          color: "#98a2b3",
          fontSize: "14px",
          marginRight: "12px",
          marginTop: "5px",
        }}
      >
        Đã bán 55,5k
      </span>
      <div
        style={{
          color: "#98a2b3",
          fontSize: "14px",
          marginRight: "12px",
          marginTop: "5px",
        }}
      >
        <p>
          <StarOutlined /> 4.9
        </p>
      </div>
      <div
        style={{
          fontSize: "14px",
          marginRight: "12px",
          marginTop: "5px",
        }}
      >
        <BarChartOutlined style={{ marginRight: "4px", color: "#2F8FF0" }} />
        <a href="#!" style={{ color: "#2F8FF0" }}>
          Thông Số
        </a>
      </div>
      <div
        style={{
          fontSize: "14px",
          marginRight: "12px",
          marginTop: "5px",
        }}
      >
        <PlusCircleOutlined style={{ marginRight: "4px", color: "#2F8FF0" }} />
        <a href="#!" style={{ color: "#2F8FF0" }}>
          So sánh
        </a>
      </div>
    </div>
  );
};

export default ProductInfoTop;
