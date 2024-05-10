import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import all_product from "../Assets/all_product";
import {
  BreadCrum,
  Description,
  ProductDisplay,
  RelatedProducts,
} from "../components";

const Product = () => {
  const { productId } = useParams();

  const product = all_product.find((e) => e.id === Number(productId));

  return (
    <div>
      <BreadCrum product={product} />
      <ProductDisplay product={product} />
      <Description />
      <RelatedProducts />
    </div>
  );
};

export default Product;
