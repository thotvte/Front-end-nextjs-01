"use client";
import React, { useState } from "react";
import logo from "../assets/imgs/blog-1.jpg"; // Đảm bảo đường dẫn chính xác

const Header = () => {
  const [isHovered, setIsHovered] = useState(false);

  // Styling cho header
  const headerStyle = {
    padding: "24px 48px", // Padding cho header
    minHeight: "calc(100vh - 180px)",
    backgroundColor: "#f4f4f4",
    borderRadius: "10px",
    fontSize: "1.4rem",
  };

  // Styling cho nút "Sign Up"
  const signUpButtonStyle = {
    padding: "12px 24px",
    backgroundColor: isHovered ? "#ffb900" : "#171100",
    color: "#fff",
    borderRadius: "8px",
    fontWeight: "bold",
    textAlign: "center" as "center", // Sử dụng 'center' cụ thể cho textAlign
    textDecoration: "none",
    cursor: "pointer",
    transition: "background-color 0.3s ease",
  };

  // Styling cho phần nội dung
  const bodyStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between", // Căn giữa các phần tử
    padding: "36px 0 8px",
    maxWidth: "1200px",
    margin: "0 auto",
  };

  // Styling cho phần nav
  const navStyle = {
    display: "flex",
    listStyleType: "none",
    margin: 0,
    padding: 0,
    gap: "20px", // Thêm khoảng cách giữa các item
  };

  // Styling cho các liên kết trong menu
  const linkStyle = {
    textDecoration: "none",
    color: "#171100",
    fontWeight: "600",
    transition: "color 0.3s ease",
  };

  return (
    <div style={headerStyle}>
      <div style={bodyStyle}>
        <img src="./assets/imgs/blog-1.jpg" alt="Logo" />

        <nav>
          <ul style={navStyle}>
            <li>
              <a
                href="#!"
                style={linkStyle}
                onMouseEnter={(e) => {
                  const target = e.target as HTMLAnchorElement;
                  target.style.color = "#ffb900";
                }}
                onMouseLeave={(e) => {
                  const target = e.target as HTMLAnchorElement;
                  target.style.color = "#171100";
                }}
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#!"
                style={linkStyle}
                onMouseEnter={(e) => {
                  const target = e.target as HTMLAnchorElement;
                  target.style.color = "#ffb900";
                }}
                onMouseLeave={(e) => {
                  const target = e.target as HTMLAnchorElement;
                  target.style.color = "#171100";
                }}
              >
                Courses
              </a>
            </li>
            <li>
              <a
                href="#!"
                style={linkStyle}
                onMouseEnter={(e) => {
                  const target = e.target as HTMLAnchorElement;
                  target.style.color = "#ffb900";
                }}
                onMouseLeave={(e) => {
                  const target = e.target as HTMLAnchorElement;
                  target.style.color = "#171100";
                }}
              >
                Pricing
              </a>
            </li>
            <li>
              <a
                href="#!"
                style={linkStyle}
                onMouseEnter={(e) => {
                  const target = e.target as HTMLAnchorElement;
                  target.style.color = "#ffb900";
                }}
                onMouseLeave={(e) => {
                  const target = e.target as HTMLAnchorElement;
                  target.style.color = "#171100";
                }}
              >
                Reviews
              </a>
            </li>
          </ul>
        </nav>

        <div>
          <a
            href="#!"
            style={signUpButtonStyle}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            Sign Up
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
