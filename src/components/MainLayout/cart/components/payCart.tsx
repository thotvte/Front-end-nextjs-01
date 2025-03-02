import {
  DollarOutlined,
  DownOutlined,
  QrcodeOutlined,
} from "@ant-design/icons";
import styles from "../cart.module.css";
import { useState } from "react";
import { notification } from "antd";
import { useSession } from "next-auth/react";
import Cart from "../page";
import axios from "axios";

interface PaycartProps {
  cart: Cart;
}

const Paycart: React.FC<PaycartProps> = ({ cart }) => {
  const { data: session, status } = useSession();
  const [isAgree, setIsAgree] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState("");

  console.log(cart.products);

  const handleAgreeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsAgree(event.target.checked); // Cập nhật trạng thái khi checkbox thay đổi
  };

  const handlePaymentChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPaymentMethod(event.target.value); // Cập nhật phương thức thanh toán đã chọn
  };

  cart.products.map((item) => {
    console.log(item.productId._id);
    console.log(item.quantity);
  });

  const handleSubmit = async () => {
    if (
      session?.user.name === "Không xác định" ||
      session?.user.phone === "Không xác định" ||
      session?.user.address === "Không xác định"
    ) {
      notification.error({
        message: "Đặt hàng thất bại!!!",
        description: `Bạn vui lòng cung cấp thông tin cá nhân như: Tên - Số điện thoại - Địa chỉ `,
        placement: "bottomRight",
      });
    } else if (!isAgree) {
      notification.error({
        message: "Đặt hàng thất bại!!!",
        description: `Bạn vui lòng đồng ý với Chính sách xử lý dữ liệu cá nhân của LESSON`,
        placement: "bottomRight",
      });
    } else if (!paymentMethod) {
      notification.error({
        message: "Đặt hàng thất bại!!!",
        description: `Bạn vui lòng chọn phương thức thanh toán.`,
        placement: "bottomRight",
      });
    } else if (paymentMethod === "bank") {
      notification.error({
        message: "Đặt hàng thất bại!!!",
        description: `Phương thức "Chuyển khoản ngân hàng" hiện đang phát triển. Vui lòng chọn "Thanh toán khi nhận hàng`,
        placement: "bottomRight",
      });
    } else {
      if (!session?.user?.access_token) {
        console.error("Không có token, yêu cầu không thể thực hiện.");
        return;
      }
      const orderData = {
        user: session?.user._id, // Gửi ID người dùng
        products: cart.products.map((product) => ({
          productId: product.productId._id, // Gửi productId
          quantity: product.quantity, // Gửi số lượng
        })),
      };

      // console.log(orderData);
      try {
        const response = await axios.post(
          `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/orders`,

          orderData,

          {
            headers: {
              Authorization: `Bearer ${session.user.access_token}`,
            },
          }
        );
        notification.success({
          message: "Đặt hàng thành công <3",
          description: `Bạn vui lòng kiểm tra đơn hàng <3`,
          placement: "bottomRight",
        });
        console.log(
          "Sản phẩm đã được thêm số lương sản phẩm +1:",
          response.data
        );
      } catch (error) {
        console.error("Lỗi khi thêm sản phẩm vào giỏ hàng:", error);
      }
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
                <input
                  type="radio"
                  name="paymentMethod"
                  id="cash"
                  value="cash"
                  onChange={handlePaymentChange} // Cập nhật khi người dùng chọn phương thức thanh toán
                />{" "}
                <DollarOutlined style={{ color: "#63A8EE" }} />{" "}
                <p>Thanh toán bằng tiền mặt khi nhận hàng</p>
              </li>
              <li>
                <input
                  type="radio"
                  name="paymentMethod"
                  id="bank"
                  value="bank"
                  onChange={handlePaymentChange} // Cập nhật khi người dùng chọn phương thức thanh toán
                />{" "}
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
            <button className={styles.button} onClick={() => handleSubmit()}>
              Đặt hàng
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Paycart;
