"use client";
import Image from "next/image";
import logo from "../../../../../public/assets/icons/Exchange.png";
const Policy = () => {
  return (
    <div
      style={{
        width: "690px",
        backgroundColor: "#FFFFFF",
        borderRadius: "10px",
        margin: "15px 0 25px ",
        padding: "25px 12px 12px",
      }}
    >
      <h2
        style={{
          marginBottom: "15px",
          fontWeight: "bold",
          color: "#101828",
          fontSize: "16px",
        }}
      >
        Thế Giới Di Động cam kết
      </h2>
      <ul style={{ paddingLeft: "0" }}>
        <li
          style={{
            display: "flex",
            alignItems: "center",
            width: "50%",
            height: "64px",
          }}
        >
          <div>
            <Image
              src={logo}
              alt="LOGO"
              width={32}
              height={32}
              style={{ cursor: "pointer", marginRight: "7px" }}
            ></Image>
          </div>
          <div>
            <p
              style={{
                fontSize: "14px",
                lineHeight: "20px",
                paddingLeft: "5px",
              }}
            >
              Hư gì đổi nấy <b>12 tháng</b> tại 2965 siêu thị toàn quốc (miễn
              phí tháng đầu){" "}
              <a href="#!" style={{ color: "#2a83e9" }}>
                Xem chi tiết
              </a>{" "}
            </p>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Policy;
