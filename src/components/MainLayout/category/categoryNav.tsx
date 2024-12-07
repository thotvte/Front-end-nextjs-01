import React from "react";
import styles from "./CategoryNav.module.css";

interface CategoryNavProps {
  categories: string[];
}

const CategoryNav: React.FC<CategoryNavProps> = ({ categories }) => {
  return (
    <div className={styles.navContainer}>
      {categories.map((category, index) => (
        <span key={index} className={styles.navItem}>
          {category}
        </span>
      ))}
    </div>
  );
};

export default CategoryNav;
