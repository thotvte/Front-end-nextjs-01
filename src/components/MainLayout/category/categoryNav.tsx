import React from "react";
import styles from "./CategoryNav.module.css";

interface CategoryNavProps {
  categories: string[];
  onCategorySelect: (category: string) => void;
}

const CategoryNav: React.FC<CategoryNavProps> = ({
  categories,
  onCategorySelect,
}) => {
  return (
    <div className={styles.navContainer}>
      {categories.map((category) => (
        <span
          key={category}
          className={styles.navItem}
          onClick={() => onCategorySelect(category)}
        >
          {category}
        </span>
      ))}
    </div>
  );
};

export default CategoryNav;
