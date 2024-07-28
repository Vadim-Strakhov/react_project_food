import { Link } from "react-router-dom";
import { ICategoryItem } from "../types";

export const CategoryItem = (props: ICategoryItem) => {
  const { strCategory, strCategoryThumb, strCategoryDescription } = props;

  return (
    <div className="card">
      <div className="card-image">
        <img src={strCategoryThumb} alt={strCategory} />
      </div>
      <div className="card-content">
        <span className="card-title">{strCategory}</span>
        <p>{strCategoryDescription.slice(0, 60)}...</p>
      </div>
      <div className="card-action">
        <Link to={`/category/${strCategory}`} className="btn purple darken-4">
          Watch category
        </Link>
      </div>
    </div>
  );
};
