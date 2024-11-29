// src/components/Footer/Footer.tsx
import React from "react";

const Footer: React.FC = () => {
  // Inline styles for Footer
  const fontSizeMain = "1.1rem";

  const footerStyle = {
    padding: "96px 135px 0",
    background: "#2e2100",
    fontSize: fontSizeMain,
  };

  const mainContentStyle = {
    maxWidth: "1200px",
    margin: "0 auto",
  };

  const rowStyle = {
    display: "flex",
    paddingBottom: "38px",
    borderBottom: "1px solid #59554b",
  };

  const columnStyle = {
    width: "21.6%",
  };

  const firstColumnStyle = {
    width: "35%",
  };

  const descStyle = {
    maxWidth: "267px",
    marginTop: "18px",
    fontSize: "1.1rem",
    lineHeight: "1.86",
    color: "#bfbcb2",
  };

  const socialsStyle = {
    display: "flex",
    gap: "18px",
    marginTop: "18px",
  };

  const titleStyle = {
    display: "inline-block",
    padding: "0 48px 14px 0",
    borderBottom: "1px solid #59554b",
    fontSize: "1.6rem", // Tăng kích thước font cho tiêu đề
    fontWeight: "600",
    lineHeight: "1.75",
    color: "#ffffff",
  };

  const listStyle = {
    marginTop: "48px",
  };

  const listItemStyle = {
    display: "inline-block",
    marginBottom: "12px",
    fontSize: fontSizeMain,
    lineHeight: "1.86",
    color: "#bfbcb2",
  };

  const listStrongStyle = {
    fontWeight: "600",
    color: "#ffffff",
  };

  const copyrightStyle = {
    padding: "28px 0",
  };

  const copyrightTextStyle = {
    fontSize: fontSizeMain,
    lineHeight: "1.86",
    textAlign: "center" as "center",
    color: "#807d74",
  };

  // Style cho các liên kết bỏ gạch dưới
  const linkStyle = {
    textDecoration: "none", // Bỏ gạch dưới cho các liên kết
    color: "#bfbcb2", // Màu chữ liên kết
    transition: "color 0.3s ease", // Thêm hiệu ứng khi hover
  };

  return (
    <footer style={footerStyle}>
      <div style={mainContentStyle}>
        <div style={rowStyle}>
          {/* Column 1 */}
          <div style={{ ...columnStyle, ...firstColumnStyle }}>
            <img
              src="./assets/icons/logo-white.svg"
              alt="Lesson."
              style={{ width: "150px" }} // Inline style for logo image
            />
            <p style={descStyle}>
              Need to help for your dream Career? trust us. With Lesson, study
              becomes a lot easier with us.
            </p>

            <div style={socialsStyle}>
              <a href="#!" style={linkStyle}>
                <img
                  src="./assets/icons/twitter.svg"
                  alt="Twitter"
                  style={{ width: "30px", height: "30px" }} // Inline style for social icons
                />
              </a>
              <a href="#!" style={linkStyle}>
                <img
                  src="./assets/icons/Facebook.svg"
                  alt="Facebook"
                  style={{ width: "30px", height: "30px" }}
                />
              </a>
              <a href="#!" style={linkStyle}>
                <img
                  src="./assets/icons/Linkedin.svg"
                  alt="Linkedin"
                  style={{ width: "30px", height: "30px" }}
                />
              </a>
              <a href="#!" style={linkStyle}>
                <img
                  src="./assets/icons/Instagram.svg"
                  alt="Instagram"
                  style={{ width: "30px", height: "30px" }}
                />
              </a>
            </div>
          </div>

          {/* Column 2 */}
          <div style={columnStyle}>
            <h3 style={titleStyle}>Company</h3>
            <ul style={listStyle}>
              <li style={listItemStyle}>
                <a href="#!" style={linkStyle}>
                  About Us
                </a>
              </li>
              <li style={listItemStyle}>
                <a href="#!" style={linkStyle}>
                  Features
                </a>
              </li>
              <li style={listItemStyle}>
                <a href="#!" style={linkStyle}>
                  Our Pricing
                </a>
              </li>
              <li style={listItemStyle}>
                <a href="#!" style={linkStyle}>
                  Latest News
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3 */}
          <div style={columnStyle}>
            <h3 style={titleStyle}>Support</h3>
            <ul style={listStyle}>
              <li style={listItemStyle}>
                <a href="#!" style={linkStyle}>
                  FAQ’s
                </a>
              </li>
              <li style={listItemStyle}>
                <a href="#!" style={linkStyle}>
                  Terms & Conditions
                </a>
              </li>
              <li style={listItemStyle}>
                <a href="#!" style={linkStyle}>
                  Privacy Policy
                </a>
              </li>
              <li style={listItemStyle}>
                <a href="#!" style={linkStyle}>
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4 */}
          <div style={columnStyle}>
            <h3 style={titleStyle}>Address</h3>
            <ul style={listStyle}>
              <li style={listItemStyle}>
                <a href="#!" style={linkStyle}>
                  <strong style={listStrongStyle}>Location:</strong> 27 Division
                  St, New York, NY 10002, USA
                </a>
              </li>
              <li style={listItemStyle}>
                <a href="#!" style={linkStyle}>
                  <strong style={listStrongStyle}>Email:</strong>{" "}
                  email@gmail.com
                </a>
              </li>
              <li style={listItemStyle}>
                <a href="#!" style={linkStyle}>
                  <strong style={listStrongStyle}>Phone:</strong> + 000 1234 567
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div style={copyrightStyle}>
          <p style={copyrightTextStyle}>
            Copyright ©2022 webdesign.gdn All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
