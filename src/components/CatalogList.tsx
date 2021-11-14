import React, { FC, useState } from "react";
import List from "./List";
import CatalogItem from "./CatalogItem";
import productsJson from "../assets/products.json";
import { IProduct } from "../types/types";
import brandJson from "../assets/brands.json";
import { useTypedSelector } from "../hooks/useTypedSelector";

const CatalogList = () => {
  const { brand } = useTypedSelector(state => state.filter);
  return (
    <List
      items={brand === null ? productsJson : productsJson.filter((product:IProduct) => product.brand === brand)}
      renderItem={(product: IProduct) => (
        <CatalogItem
          key={product.id}
          brand={brandJson.find((brand) => brand.id === product.brand)?.title}
          product={product}
        />
      )}
    />
  );
};

export default CatalogList;
