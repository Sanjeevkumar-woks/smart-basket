import "./MainCategoryList.css";
import { MainCategoryCard } from "../MainCategoryCard/MainCategoryCard";
import { MainCategoriesCardColor } from "./constant";
import { main_categories } from "./MainCategoryItems";

export function MainCategoryList() {

    console.log(main_categories)
  return (
    <>
      <div className="MainCategoryHeading">Inspiration for your first order</div>
      <div className="MainCategoryContainer">
        {main_categories.map((mainCategory, i) => {
          return (
            <MainCategoryCard
              key={mainCategory._id}
              CardData={mainCategory}
              BGColor={MainCategoriesCardColor[i]}
            />
          );
        })}
      </div>
    </>
  );
}
