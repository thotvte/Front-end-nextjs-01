import {
    BarChartOutlined,
    PlusCircleOutlined,
    StarOutlined,
  } from "@ant-design/icons";

const ProductInfoTop = ()=>{
    return(
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
            Adapter Sạc Type C PD 25W Samsung EP-T2510N
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
            <BarChartOutlined style={{ marginRight: "4px",color: "#2F8FF0" }} />
            <a href="#!"  style={{ color: "#2F8FF0"}}>
              
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
            <PlusCircleOutlined
              style={{ marginRight: "4px", color: "#2F8FF0" }}
            />
            <a href="#!" style={{ color: "#2F8FF0" }}>
              So sánh
            </a>
          </div>
        </div>
    )
}

export default ProductInfoTop