import { motion,  AnimatePresence } from "framer-motion";
import { useState } from "react";
import styled from "styled-components";
import ProductImage from "./ProductImage";
// import { IMAGES } from "../../constants";
// import dar2 from '../../assets/darg2.jpg'

const Gallery = () => {

  const [productIds, setProductIds] = useState([222, 999, 666,358,777,456,987]);
  const [primaryProduct, setPrimaryProduct] = useState(555);
  const setAsPrimary = (index) => {
    const currentProductId = primaryProduct;
    const newProductIds = [
      ...productIds.filter((x) => x !== index),
      currentProductId,
    ];
    setPrimaryProduct(index);
    setProductIds(newProductIds);
  };
  return (
    <Container>
      <PrimaryContainer>
        <AnimatePresence>
          <PrimaryProductImage
            key={primaryProduct}
            src={`https://picsum.photos/id/${primaryProduct}/1280/620`}
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
    </Container>
  );
};
export default Gallery;

const Container = styled.div`
  font-family: sans-serif;
  max-width: 1280px;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 620px;
  overflow: hidden;
`;
const PrimaryContainer = styled.main`
  height: 620px;
  min-width: 1070px;
  border-radius: 1rem;
  position: relative;
`;
const PrimaryProductImage = styled(motion.img)`
  height: 70%;
  width: 100%;
  object-fit: cover;
  border-radius: 1rem;
  position: absolute;
  top: 0;
  left: 0;
`;
const ProductGallery = styled.aside`
  display: flex;
  flex-direction: column;
  height: 620px;
  z-index: 1;
`;
const ProductGalleryFirstChild = styled(ProductGallery)`
  margin-top: 0;
`;
