import React from "react";
import Product from "./productItem";
import styles from "./product.module.css";
import Category from "../category/page";
import Banner from "../banner/page";
import { HeartOutlined } from "@ant-design/icons";
// Dữ liệu giả lập (bạn có thể thay thế bằng dữ liệu từ API)
const products = [
  {
    id: 1,
    title: "Điện thoại realme ",
    originalPrice: "20.000.000 VNĐ",
    oldPrice: "25.000.000 VNĐ",
    discount: 20,
    image: "/assets/imgs/realme.jpg",
    category: "Điện Thoai",
  },
  {
    id: 1,
    title: "Điện thoại Samsung S22",
    originalPrice: "20.000.000 VNĐ",
    oldPrice: "25.000.000 VNĐ",
    discount: 20,
    image: "/assets/imgs/realme2.jpg",
    category: "Điện Thoai",
  },
  {
    id: 1,
    title: "Điện thoại Samsung S23",
    originalPrice: "20.000.000 VNĐ",
    oldPrice: "25.000.000 VNĐ",
    discount: 20,
    image: "/assets/imgs/realme3.jpg",
    category: "Điện Thoai",
  },
  {
    id: 1,
    title: "Điện thoại Samsung S24",
    originalPrice: "20.000.000 VNĐ",
    oldPrice: "25.000.000 VNĐ",
    discount: 20,
    image: "/assets/imgs/realme4.jpg",
    category: "Điện Thoai",
  },
  {
    id: 1,
    title: "Điện thoại Samsung S25",
    originalPrice: "20.000.000 VNĐ",
    oldPrice: "25.000.000 VNĐ",
    discount: 20,
    image: "/assets/imgs/realme5.jpg",
    category: "Điện Thoai",
  },
  {
    id: 1,
    title: "Điện thoại Samsung S26",
    originalPrice: "20.000.000 VNĐ",
    oldPrice: "25.000.000 VNĐ",
    discount: 20,
    image: "/assets/imgs/realme6.jpg",
    category: "Điện Thoai",
  },
  {
    id: 1,
    title: "Điện thoại realme ",
    originalPrice: "20.000.000 VNĐ",
    oldPrice: "25.000.000 VNĐ",
    discount: 20,
    image: "/assets/imgs/realme7.jpg",
    category: "Điện Thoai",
  },
  {
    id: 1,
    title: "Điện thoại realme ",
    originalPrice: "20.000.000 VNĐ",
    oldPrice: "25.000.000 VNĐ",
    discount: 20,
    image: "/assets/imgs/realme8.jpg",
    category: "Điện Thoai",
  },
  {
    id: 1,
    title: "Điện thoại realme ",
    originalPrice: "20.000.000 VNĐ",
    oldPrice: "25.000.000 VNĐ",
    discount: 20,
    image: "/assets/imgs/realme9.jpg",
    category: "Điện Thoai",
  },
  {
    id: 1,
    title: "Điện thoại realme ",
    originalPrice: "20.000.000 VNĐ",
    oldPrice: "25.000.000 VNĐ",
    discount: 20,
    image: "/assets/imgs/realme10.jpg",
    category: "Điện Thoai",
  },
  {
    id: 1,
    title: "Điện thoại realme ",
    originalPrice: "20.000.000 VNĐ",
    oldPrice: "25.000.000 VNĐ",
    discount: 20,
    image: "/assets/imgs/realme11.jpg",
    category: "Điện Thoai",
  },
  {
    id: 1,
    title: "Điện thoại realme ",
    originalPrice: "20.000.000 VNĐ",
    oldPrice: "25.000.000 VNĐ",
    discount: 20,
    image: "/assets/imgs/realme12.jpg",
    category: "Điện Thoai",
  },

  {
    id: 1,
    title: "Điện thoại realme ",
    originalPrice: "20.000.000 VNĐ",
    oldPrice: "25.000.000 VNĐ",
    discount: 20,
    image: "/assets/imgs/iphone.jpg",
    category: "Apple",
  },
  {
    id: 1,
    title: "Điện thoại Iphone ",
    originalPrice: "20.000.000 VNĐ",
    oldPrice: "25.000.000 VNĐ",
    discount: 20,
    image: "/assets/imgs/iphone2.jpg",
    category: "Apple",
  },
  {
    id: 1,
    title: "Điện thoại Iphone ",
    originalPrice: "20.000.000 VNĐ",
    oldPrice: "25.000.000 VNĐ",
    discount: 20,
    image: "/assets/imgs/iphone3.jpg",
    category: "Apple",
  },

  {
    id: 1,
    title: "Điện thoại Iphone ",
    originalPrice: "20.000.000 VNĐ",
    oldPrice: "25.000.000 VNĐ",
    discount: 20,
    image: "/assets/imgs/iphone2.jpg",
    category: "Apple",
  },
  {
    id: 1,
    title: "Điện thoại Iphone ",
    originalPrice: "20.000.000 VNĐ",
    oldPrice: "25.000.000 VNĐ",
    discount: 20,
    image: "/assets/imgs/iphone5.jpg",
    category: "Apple",
  },
  {
    id: 1,
    title: "Điện thoại Iphone ",
    originalPrice: "20.000.000 VNĐ",
    oldPrice: "25.000.000 VNĐ",
    discount: 20,
    image: "/assets/imgs/iphone6.jpg",
    category: "Apple",
  },

  {
    id: 1,
    title: "Điện thoại Iphone ",
    originalPrice: "20.000.000 VNĐ",
    oldPrice: "25.000.000 VNĐ",
    discount: 20,
    image: "/assets/imgs/iphone7.jpg",
    category: "Apple",
  },
  {
    id: 1,
    title: "Điện thoại Iphone ",
    originalPrice: "20.000.000 VNĐ",
    oldPrice: "25.000.000 VNĐ",
    discount: 20,
    image: "/assets/imgs/iphone8.jpg",
    category: "Apple",
  },
  {
    id: 1,
    title: "Điện thoại Iphone ",
    originalPrice: "20.000.000 VNĐ",
    oldPrice: "25.000.000 VNĐ",
    discount: 20,
    image: "/assets/imgs/iphone9.jpg",
    category: "Apple",
  },

  {
    id: 1,
    title: "Điện thoại Iphone ",
    originalPrice: "20.000.000 VNĐ",
    oldPrice: "25.000.000 VNĐ",
    discount: 20,
    image: "/assets/imgs/iphone10.jpg",
    category: "Apple",
  },
  {
    id: 1,
    title: "Điện thoại Iphone ",
    originalPrice: "20.000.000 VNĐ",
    oldPrice: "25.000.000 VNĐ",
    discount: 20,
    image: "/assets/imgs/iphone11.jpg",
    category: "Apple",
  },
  {
    id: 1,
    title: "Điện thoại Iphone ",
    originalPrice: "20.000.000 VNĐ",
    oldPrice: "25.000.000 VNĐ",
    discount: 20,
    image: "/assets/imgs/iphone12.jpg",
    category: "Apple",
  },

  {
    id: 1,
    title: "Điện thoại Iphone ",
    originalPrice: "20.000.000 VNĐ",
    oldPrice: "25.000.000 VNĐ",
    discount: 20,
    image: "/assets/imgs/iphone.jpg",
    category: "Apple",
  },
  {
    id: 1,
    title: "Điện thoại Iphone ",
    originalPrice: "20.000.000 VNĐ",
    oldPrice: "25.000.000 VNĐ",
    discount: 20,
    image: "/assets/imgs/iphone.jpg",
    category: "Apple",
  },
  {
    id: 1,
    title: "Điện thoại Iphone ",
    originalPrice: "20.000.000 VNĐ",
    oldPrice: "25.000.000 VNĐ",
    discount: 20,
    image: "/assets/imgs/iphone.jpg",
    category: "Apple",
  },

  {
    id: 1,
    title: "Điện thoại Iphone ",
    originalPrice: "20.000.000 VNĐ",
    oldPrice: "25.000.000 VNĐ",
    discount: 20,
    image: "/assets/imgs/iphone.jpg",
    category: "Apple",
  },
  {
    id: 1,
    title: "Điện thoại Iphone ",
    originalPrice: "20.000.000 VNĐ",
    oldPrice: "25.000.000 VNĐ",
    discount: 20,
    image: "/assets/imgs/iphone.jpg",
    category: "Apple",
  },
  {
    id: 1,
    title: "Điện thoại Iphone ",
    originalPrice: "20.000.000 VNĐ",
    oldPrice: "25.000.000 VNĐ",
    discount: 20,
    image: "/assets/imgs/iphone.jpg",
    category: "Apple",
  },

  {
    id: 1,
    title: "Laptop MSI 2025 ",
    originalPrice: "20.000.000 VNĐ",
    oldPrice: "25.000.000 VNĐ",
    discount: 20,
    image: "/assets/imgs/laptop.jpg",
    category: "Laptop",
  },
  {
    id: 1,
    title: "Laptop MSI 2025 ",
    originalPrice: "20.000.000 VNĐ",
    oldPrice: "25.000.000 VNĐ",
    discount: 20,
    image: "/assets/imgs/laptop2.jpg",
    category: "Laptop",
  },
  {
    id: 1,
    title: "Laptop MSI 2025 ",
    originalPrice: "20.000.000 VNĐ",
    oldPrice: "25.000.000 VNĐ",
    discount: 20,
    image: "/assets/imgs/laptop3.jpg",
    category: "Laptop",
  },
  {
    id: 1,
    title: "Laptop MSI 2025 ",
    originalPrice: "20.000.000 VNĐ",
    oldPrice: "25.000.000 VNĐ",
    discount: 20,
    image: "/assets/imgs/laptop4.jpg",
    category: "Laptop",
  },
  {
    id: 1,
    title: "Laptop MSI 2025 ",
    originalPrice: "20.000.000 VNĐ",
    oldPrice: "25.000.000 VNĐ",
    discount: 20,
    image: "/assets/imgs/laptop5.jpg",
    category: "Laptop",
  },
  {
    id: 1,
    title: "Laptop MSI 2025 ",
    originalPrice: "20.000.000 VNĐ",
    oldPrice: "25.000.000 VNĐ",
    discount: 20,
    image: "/assets/imgs/laptop6.jpg",
    category: "Laptop",
  },
  {
    id: 1,
    title: "Laptop MSI 2025 ",
    originalPrice: "20.000.000 VNĐ",
    oldPrice: "25.000.000 VNĐ",
    discount: 20,
    image: "/assets/imgs/laptop7.jpg",
    category: "Laptop",
  },
  {
    id: 1,
    title: "Laptop MSI 2025 ",
    originalPrice: "20.000.000 VNĐ",
    oldPrice: "25.000.000 VNĐ",
    discount: 20,
    image: "/assets/imgs/laptop8.jpg",
    category: "Laptop",
  },
  {
    id: 1,
    title: "Laptop MSI 2025 ",
    originalPrice: "20.000.000 VNĐ",
    oldPrice: "25.000.000 VNĐ",
    discount: 20,
    image: "/assets/imgs/laptop9.jpg",
    category: "Laptop",
  },
  {
    id: 1,
    title: "Laptop MSI 2025 ",
    originalPrice: "20.000.000 VNĐ",
    oldPrice: "25.000.000 VNĐ",
    discount: 20,
    image: "/assets/imgs/laptop10.jpg",
    category: "Laptop",
  },
  {
    id: 1,
    title: "Laptop MSI 2025 ",
    originalPrice: "20.000.000 VNĐ",
    oldPrice: "25.000.000 VNĐ",
    discount: 20,
    image: "/assets/imgs/laptop11.jpg",
    category: "Laptop",
  },
  {
    id: 1,
    title: "Laptop MSI 2025 ",
    originalPrice: "20.000.000 VNĐ",
    oldPrice: "25.000.000 VNĐ",
    discount: 20,
    image: "/assets/imgs/laptop.jpg",
    category: "Laptop",
  },

  {
    id: 1,
    title: "Phụ Kiện 2025 ",
    originalPrice: "20.000.000 VNĐ",
    oldPrice: "25.000.000 VNĐ",
    discount: 20,
    image: "/assets/imgs/phukien.jpg",
    category: "Phụ Kiện",
  },

  {
    id: 1,
    title: "Phụ Kiện 2025 ",
    originalPrice: "20.000.000 VNĐ",
    oldPrice: "25.000.000 VNĐ",
    discount: 20,
    image: "/assets/imgs/phukien2.jpg",
    category: "Phụ Kiện",
  },
  {
    id: 1,
    title: "Phụ Kiện 2025 ",
    originalPrice: "20.000.000 VNĐ",
    oldPrice: "25.000.000 VNĐ",
    discount: 20,
    image: "/assets/imgs/phukien3.jpg",
    category: "Phụ Kiện",
  },
  {
    id: 1,
    title: "Phụ Kiện 2025 ",
    originalPrice: "20.000.000 VNĐ",
    oldPrice: "25.000.000 VNĐ",
    discount: 20,
    image: "/assets/imgs/phukien4.jpg",
    category: "Phụ Kiện",
  },

  {
    id: 1,
    title: "Phụ Kiện 2025 ",
    originalPrice: "20.000.000 VNĐ",
    oldPrice: "25.000.000 VNĐ",
    discount: 20,
    image: "/assets/imgs/phukien5.jpg",
    category: "Phụ Kiện",
  },
  {
    id: 1,
    title: "Phụ Kiện 2025 ",
    originalPrice: "20.000.000 VNĐ",
    oldPrice: "25.000.000 VNĐ",
    discount: 20,
    image: "/assets/imgs/phukien6.jpg",
    category: "Phụ Kiện",
  },
  {
    id: 1,
    title: "Phụ Kiện 2025 ",
    originalPrice: "20.000.000 VNĐ",
    oldPrice: "25.000.000 VNĐ",
    discount: 20,
    image: "/assets/imgs/phukien7.jpg",
    category: "Phụ Kiện",
  },

  {
    id: 1,
    title: "Phụ Kiện 2025 ",
    originalPrice: "20.000.000 VNĐ",
    oldPrice: "25.000.000 VNĐ",
    discount: 20,
    image: "/assets/imgs/phukien8.jpg",
    category: "Phụ Kiện",
  },
  {
    id: 1,
    title: "Phụ Kiện 2025 ",
    originalPrice: "20.000.000 VNĐ",
    oldPrice: "25.000.000 VNĐ",
    discount: 20,
    image: "/assets/imgs/phukien9.jpg",
    category: "Phụ Kiện",
  },
  {
    id: 1,
    title: "Phụ Kiện 2025 ",
    originalPrice: "20.000.000 VNĐ",
    oldPrice: "25.000.000 VNĐ",
    discount: 20,
    image: "/assets/imgs/phukien10.jpg",
    category: "Phụ Kiện",
  },

  {
    id: 1,
    title: "Phụ Kiện 2025 ",
    originalPrice: "20.000.000 VNĐ",
    oldPrice: "25.000.000 VNĐ",
    discount: 20,
    image: "/assets/imgs/phukien11.jpg",
    category: "Phụ Kiện",
  },
  {
    id: 1,
    title: "Phụ Kiện 2025 ",
    originalPrice: "20.000.000 VNĐ",
    oldPrice: "25.000.000 VNĐ",
    discount: 20,
    image: "/assets/imgs/phukien12.jpg",
    category: "Phụ Kiện",
  },

  {
    id: 1,
    title: "Đồng Hồ 2025 ",
    originalPrice: "20.000.000 VNĐ",
    oldPrice: "25.000.000 VNĐ",
    discount: 20,
    image: "/assets/imgs/dongho.jpg",
    category: "Đồng Hồ",
  },

  {
    id: 1,
    title: "Đồng Hồ 2025 ",
    originalPrice: "20.000.000 VNĐ",
    oldPrice: "25.000.000 VNĐ",
    discount: 20,
    image: "/assets/imgs/dongho2.jpg",
    category: "Đồng Hồ",
  },
  {
    id: 1,
    title: "Đồng Hồ 2025 ",
    originalPrice: "20.000.000 VNĐ",
    oldPrice: "25.000.000 VNĐ",
    discount: 20,
    image: "/assets/imgs/dongho3.jpg",
    category: "Đồng Hồ",
  },

  {
    id: 1,
    title: "Đồng Hồ 2025 ",
    originalPrice: "20.000.000 VNĐ",
    oldPrice: "25.000.000 VNĐ",
    discount: 20,
    image: "/assets/imgs/dongho4.jpg",
    category: "Đồng Hồ",
  },
  {
    id: 1,
    title: "Đồng Hồ 2025 ",
    originalPrice: "20.000.000 VNĐ",
    oldPrice: "25.000.000 VNĐ",
    discount: 20,
    image: "/assets/imgs/dongho5.jpg",
    category: "Đồng Hồ",
  },

  {
    id: 1,
    title: "Đồng Hồ 2025 ",
    originalPrice: "20.000.000 VNĐ",
    oldPrice: "25.000.000 VNĐ",
    discount: 20,
    image: "/assets/imgs/dongho6.jpg",
    category: "Đồng Hồ",
  },
  {
    id: 1,
    title: "Đồng Hồ 2025 ",
    originalPrice: "20.000.000 VNĐ",
    oldPrice: "25.000.000 VNĐ",
    discount: 20,
    image: "/assets/imgs/dongho7.jpg",
    category: "Đồng Hồ",
  },

  {
    id: 1,
    title: "Đồng Hồ 2025 ",
    originalPrice: "20.000.000 VNĐ",
    oldPrice: "25.000.000 VNĐ",
    discount: 20,
    image: "/assets/imgs/dongho8.jpg",
    category: "Đồng Hồ",
  },
  {
    id: 1,
    title: "Đồng Hồ 2025 ",
    originalPrice: "20.000.000 VNĐ",
    oldPrice: "25.000.000 VNĐ",
    discount: 20,
    image: "/assets/imgs/dongho9.jpg",
    category: "Đồng Hồ",
  },

  {
    id: 1,
    title: "Đồng Hồ 2025 ",
    originalPrice: "20.000.000 VNĐ",
    oldPrice: "25.000.000 VNĐ",
    discount: 20,
    image: "/assets/imgs/dongho10.jpg",
    category: "Đồng Hồ",
  },
  {
    id: 1,
    title: "Đồng Hồ 2025 ",
    originalPrice: "20.000.000 VNĐ",
    oldPrice: "25.000.000 VNĐ",
    discount: 20,
    image: "/assets/imgs/dongho11.jpg",
    category: "Đồng Hồ",
  },

  {
    id: 1,
    title: "Đồng Hồ 2025 ",
    originalPrice: "20.000.000 VNĐ",
    oldPrice: "25.000.000 VNĐ",
    discount: 20,
    image: "/assets/imgs/dongho12.jpg",
    category: "Đồng Hồ",
  },
  {
    id: 1,
    title: "Đồng Hồ 2025 ",
    originalPrice: "20.000.000 VNĐ",
    oldPrice: "25.000.000 VNĐ",
    discount: 20,
    image: "/assets/imgs/dongho.jpg",
    category: "Đồng Hồ",
  },
  {
    id: 1,
    title: "Đồng Hồ 2025 ",
    originalPrice: "20.000.000 VNĐ",
    oldPrice: "25.000.000 VNĐ",
    discount: 20,
    image: "/assets/imgs/dongho.jpg",
    category: "Đồng Hồ",
  },
];

interface ListProductProps {
  selectedCategory: string; // Nhận category đã chọn
}

const ListProduct: React.FC<ListProductProps> = ({ selectedCategory }) => {
  const filteredProducts = products.filter(
    (product) => product.category === selectedCategory
  );

  const visibleProducts = filteredProducts.slice(0, 12);
  return (
    <div style={{ maxHeight: "783px", overflow: "hidden" }}>
      <div className={styles.listproduct}>
        {visibleProducts.map((product) => (
          <Product
            key={product.id} // Sử dụng id duy nhất cho key
            title={product.title}
            originalPrice={product.originalPrice}
            oldPrice={product.oldPrice}
            discount={product.discount}
            image={product.image}
          />
        ))}
      </div>
    </div>
  );
};

export default ListProduct;
