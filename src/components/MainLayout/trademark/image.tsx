import Image from "next/image";
import React from "react";

interface imageProps {
  src: string;
  alt: string;
}

const Img: React.FC<imageProps> = ({ src, alt }) => {
  return (
    <Image
      src={src}
      alt={alt}
      width={1170}
      height={380}
      style={{ cursor: "pointer", borderRadius: "15px" }}
    />
  );
};

export default Img;
