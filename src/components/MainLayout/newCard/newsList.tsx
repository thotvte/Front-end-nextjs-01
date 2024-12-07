// NewsList.tsx
import React from "react";
import NewsCard from "./newsCard";
import { HeartOutlined } from "@ant-design/icons";

// Định nghĩa kiểu cho mỗi bài tin trong newsData
interface NewsItem {
  imageSrc: string;
  title: string;
  description: string;
}

interface NewsListProps {
  newsData: NewsItem[];
}

const NewsList: React.FC<NewsListProps> = ({ newsData }) => {
  return (
    <div style={{ cursor: "pointer" }}>
      <span
        style={{
          display: "flex",
          fontSize: "1.8rem",
          fontWeight: "600",
          paddingBottom: "20px",
        }}
      >
        <HeartOutlined style={{ color: "red", paddingRight: "10px" }} /> Bài tin
      </span>

      <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
        {newsData.map((news, index) => (
          <NewsCard
            key={index}
            imageSrc={news.imageSrc}
            title={news.title}
            description={news.description}
          />
        ))}
      </div>
    </div>
  );
};

export default NewsList;
