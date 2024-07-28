export interface IRecipe {
  idMeal: string;
  strMeal: string;
  strCategory: string;
  strArea?: string;
  strInstructions: string;
  [key: string]: string | undefined;
  strYoutube?: string;
}
