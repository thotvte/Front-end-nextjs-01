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
    title: "Điện thoại Samsung S21",
    originalPrice: "20.000.000 VNĐ",
    oldPrice: "25.000.000 VNĐ",
    discount: 20,
    image: "/assets/imgs/realme.jpg",
    category: "Điện Thoai",
  },
  {
    id: 1,
    title: "Điện thoại Samsung S21",
    originalPrice: "20.000.000 VNĐ",
    oldPrice: "25.000.000 VNĐ",
    discount: 20,
    image: "/assets/imgs/realme.jpg",
    category: "Điện Thoai",
  },
  {
    id: 1,
    title: "Điện thoại Samsung S21",
    originalPrice: "20.000.000 VNĐ",
    oldPrice: "25.000.000 VNĐ",
    discount: 20,
    image: "/assets/imgs/realme.jpg",
    category: "Điện Thoai",
  },
  {
    id: 1,
    title: "Điện thoại Samsung S21",
    originalPrice: "20.000.000 VNĐ",
    oldPrice: "25.000.000 VNĐ",
    discount: 20,
    image: "/assets/imgs/realme.jpg",
    category: "Điện Thoai",
  },
  {
    id: 1,
    title: "Điện thoại Samsung S21",
    originalPrice: "20.000.000 VNĐ",
    oldPrice: "25.000.000 VNĐ",
    discount: 20,
    image: "/assets/imgs/realme.jpg",
    category: "Điện Thoai",
  },
  {
    id: 1,
    title: "Điện thoại Samsung S21",
    originalPrice: "20.000.000 VNĐ",
    oldPrice: "25.000.000 VNĐ",
    discount: 20,
    image: "/assets/imgs/realme.jpg",
    category: "Điện Thoai",
  },
  {
    id: 1,
    title: "Điện thoại Samsung S21",
    originalPrice: "20.000.000 VNĐ",
    oldPrice: "25.000.000 VNĐ",
    discount: 20,
    image: "/assets/imgs/realme.jpg",
    category: "Điện Thoai",
  },
  {
    id: 1,
    title: "Điện thoại Samsung S21",
    originalPrice: "20.000.000 VNĐ",
    oldPrice: "25.000.000 VNĐ",
    discount: 20,
    image: "/assets/imgs/realme.jpg",
    category: "Điện Thoai",
  },
  {
    id: 1,
    title: "Điện thoại Samsung S21",
    originalPrice: "20.000.000 VNĐ",
    oldPrice: "25.000.000 VNĐ",
    discount: 20,
    image: "/assets/imgs/realme.jpg",
    category: "Điện Thoai",
  },
  {
    id: 1,
    title: "Điện thoại Samsung S21",
    originalPrice: "20.000.000 VNĐ",
    oldPrice: "25.000.000 VNĐ",
    discount: 20,
    image: "/assets/imgs/realme.jpg",
    category: "Điện Thoai",
  },
  {
    id: 1,
    title: "Điện thoại Samsung S21",
    originalPrice: "20.000.000 VNĐ",
    oldPrice: "25.000.000 VNĐ",
    discount: 20,
    image: "/assets/imgs/realme.jpg",
    category: "Điện Thoai",
  },
  {
    id: 1,
    title: "Điện thoại Samsung S21",
    originalPrice: "20.000.000 VNĐ",
    oldPrice: "25.000.000 VNĐ",
    discount: 20,
    image: "/assets/imgs/realme.jpg",
    category: "Điện Thoai",
  },

  {
    id: 1,
    title: "Điện thoại Samsung S21",
    originalPrice: "20.000.000 VNĐ",
    oldPrice: "25.000.000 VNĐ",
    discount: 20,
    image: "/assets/imgs/iphone.jpg",
    category: "Apple",
  },
  {
    id: 1,
    title: "Điện thoại Samsung S21",
    originalPrice: "20.000.000 VNĐ",
    oldPrice: "25.000.000 VNĐ",
    discount: 20,
    image: "/assets/imgs/iphone.jpg",
    category: "Apple",
  },
  {
    id: 1,
    title: "Điện thoại Samsung S21",
    originalPrice: "20.000.000 VNĐ",
    oldPrice: "25.000.000 VNĐ",
    discount: 20,
    image: "/assets/imgs/iphone.jpg",
    category: "Apple",
  },

  {
    id: 1,
    title: "Điện thoại Samsung S21",
    originalPrice: "20.000.000 VNĐ",
    oldPrice: "25.000.000 VNĐ",
    discount: 20,
    image: "/assets/imgs/iphone.jpg",
    category: "Apple",
  },
  {
    id: 1,
    title: "Điện thoại Samsung S21",
    originalPrice: "20.000.000 VNĐ",
    oldPrice: "25.000.000 VNĐ",
    discount: 20,
    image: "/assets/imgs/iphone.jpg",
    category: "Apple",
  },
  {
    id: 1,
    title: "Điện thoại Samsung S21",
    originalPrice: "20.000.000 VNĐ",
    oldPrice: "25.000.000 VNĐ",
    discount: 20,
    image: "/assets/imgs/iphone.jpg",
    category: "Apple",
  },

  {
    id: 1,
    title: "Điện thoại Samsung S21",
    originalPrice: "20.000.000 VNĐ",
    oldPrice: "25.000.000 VNĐ",
    discount: 20,
    image: "/assets/imgs/iphone.jpg",
    category: "Apple",
  },
  {
    id: 1,
    title: "Điện thoại Samsung S21",
    originalPrice: "20.000.000 VNĐ",
    oldPrice: "25.000.000 VNĐ",
    discount: 20,
    image: "/assets/imgs/iphone.jpg",
    category: "Apple",
  },
  {
    id: 1,
    title: "Điện thoại Samsung S21",
    originalPrice: "20.000.000 VNĐ",
    oldPrice: "25.000.000 VNĐ",
    discount: 20,
    image: "/assets/imgs/iphone.jpg",
    category: "Apple",
  },

  {
    id: 1,
    title: "Điện thoại Samsung S21",
    originalPrice: "20.000.000 VNĐ",
    oldPrice: "25.000.000 VNĐ",
    discount: 20,
    image: "/assets/imgs/iphone.jpg",
    category: "Apple",
  },
  {
    id: 1,
    title: "Điện thoại Samsung S21",
    originalPrice: "20.000.000 VNĐ",
    oldPrice: "25.000.000 VNĐ",
    discount: 20,
    image: "/assets/imgs/iphone.jpg",
    category: "Apple",
  },
  {
    id: 1,
    title: "Điện thoại Samsung S21",
    originalPrice: "20.000.000 VNĐ",
    oldPrice: "25.000.000 VNĐ",
    discount: 20,
    image: "/assets/imgs/iphone.jpg",
    category: "Apple",
  },

  {
    id: 1,
    title: "Điện thoại Samsung S21",
    originalPrice: "20.000.000 VNĐ",
    oldPrice: "25.000.000 VNĐ",
    discount: 20,
    image: "/assets/imgs/iphone.jpg",
    category: "Apple",
  },
  {
    id: 1,
    title: "Điện thoại Samsung S21",
    originalPrice: "20.000.000 VNĐ",
    oldPrice: "25.000.000 VNĐ",
    discount: 20,
    image: "/assets/imgs/iphone.jpg",
    category: "Apple",
  },
  {
    id: 1,
    title: "Điện thoại Samsung S21",
    originalPrice: "20.000.000 VNĐ",
    oldPrice: "25.000.000 VNĐ",
    discount: 20,
    image: "/assets/imgs/iphone.jpg",
    category: "Apple",
  },

  {
    id: 1,
    title: "Điện thoại Samsung S21",
    originalPrice: "20.000.000 VNĐ",
    oldPrice: "25.000.000 VNĐ",
    discount: 20,
    image: "/assets/imgs/iphone.jpg",
    category: "Apple",
  },
  {
    id: 1,
    title: "Điện thoại Samsung S21",
    originalPrice: "20.000.000 VNĐ",
    oldPrice: "25.000.000 VNĐ",
    discount: 20,
    image: "/assets/imgs/iphone.jpg",
    category: "Apple",
  },
  {
    id: 1,
    title: "Điện thoại Samsung S21",
    originalPrice: "20.000.000 VNĐ",
    oldPrice: "25.000.000 VNĐ",
    discount: 20,
    image: "/assets/imgs/iphone.jpg",
    category: "Apple",
  },

  {
    id: 1,
    title: "Điện thoại Samsung S21",
    originalPrice: "20.000.000 VNĐ",
    oldPrice: "25.000.000 VNĐ",
    discount: 20,
    image: "/assets/imgs/laptop.jpg",
    category: "Laptop",
  },

  {
    id: 1,
    title: "Điện thoại Samsung S21",
    originalPrice: "20.000.000 VNĐ",
    oldPrice: "25.000.000 VNĐ",
    discount: 20,
    image: "/assets/imgs/phukien.jpg",
    category: "Phụ Kiện",
  },

  {
    id: 1,
    title: "Điện thoại Samsung S21",
    originalPrice: "20.000.000 VNĐ",
    oldPrice: "25.000.000 VNĐ",
    discount: 20,
    image: "/assets/imgs/phukien.jpg",
    category: "Phụ Kiện",
  },
  {
    id: 1,
    title: "Điện thoại Samsung S21",
    originalPrice: "20.000.000 VNĐ",
    oldPrice: "25.000.000 VNĐ",
    discount: 20,
    image: "/assets/imgs/phukien.jpg",
    category: "Phụ Kiện",
  },

  {
    id: 1,
    title: "Điện thoại Samsung S21",
    originalPrice: "20.000.000 VNĐ",
    oldPrice: "25.000.000 VNĐ",
    discount: 20,
    image: "/assets/imgs/dongho.jpg",
    category: "Đồng Hồ",
  },

  {
    id: 1,
    title: "Điện thoại Samsung S21",
    originalPrice: "20.000.000 VNĐ",
    oldPrice: "25.000.000 VNĐ",
    discount: 20,
    image: "/assets/imgs/dongho.jpg",
    category: "Đồng Hồ",
  },
  {
    id: 1,
    title: "Điện thoại Samsung S21",
    originalPrice: "20.000.000 VNĐ",
    oldPrice: "25.000.000 VNĐ",
    discount: 20,
    image: "/assets/imgs/dongho.jpg",
    category: "Đồng Hồ",
  },

  {
    id: 1,
    title: "Điện thoại Samsung S21",
    originalPrice: "20.000.000 VNĐ",
    oldPrice: "25.000.000 VNĐ",
    discount: 20,
    image: "/assets/imgs/dongho.jpg",
    category: "Đồng Hồ",
  },
  {
    id: 1,
    title: "Điện thoại Samsung S21",
    originalPrice: "20.000.000 VNĐ",
    oldPrice: "25.000.000 VNĐ",
    discount: 20,
    image: "/assets/imgs/dongho.jpg",
    category: "Đồng Hồ",
  },

  {
    id: 1,
    title: "Điện thoại Samsung S21",
    originalPrice: "20.000.000 VNĐ",
    oldPrice: "25.000.000 VNĐ",
    discount: 20,
    image: "/assets/imgs/dongho.jpg",
    category: "Đồng Hồ",
  },
  {
    id: 1,
    title: "Điện thoại Samsung S21",
    originalPrice: "20.000.000 VNĐ",
    oldPrice: "25.000.000 VNĐ",
    discount: 20,
    image: "/assets/imgs/dongho.jpg",
    category: "Đồng Hồ",
  },

  {
    id: 1,
    title: "Điện thoại Samsung S21",
    originalPrice: "20.000.000 VNĐ",
    oldPrice: "25.000.000 VNĐ",
    discount: 20,
    image: "/assets/imgs/dongho.jpg",
    category: "Đồng Hồ",
  },
  {
    id: 1,
    title: "Điện thoại Samsung S21",
    originalPrice: "20.000.000 VNĐ",
    oldPrice: "25.000.000 VNĐ",
    discount: 20,
    image: "/assets/imgs/dongho.jpg",
    category: "Đồng Hồ",
  },

  {
    id: 1,
    title: "Điện thoại Samsung S21",
    originalPrice: "20.000.000 VNĐ",
    oldPrice: "25.000.000 VNĐ",
    discount: 20,
    image: "/assets/imgs/dongho.jpg",
    category: "Đồng Hồ",
  },
  {
    id: 1,
    title: "Điện thoại Samsung S21",
    originalPrice: "20.000.000 VNĐ",
    oldPrice: "25.000.000 VNĐ",
    discount: 20,
    image: "/assets/imgs/dongho.jpg",
    category: "Đồng Hồ",
  },

  {
    id: 1,
    title: "Điện thoại Samsung S21",
    originalPrice: "20.000.000 VNĐ",
    oldPrice: "25.000.000 VNĐ",
    discount: 20,
    image: "/assets/imgs/dongho.jpg",
    category: "Đồng Hồ",
  },
  {
    id: 1,
    title: "Điện thoại Samsung S21",
    originalPrice: "20.000.000 VNĐ",
    oldPrice: "25.000.000 VNĐ",
    discount: 20,
    image: "/assets/imgs/dongho.jpg",
    category: "Đồng Hồ",
  },
  {
    id: 1,
    title: "Điện thoại Samsung S21",
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
