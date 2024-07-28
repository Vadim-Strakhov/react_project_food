import { IMealList } from "../types";
import { Meal } from "./Meal";

export const MealList = ({ meals }: IMealList) => {
  return (
    <div className="list">
      {meals.map((meal) => (
        <Meal key={meal.idMeal} {...meal} />
      ))}
    </div>
  );
};
