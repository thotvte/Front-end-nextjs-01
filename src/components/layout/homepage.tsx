"use client";
import React, { useState, useEffect } from "react";
import Footer from "../MainLayout/footer/page";
import Header from "../MainLayout/header/page";
import Discount from "../MainLayout/discount/page";
import MainContent from "../MainLayout/mainContent/page";
import Image from "next/image";
import { CloseCircleOutlined } from "@ant-design/icons";

const HomePage = () => {
  const [showModal, setShowModal] = useState(false);

  // Kiểm tra localStorage xem modal đã được hiển thị chưa
  useEffect(() => {
    const hasSeenModal = localStorage.getItem("hasSeenModal");
    if (!hasSeenModal) {
      setShowModal(true); // Hiển thị modal nếu chưa được hiển thị trước đó
    }
  }, []);

  const closeModal = () => {
    setShowModal(false);
    // Lưu trạng thái đã hiển thị modal vào localStorage
    localStorage.setItem("hasSeenModal", "true");
  };

  return (
    <div>
      <Header />
      <div style={{ backgroundColor: "#F2F4F7" }}>
        <Discount />
        <MainContent />
        <div>
          {showModal && (
            <div
              style={{
                position: "fixed",
                top: "0",
                left: "0",
                width: "100%",
                height: "100%",
                backgroundColor: "rgba(0, 0, 0, 0.5)",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                zIndex: 1,
              }}
            >
              <div
                style={{
                  padding: "20px",
                  borderRadius: "8px",
                  position: "relative",
                  textAlign: "center",
                }}
              >
                <button
                  onClick={closeModal}
                  style={{
                    position: "absolute",
                    top: "10px",
                    right: "10px",
                    background: "transparent",
                    border: "none",
                    cursor: "pointer",
                    fontSize: "24px",
                    color: "#fff",
                  }}
                >
                  <CloseCircleOutlined />
                </button>
                <a href="#!">
                  <Image
                    src={"/assets/imgs/ongtao.png"}
                    alt={""}
                    width={360}
                    height={400}
                  />
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
