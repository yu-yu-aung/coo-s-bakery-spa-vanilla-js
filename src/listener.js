import {
  handleCategoryList,
  handleCreateCategoryForm,
  handleCreateProductForm,
  handleSearch,
  handleSearchForm,
  handleTheme,
} from "./handlers";
import {
  categoryForm,
  categoryList,
  productForm,
  searchForm,
  searchInput,
  themeToggleBtn,
} from "./selectors";

const listener = () => {
  themeToggleBtn.addEventListener("click", handleTheme);
  categoryForm.addEventListener("submit", handleCreateCategoryForm);
  productForm.addEventListener("submit", handleCreateProductForm);
  searchForm.addEventListener("submit", handleSearchForm);
  searchInput.addEventListener("keyup", handleSearch);
  categoryList.addEventListener("click", handleCategoryList);
};

export default listener;
