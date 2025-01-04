// Category.tsx
import React, { useState } from "react";
import CategoryNav from "./categoryNav"; // Import CategoryNav
import ListProduct from "../products/listProduct"; // Import ListProduct

const Category: React.FC = () => {
  const categories = ["Điện Thoai", "Apple", "Laptop", "Phụ Kiện", "Đồng Hồ"];
  const [selectedCategory, setSelectedCategory] =
    useState<string>("Điện Thoai"); // Lưu trữ category đã chọn

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category); // Cập nhật category khi người dùng chọn
  };

  return (
    <div>
      <CategoryNav
        categories={categories}
        onCategorySelect={handleCategoryChange}
      />
      <ListProduct selectedCategory={selectedCategory} />
    </div>
  );
};

export default Category;
