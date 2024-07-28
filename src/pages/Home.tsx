import { getAllCategories } from "../api";
import { useLocation, useHistory } from "react-router-dom";
import { useState, useEffect } from "react";
import { Preloader } from "../components/Preloader";
import { CategoryList } from "../components/CategoryList";
import { Search } from "../components/Search";
import { ICategoryItem } from "../types";

export const Home = () => {
  const [catalog, setCatalog] = useState<ICategoryItem[]>([]);
  const [filteredCatalog, setFilteredCatalog] = useState<ICategoryItem[]>([]);

  const { pathname, search } = useLocation();
  const { push } = useHistory();

  const handleSearch = (str: string) => {
    setFilteredCatalog(
      catalog.filter((item) =>
        item.strCategory.toLowerCase().includes(str.toLowerCase())
      )
    );
    push({
      pathname,
      search: `?search=${str}`,
    });
  };

  useEffect(() => {
    getAllCategories().then((data) => {
      setCatalog(data.categories);
      setFilteredCatalog(
        search
          ? data.categories.filter((item: ICategoryItem) =>
              item.strCategory
                .toLowerCase()
                .includes(search.split("=")[1].toLowerCase())
            )
          : data.categories
      );
    });
  }, [search]);

  return (
    <>
      <Search cb={handleSearch} />{" "}
      {!catalog.length ? (
        <Preloader />
      ) : (
        <CategoryList catalog={filteredCatalog} />
      )}
    </>
  );
};
