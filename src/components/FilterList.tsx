import React, { useState } from "react";
import brandsJson from "../assets/brands.json";
import { useActions } from "../hooks/useActions";
import { IBrand } from "../types/types";
import FilterItem from "./FilterItem";
import List from "./List";
import cn from 'classnames'
import { useTypedSelector } from "../hooks/useTypedSelector";

function FilterList() {
  const { brand } = useTypedSelector(state => state.filter);
  const { clearFilter } = useActions();
  return (
    <>
      <div className="filter-item">
        <span onClick={clearFilter} className={cn("filter-item_title",{"active":brand === null})}>All Brands</span>
      </div>
      <List
        items={brandsJson}
        renderItem={(brand: IBrand) => (
          <FilterItem
            key={brand.id}
            item={brand}
          />
        )}
      />
    </>
  );
}

export default FilterList;
