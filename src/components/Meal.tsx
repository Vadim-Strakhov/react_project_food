import { Link } from "react-router-dom";
import { IMeal } from "../types";

export const Meal = (props: IMeal) => {
  const { strMeal, strMealThumb, idMeal } = props;
  return (
    <div className="card">
      <div className="card-image">
        <img src={strMealThumb} alt={strMeal} />
      </div>
      <div className="card-content">
        <span className="card-title">{strMeal}</span>
      </div>
      <div className="card-action">
        <Link to={`/meal/${idMeal}`} className="btn purple darken-4">
          Watch recipe
        </Link>
      </div>
    </div>
  );
};
