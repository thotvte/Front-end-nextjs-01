import {
  DollarOutlined,
  DownOutlined,
  QrcodeOutlined,
} from "@ant-design/icons";
import styles from "../cart.module.css";
import { useState } from "react";
import { notification } from "antd";
import { useSession } from "next-auth/react";

const Paycart = () => {
  const { data: session, status } = useSession();
  const [isAgree, setIsAgree] = useState(false);
  const handleAgreeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsAgree(event.target.checked); // Cập nhật trạng thái khi checkbox thay đổi
    console.log(isAgree);
  };

  const handleSubmit = () => {
    if (
      session?.user.name === "Không xác định" ||
      session?.user.phone === "Không xác định" ||
      session?.user.address === "Không xác định"
    ) {
      notification.error({
        message: "Đặt hàng thất bại bại!!!",
        description: `Bạn vui lòng cung cấp thông tin cá nhân như: Tên - Số điện thoại - Địa chỉ `,
        placement: "bottomRight", // Vị trí của thông báo
      });
    } else if (!isAgree) {
      notification.error({
        message: "Đặt hàng thất bại bại!!!",
        description: `Bạn vui lòng đồng ý với Chính sách xử lý dữ liệu cá nhân của LESSON`,
        placement: "bottomRight", // Vị trí của thông báo
      });
    } else {
      notification.success({
        message: "Đặt hàng thành công <3",
        description: `Bạn vui lòng kiểm tra đơn hàng <3`,
        placement: "bottomRight", // Vị trí của thông báo
      });
    }
  };
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
              <input
                type="checkbox"
                name="agree"
                id="agree"
                checked={isAgree}
                onChange={handleAgreeChange}
              />
              <span>
                Tôi đồng ý với <a href="#!">Chính sách xử lý dữ liệu cá nhân</a>{" "}
                của LESSON
              </span>
            </div>
            <button className={styles.button} onClick={handleSubmit}>
              Đặt hàng
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Paycart;
