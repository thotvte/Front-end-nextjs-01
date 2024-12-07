// NewsCard.js
import React from "react";
import Image from "next/image";

interface NewsCardProps {
  imageSrc: string;
  title: string;
  description: string;
}

const NewsCard: React.FC<NewsCardProps> = ({
  imageSrc,
  title,
  description,
}) => {
  return (
    <div style={{ width: "270px" }}>
      <Image
        src={imageSrc}
        alt={title}
        width={270}
        height={162}
        style={{ borderRadius: "5px" }}
      />
      <p style={{ fontSize: "1.2rem" }}>{description}</p>
    </div>
  );
};

export default NewsCard;
