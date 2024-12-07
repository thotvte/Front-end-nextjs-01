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
    <footer className={styles.footer}>
      <div className={styles.mainContent}>
        <div className={styles.row}>
          {/* Column 1 */}
          <div className={`${styles.column} ${styles.firstColumn}`}>
            <Image
              src={logo}
              alt="Lesson."
              style={{ width: "100px", marginLeft: "-10px" }} // Inline style for logo image (optional, can be moved to CSS if desired)
            />
            <p className={styles.desc}>
              Need to help for your dream Career? trust us. With Lesson, study
              becomes a lot easier with us.
            </p>

            <div className={styles.socials}>
              <a href="#!" className={styles.link}>
                <Image
                  src={twitter}
                  alt="Twitter"
                  className={styles.socialIcon}
                />
              </a>
              <a href="#!" className={styles.link}>
                <Image
                  src={facebook}
                  alt="Facebook"
                  className={styles.socialIcon}
                />
              </a>
              <a href="#!" className={styles.link}>
                <Image
                  src={linkedin}
                  alt="Linkedin"
                  className={styles.socialIcon}
                />
              </a>
              <a href="#!" className={styles.link}>
                <Image
                  src={instagram}
                  alt="Instagram"
                  className={styles.socialIcon}
                />
              </a>
            </div>
          </div>

          {/* Column 2 */}
          <div className={styles.column}>
            <h3 className={styles.title}>Company</h3>
            <ul className={styles.list}>
              <li className={styles.listItem}>
                <a href="#!" className={styles.link}>
                  About Us
                </a>
              </li>
              <li className={styles.listItem}>
                <a href="#!" className={styles.link}>
                  Features
                </a>
              </li>
              <li className={styles.listItem}>
                <a href="#!" className={styles.link}>
                  Our Pricing
                </a>
              </li>
              <li className={styles.listItem}>
                <a href="#!" className={styles.link}>
                  Latest News
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3 */}
          <div className={styles.column}>
            <h3 className={styles.title}>Support</h3>
            <ul className={styles.list}>
              <li className={styles.listItem}>
                <a href="#!" className={styles.link}>
                  FAQ’s
                </a>
              </li>
              <li className={styles.listItem}>
                <a href="#!" className={styles.link}>
                  Terms & Conditions
                </a>
              </li>
              <li className={styles.listItem}>
                <a href="#!" className={styles.link}>
                  Privacy Policy
                </a>
              </li>
              <li className={styles.listItem}>
                <a href="#!" className={styles.link}>
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4 */}
          <div className={styles.column}>
            <h3 className={styles.title}>Address</h3>
            <ul className={styles.list}>
              <li className={styles.listItem}>
                <a href="#!" className={styles.link}>
                  <strong className={styles.listStrong}>Location:</strong> 27
                  Division St, New York, NY 10002, USA
                </a>
              </li>
              <li className={styles.listItem}>
                <a href="#!" className={styles.link}>
                  <strong className={styles.listStrong}>Email:</strong>{" "}
                  email@gmail.com
                </a>
              </li>
              <li className={styles.listItem}>
                <a href="#!" className={styles.link}>
                  <strong className={styles.listStrong}>Phone:</strong> + 000
                  1234 567
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className={styles.copyright}>
          <p className={styles.copyrightText}>
            © 2018. Công ty cổ phần Lesson. GPDKKD: 012345678 do sở KH & ĐT
            TP.HCM cấp ngày 02/01/2007. GPMXH: 238/GP-BTTTT do Bộ Thông Tin và
            Truyền Thông cấp ngày 04/06/2020. Địa chỉ: 128 Trần Quang Khải,
            P.Tân Định, Q.1, TP.Hồ Chí Minh. Địa chỉ liên hệ và gửi chứng từ: Lô
            T2-1.2, Đường D1, Đ. D1, P.Tân Phú, TP.Thủ Đức, TP.Hồ Chí Minh. Điện
            thoại: 01234567. Email: abc@gmail.com. Chịu trách nhiệm nội dung:
            Huỳnh Văn B. Email: abc@gmail.com.{" "}
            <a href="#!">Xem chính sách sử dụng</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
