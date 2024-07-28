export interface ICatalog {
  catalog: ICategoryItem[];
}

export interface ICategoryItem {
  strCategory: string;
  strCategoryThumb: string;
  strCategoryDescription: string;
  idCategory: string;
}
