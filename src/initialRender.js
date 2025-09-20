import { createNewCategoryBtn } from "./category";
import { categories, products } from "./constants";
import createProductCard from "./product";
import { categoryList, productList } from "./selectors";

const initialRender = () => {
  categories.forEach((category) => {
    categoryList.append(createNewCategoryBtn(category.title));
  });

  products.forEach((product) => {
    productList.append(createProductCard(product));
  });
};

export default initialRender;
