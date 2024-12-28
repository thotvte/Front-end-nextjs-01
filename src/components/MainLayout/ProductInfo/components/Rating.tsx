import {
  CheckCircleOutlined,
  HeartOutlined,
  LikeOutlined,
  StarOutlined,
} from "@ant-design/icons";
import styles from "../styles.module.css";

const Rating = () => {
  return (
    <div className={styles.rating}>
      <div className={styles.boxrate}>
        <h2 className={styles.boxrateTitle}>
          Đánh giá Adapter Sạc Type C PD 25W Samsung EP-T2510N
        </h2>
        <div className={styles.boxrateTop}>
          <div className={styles.boxStar}>
            <div className={styles.point}>
              <div className={styles.pointAverage}>
                <i className={styles.iconcmtAllstar}>
                  <StarOutlined style={{ fontSize: 18 }} />
                </i>
                <div className={styles.pointAverageContainer}>
                  <p className={styles.pointAverageScore}>4.9</p>
                  <p className={styles.pointAverageTotal}>/5</p>
                </div>
              </div>
              <div className={styles.pointSatisfiedContainer}>
                <p className={styles.pointSatisfied}>557,7 Khách hài lòng</p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                >
                  <g clip-path="url(#clip0_1047_52609)">
                    <path
                      d="M6.05967 6.00065C6.21641 5.5551 6.52578 5.17939 6.93298 4.94007C7.34018 4.70076 7.81894 4.61328 8.28446 4.69313C8.74998 4.77297 9.17222 5.015 9.47639 5.37634C9.78057 5.73767 9.94705 6.195 9.94634 6.66732C9.94634 8.00065 7.94634 8.66732 7.94634 8.66732M7.99967 11.334H8.00634M14.6663 8.00065C14.6663 11.6826 11.6816 14.6673 7.99967 14.6673C4.31778 14.6673 1.33301 11.6826 1.33301 8.00065C1.33301 4.31875 4.31778 1.33398 7.99967 1.33398C11.6816 1.33398 14.6663 4.31875 14.6663 8.00065Z"
                      stroke="#98A2B3"
                      stroke-width="1.33333"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                  </g>
                  <defs>
                    <clipPath id="clip0_1047_52609">
                      <rect width="16" height="16" fill="white"></rect>
                    </clipPath>
                  </defs>
                </svg>

                <div className={styles.pointExplain}>
                  <b>Ai là khách hàng hài lòng</b>
                  <span>
                    Gồm các khách hàng đã đánh giá 5 sao và khách hàng mua hàng
                    nhưng chưa đánh giá từ 01/2022.
                  </span>
                </div>
              </div>
              <span className={styles.pointAlltimerate}>50 đánh giá</span>
            </div>

            <ul className={styles.rateList}>
              <li>
                <div className={styles.numberStar}>
                  5 <StarOutlined style={{ fontSize: 11, color: "#FF9F00" }} />
                </div>

                <div className={styles.timelineStar}>
                  <p className={styles.timing} style={{ width: "100%" }}></p>
                </div>
                <span className={styles.numberPercent}>100%</span>
              </li>

              <li>
                <div className={styles.numberStar}>
                  4 <StarOutlined style={{ fontSize: 11, color: "#FF9F00" }} />
                </div>

                <div className={styles.timelineStar}>
                  <p className={styles.timing} style={{ width: "0%" }}></p>
                </div>
                <span className={styles.numberPercent}>0%</span>
              </li>
              <li>
                <div className={styles.numberStar}>
                  3 <StarOutlined style={{ fontSize: 11, color: "#FF9F00" }} />
                </div>

                <div className={styles.timelineStar}>
                  <p className={styles.timing} style={{ width: "0%" }}></p>
                </div>
                <span className={styles.numberPercent}>0%</span>
              </li>
              <li>
                <div className={styles.numberStar}>
                  2 <StarOutlined style={{ fontSize: 11, color: "#FF9F00" }} />
                </div>

                <div className={styles.timelineStar}>
                  <p className={styles.timing} style={{ width: "0%" }}></p>
                </div>
                <span className={styles.numberPercent}>0%</span>
              </li>
              <li>
                <div className={styles.numberStar}>
                  1 <StarOutlined style={{ fontSize: 11, color: "#FF9F00" }} />
                </div>

                <div className={styles.timelineStar}>
                  <p className={styles.timing} style={{ width: "0%" }}></p>
                </div>
                <span className={styles.numberPercent}>0%</span>
              </li>
            </ul>
          </div>
        </div>

        <div className={styles.rtList}>
          <ul>
            <li className={styles.par}>
              <div>
                <p className={styles.cmtTopName}>Long</p>

                <div className={styles.confirmBuy}>
                  <CheckCircleOutlined style={{ marginRight: "5px" }} />
                  Đã mua tại LESSON
                </div>
              </div>
              <div className={styles.cmtIntro}>
                <div className={styles.cmtTopStar}>
                  <StarOutlined
                    style={{
                      fontSize: 11,
                      color: "#FF9F00",
                      marginRight: "2px",
                    }}
                  />

                  <StarOutlined
                    style={{
                      fontSize: 11,
                      color: "#FF9F00",
                      marginRight: "2px",
                    }}
                  />

                  <StarOutlined
                    style={{
                      fontSize: 11,
                      color: "#FF9F00",
                      marginRight: "2px",
                    }}
                  />

                  <StarOutlined
                    style={{
                      fontSize: 11,
                      color: "#FF9F00",
                      marginRight: "2px",
                    }}
                  />

                  <StarOutlined
                    style={{
                      fontSize: 11,
                      color: "#FF9F00",
                      marginRight: "2px",
                    }}
                  />
                </div>

                <p className={styles.txtIntro}>
                  <HeartOutlined style={{ color: "red", marginRight: "4px" }} />
                  sẽ giới thiệt cho bạn bè và người thân
                </p>
              </div>

              <div className={styles.cmtContent}>
                <p> Rất Tuyệt :3</p>
              </div>
              <div className={styles.cmtCommand}>
                <a href="#!">
                  <LikeOutlined style={{ color: "#C7C7C7" }} /> Hữu ích (2)
                </a>

                <span className={styles.cmtd}>Đã dùng khoảng 3 tháng</span>
              </div>
            </li>

            <li className={styles.par}>
              <div>
                <p className={styles.cmtTopName}>Long</p>

                <div className={styles.confirmBuy}>
                  <CheckCircleOutlined style={{ marginRight: "5px" }} />
                  Đã mua tại LESSON
                </div>
              </div>
              <div className={styles.cmtIntro}>
                <div className={styles.cmtTopStar}>
                  <StarOutlined
                    style={{
                      fontSize: 11,
                      color: "#FF9F00",
                      marginRight: "2px",
                    }}
                  />

                  <StarOutlined
                    style={{
                      fontSize: 11,
                      color: "#FF9F00",
                      marginRight: "2px",
                    }}
                  />

                  <StarOutlined
                    style={{
                      fontSize: 11,
                      color: "#FF9F00",
                      marginRight: "2px",
                    }}
                  />

                  <StarOutlined
                    style={{
                      fontSize: 11,
                      color: "#FF9F00",
                      marginRight: "2px",
                    }}
                  />

                  <StarOutlined
                    style={{
                      fontSize: 11,
                      color: "#FF9F00",
                      marginRight: "2px",
                    }}
                  />
                </div>

                {/* <p className={styles.txtIntro}>
                  <HeartOutlined style={{ color: "red", marginRight: "4px" }} />
                  sẽ giới thiệt cho bạn bè và người thân
                </p> */}
              </div>

              <div className={styles.cmtContent}>
                <p> GOOD!! </p>
              </div>
              <div className={styles.cmtCommand}>
                <a href="#!">
                  <LikeOutlined style={{ color: "#C7C7C7" }} /> Hữu ích (2)
                </a>

                <span className={styles.cmtd}>Đã dùng khoảng 1 tháng</span>
              </div>
            </li>
          </ul>
          <div className={styles.boxFlex}>
            <a href="#!" className={styles.btnViewAll}>
              Xem 50 đánh giá
            </a>
            <div className={styles.btnWrite}>Viết đánh giá</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rating;
