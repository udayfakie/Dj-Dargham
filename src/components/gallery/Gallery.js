import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import styled from "styled-components";
import ProductImage from "./ProductImage";
import { IMAGES, img } from "../../constants";
// import InstagramApi from "./InstagramApi";

const Gallery = () => {
  const [productIds, setProductIds] = useState(IMAGES);
  const [primaryProduct, setPrimaryProduct] = useState(img);
  const setAsPrimary = (id) => {
    const currentProductId = primaryProduct;
    const newProductIds = [
      ...productIds.filter((x) => x !== id),
      currentProductId,
    ];

    setPrimaryProduct(id);
    setProductIds(newProductIds);
  };
  return (
    <Container>
      <SubContainer>
        <PrimaryContainer>
          <AnimatePresence>
            <PrimaryProductImage
              key={primaryProduct}
              src={primaryProduct}
              alt=""
              layoutId={`product-${primaryProduct}`}
            />
          </AnimatePresence>
        </PrimaryContainer>
        <ProductGalleryFirstChild>
          <AnimatePresence>
            {productIds.map((id) => (
              <ProductImage id={id} key={id} onExpand={setAsPrimary} />
            ))}
          </AnimatePresence>
        </ProductGalleryFirstChild>
        <div>
          {/* <InstagramApi /> */}
        </div>
      </SubContainer>
    </Container>
  );
};
export default Gallery;

const Container = styled.div`
  height: 100vh;
  width: 100%;
`;
const SubContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: row;
  align-items: center;
  overflow: hidden;
  height: 600px;
`;
const PrimaryContainer = styled.main`
  display: flex;
  height: 100vh;
  width: 50%;
  border-radius: 11rem;
  position: relative;
`;
const PrimaryProductImage = styled(motion.img)`
  display: flex;
  height: 100%;
  width: 100%;
  object-fit: cover;
  position: absolute;
  border-radius: 1rem;
  top: 0;
  left: 0;
  @media (max-width: 577px) {
    display: none;
  }
`;
const ProductGallery = styled.aside`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 250px;
  z-index: 1;
  @media (max-width: 577px) {
    width: 100%;
    height: auto;
  }
`;
const ProductGalleryFirstChild = styled(ProductGallery)`
  margin-top: 0;
`;
