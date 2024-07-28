import { CategoryItem } from "./CategoryItem";
import { ICatalog } from "../types";

export const CategoryList = ({ catalog = [] }: ICatalog) => {
  return (
    <div className="list">
      {catalog.map((el) => (
        <CategoryItem key={el.idCategory} {...el} />
      ))}
    </div>
  );
};
