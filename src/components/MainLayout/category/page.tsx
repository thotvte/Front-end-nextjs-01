// MainContent.tsx
import React from "react";
import CategoryNav from "./categoryNav"; // Import component CategoryNav

const Category: React.FC = () => {
  const categories = ["Điện Thoai", "Apple", "Laptop", "Phụ Kiện", "Đồng hồ"];

  return (
    <div>
      <CategoryNav categories={categories} />
    </div>
  );
};

export default Category;
