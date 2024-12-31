import React from "react";
import { fetchCategories } from "@/store/actions/thunkActions/productThunkActions";
import CategoryCard from "./CategoryCard";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function Categories() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);
  const categories = useSelector((state) => state.product.categories);
  const topCategories = [...categories]
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 5);
  return (
    <div>
      {topCategories.map((category) => {
        return <CategoryCard key={category.id} category={category} />;
      })}
    </div>
  );
}
