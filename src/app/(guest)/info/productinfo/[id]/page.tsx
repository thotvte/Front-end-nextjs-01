import ProductInfo from "@/components/MainLayout/ProductInfo/page";

const ProductInfoPage = ({ params }: { params: { id: string } }) => {
  const { id } = params;
  return (
    <>
      <ProductInfo id={id} />
    </>
  );
};

export default ProductInfoPage;
