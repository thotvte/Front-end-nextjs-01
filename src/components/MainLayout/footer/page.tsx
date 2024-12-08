import React from "react";
import styles from "./footer.module.css"; // Import CSS Module
import Image from "next/image";
import logo from "../../../../public/assets/imgs/logo.svg";
import linkedin from "../../assets/icons/Linkedin.svg";
import facebook from "../../assets/icons/Facebook.svg";
import twitter from "../../assets/icons/twitter.svg";
import instagram from "../../assets/icons/instagram.svg";

const Footer: React.FC = () => {
  return (
    <footer style={{ backgroundColor: "#feeaa1" }}>
      <div className={styles.mainContent}>
        <div className={styles.listtel}>
          <p>
            <strong>Tổng đài hỗ trợ</strong>
          </p>
          <p className={styles.listContent}>
            <span>Gọi mua:</span>
            <a href="1900 232 460">1900 232 460</a>(8:00 - 21:30)
          </p>
          <p className={styles.listContent}>
            <span>Khiếu nại:</span>
            <a href="1800.1062">1800.1062</a>(8:00 - 21:30)
          </p>
          <p className={styles.listContent}>
            <span>Bảo hành:</span>
            <a href="1900 232 464">1900 232 464</a>(8:00 - 21:30)
          </p>
        </div>
        <div className={styles.col}>
          <p className={styles.listtel}>
            <strong>Về công ty</strong>
          </p>
          <ul className={styles.listMenu}>
            <li>
              <a href="#">Giới thiệu công ty(MWG.vn)</a>
            </li>
            <li>
              <a href="#">Tuyển dụng</a>
            </li>
            <li>
              <a href="#">Gửi góp ý, khiếu nại</a>
            </li>
            <li>
              <a href="#">Tìm siêu thị (2.965 shop)</a>
            </li>
          </ul>
        </div>
        <div className={styles.col}>
          <p className={styles.listtel}>
            <strong>Thông tin khác</strong>
          </p>
          <ul className={styles.listMenu}>
            <li>
              <a href="#">Tích điểm Quà tặng VIP</a>
            </li>
            <li>
              <a href="#">Lịch sữ mua hàng</a>
            </li>
            <li>
              <a href="#">DV vệ sinh máy lạnh</a>
            </li>
            <li>
              <a href="#">Tìm hiểu về mua trả chậm</a>
            </li>
            <li>
              <a href="#">Chính sách bảo hành</a>
            </li>
          </ul>
        </div>
      </div>
      <div className={styles.copyright}>
        <p>
          © 2018. Công ty cổ phần Lesson. GPDKKD: 012345678 do sở KH & ĐT TP.HCM
          cấp ngày 02/01/2007. GPMXH: 238/GP-BTTTT do Bộ Thông Tin và Truyền
          Thông cấp ngày 04/06/2020. Địa chỉ: 128 Trần Quang Khải, P.Tân Định,
          Q.1, TP.Hồ Chí Minh. Địa chỉ liên hệ và gửi chứng từ: Lô T2-1.2, Đường
          D1, Đ. D1, P.Tân Phú, TP.Thủ Đức, TP.Hồ Chí Minh. Điện thoại:
          01234567. Email: abc@gmail.com. Chịu trách nhiệm nội dung: Huỳnh Văn
          B. Email: abc@gmail.com. <a href="#!">Xem chính sách sử dụng</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
