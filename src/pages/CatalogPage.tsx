import React, { FC } from "react";
import Filter from "../components/Filter";
import Catalog from "../components/Catalog";
import Header from "../components/Header";
const CatalogPage: FC = () => {
  return (<>
    <Header />
    <div className="catalog-page">
      <Filter />
      <Catalog />
    </div>
  </>
  );
};

export default CatalogPage;
