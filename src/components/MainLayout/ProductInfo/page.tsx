import Header from "@/components/MainLayout/header/page";
import Footer from "@/components/MainLayout/footer/page";
import ProductInfoLeft from "./components/ProductInfoLeft";
import ProductInfoRight from "./components/ProductInfoRight";
import ProductInfoTop from "./components/ProductInfoTop";


const ProductInfo = () => {
  return (
    <>
      <Header />
      <div style={{ backgroundColor: "#F2F4F7" }}>
        <ProductInfoTop/>

        <div
          className="main-content"
          style={{ display: "flex",boxSizing:'border-box' ,gap:'20px'}}
        >
          <ProductInfoLeft />
          <ProductInfoRight />
        </div>
      </div>

      <Footer />
    </>
  );
};

export default ProductInfo;
