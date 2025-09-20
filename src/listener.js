import {
  handleCreateCategoryForm,
  handleCreateProductForm,
  handleTheme,
} from "./handlers";
import { categoryForm, productForm, themeToggleBtn } from "./selectors";

const listener = () => {
  themeToggleBtn.addEventListener("click", handleTheme);
  categoryForm.addEventListener("submit", handleCreateCategoryForm);
  productForm.addEventListener("submit", handleCreateProductForm);
};

export default listener;
