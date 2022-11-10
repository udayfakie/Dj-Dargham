import styled from "styled-components";
import { motion } from "framer-motion";


const ProductImage = ({ id, onExpand }) => {
  return (
    <RelatedProductImageFirstChild
      src={`https://picsum.photos/id/${id}/200/200`}
      alt=""
      onClick={() => onExpand(id)}
      layoutId={`product-${id}`}
    />
  );
};

export default ProductImage;
const RelatedProductImage = styled(motion.img)`
  border-radius: 10px;
  margin: 5px;
`;
const RelatedProductImageFirstChild = styled(RelatedProductImage)`
  margin-top: 0;
`;
