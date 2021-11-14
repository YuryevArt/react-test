import React, { FC } from "react";
import PlusCircle from "../assets/images/PlusCircle";
import { useActions } from "../hooks/useActions";
import { IProduct } from "../types/types";
interface CatalogItemProps {
  product: IProduct;
  brand?: string;
}

const CatalogItem: FC<CatalogItemProps> = ({ product, brand }) => {
  const { addProductCart } = useActions()
  return (
    <div className="col-sm-4 col-md-3 col-lg-20 col-xl-10 catalog-list-item">
      <div className="catalog-list-item-block card">
        <div onClick={() => addProductCart(product)} className="catalog-list-item-block-picture">
          <img
            className="catalog-list-item-block-picture-img"
            src={require(`../assets${product.image}`)?.default}
            alt={require(`../assets${product.image}`)?.default}
          />
          <PlusCircle />
        </div>
        <div>{product.title}</div>
        <div>{brand}</div>
        <div>
          {product.regular_price.currency} {product.regular_price.value}
        </div>
      </div>
    </div>
  );
};

export default CatalogItem;
