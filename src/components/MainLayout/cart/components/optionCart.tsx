import { useState } from "react";
import { RightOutlined } from "@ant-design/icons";
import styles from "../cart.module.css";
import Image from "next/image";
import coupon from "../../../../../public/assets/icons/coupon.png";

const OptionCart = () => {
  const [isOtherRequestChecked, setIsOtherRequestChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsOtherRequestChecked(!isOtherRequestChecked);
  };

  return (
    <div className={styles.options}>
      <div className={styles.option}>
        <div className={styles.opt}>
          <div className={styles.opts}>
            <p className={styles.optionTitle}>Yêu cầu đặc biệt</p>
            <div className={styles.optionItem}>
              <div className={styles.customernote}>
                <input type="checkbox" name="invoice" id="invoice" />
                <span>Xuất hóa đơn công ty</span>
              </div>
              <div className={styles.customernote}>
                <input
                  type="checkbox"
                  name="otherRequest"
                  id="otherRequest"
                  checked={isOtherRequestChecked}
                  onChange={handleCheckboxChange}
                />
                <span>Yêu cầu khác</span>
              </div>
              {isOtherRequestChecked && (
                <div className={styles.customernoteInput}>
                  <input
                    className={styles.customernoteInputCustomer}
                    type="text"
                    placeholder="Nhập yêu cầu của bạn"
                    name="cusNote"
                    id="cusNote"
                    required
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className={styles.opt}>
        <div className={styles.promotioncodebox}>
          <div className={styles.coupon}>
            <Image src={coupon} alt="Coupon" height={20} width={20} />
            <p>Sử dụng mã giảm giá</p>
          </div>
          <RightOutlined style={{ color: "#63A8EE" }} />
        </div>
      </div>

      <div className={styles.opt}>
        <div className={styles.areaTotal}>
          <div className={styles.totalPrice}>
            <strong>Tổng tiền</strong>
            <strong>1.890.000đ</strong>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OptionCart;
