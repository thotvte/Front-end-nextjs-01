import {
  DollarOutlined,
  DownOutlined,
  QrcodeOutlined,
} from "@ant-design/icons";
import styles from "../cart.module.css";

const Paycart = () => {
  return (
    <div className={styles.pays}>
      <div className={styles.payItem}>
        <div className={styles.payPay}>
          <span>Hình thức thanh toán</span>
          <div>
            <ul className={styles.payNew}>
              <li>
                {/* Sử dụng radio button thay vì checkbox */}
                <input type="radio" name="paymentMethod" id="cash" />{" "}
                <DollarOutlined style={{ color: "#63A8EE" }} />{" "}
                <p>Thanh toán bằng tiền mặt khi nhận hàng</p>
              </li>
              <li>
                <input type="radio" name="paymentMethod" id="bank" />{" "}
                <QrcodeOutlined style={{ color: "#63A8EE" }} />{" "}
                <p>Chuyển khoản ngân hàng</p>
              </li>
            </ul>
            <div className={styles.classShowmore}>
              <span>
                Các hình thức thanh toán khác <DownOutlined />
              </span>
            </div>

            <div className={styles.textSecurityPolicy}>
              <input type="checkbox" name="agree" id="agree" />
              <span>
                Tôi đồng ý với <a href="#!">Chính sách xử lý dữ liệu cá nhân</a>{" "}
                của LESSON
              </span>
            </div>
            <button className={styles.button}>Đặt hàng</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Paycart;
