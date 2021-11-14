import React, { ButtonHTMLAttributes, FC } from "react";
import { IBrand } from "../types/types";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { useActions } from "../hooks/useActions";
import cn from 'classnames';
interface FilterItemProps {
  item: IBrand;
}

const FilterItem: FC<FilterItemProps> = ({ item }) => {
  const { brand } = useTypedSelector(state => state.filter);
  const { setFilter } = useActions();
  const filterItemClick: React.MouseEventHandler<HTMLSpanElement> = () => {
    if (item.id !== brand) {
      setFilter(item.id)
    }
  };
  return <div className="filter-item" >
    <span className={cn("filter-item_title", {"active": item.id === brand})} onClick={filterItemClick}>{item.title}</span>
  </div>;
};

export default FilterItem;
