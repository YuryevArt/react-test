import React from "react";
import CatalogList from "./CatalogList";

const Catalog = () => {
  return (
    <div className="catalog">
      <div className="catalog_title">Catalog</div>
      <div className="catalog-list row">
        <CatalogList />
      </div>
    </div>
  );
};

export default Catalog;
