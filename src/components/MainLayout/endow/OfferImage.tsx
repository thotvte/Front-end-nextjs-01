import Image from "next/image";

interface OfferImageProps {
  src: string;
  alt: string;
}

const OfferImage: React.FC<OfferImageProps> = ({ src, alt }) => (
  <Image
    src={src}
    alt={alt}
    width={288}
    height={467}
    style={{ cursor: "pointer", borderRadius: "5px" }}
  />
);

export default OfferImage;
