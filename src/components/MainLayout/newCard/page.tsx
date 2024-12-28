
import React from "react";
import NewsList from "./newsList";

const newsData = [
  {
    imageSrc: "/assets/imgs/vieon.jpg",
    title:
      "Mua điện thoại Android, tặng gói VieON VIP đến 3 - 6 tháng, thời gian có hạn",
    description:
      "Mua điện thoại Android, tặng gói VieON VIP đến 3 - 6 tháng, thời gian có hạn",
  },
  {
    imageSrc: "/assets/imgs/new1.jpg",
    title: "Tin tức mới nhất về công nghệ smartphone",
    description:
      "Hơn 3.000 cửa hàng TGDĐ và ĐMX trên toàn quốc sẽ chính thức trở thành điểm giao dịch tiện lợi, hoạt động như cây ATM",
  },
  {
    imageSrc: "/assets/imgs/honor.jpg",
    title: "Lễ hội âm nhạc lớn nhất mùa hè 2024",
    description:
      "Trên tay HONOR Magic V3 tại Việt Nam: Thiết kế mỏng gọn ấn tượng, chip Snapdragon 8 Gen 3, camera 50 MP",
  },
  {
    imageSrc: "/assets/imgs/tiktok.jpg",
    title: "Mới nhất: Chiến dịch bảo vệ môi trường toàn cầu",
    description:
      "Hướng dẫn cách tạo anime từ ảnh bằng TikTok AI siêu đẹp mà bạn chắc chắn nên thử",
  },
];

const News: React.FC = () => {
  return (
    <div
      className="main-content"
      style={{
        marginTop: "20px ",
        borderRadius: "15px",
        background: "#FFFFFF",
        height: "300px",
        padding: " 15px 0 0 20px",
      }}
    >
      <NewsList newsData={newsData} />
    </div>
  );
};

export default News;
