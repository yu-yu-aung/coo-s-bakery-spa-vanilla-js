import { renderCategory } from "./category";
import { categories, products } from "./constants";
import { renderProduct } from "./product";

const initialRender = () => {
  renderCategory(categories);

  renderProduct(products);
};

export default initialRender;
