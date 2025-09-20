import { createNewCategoryBtn } from "./category";
import createProductCard from "./product";
import {
  categoryList,
  productList,
  productTemplate,
  themeToggleDarkIcon,
  themeToggleLightIcon,
} from "./selectors";

export const handleTheme = () => {
  // toggle icons inside button
  themeToggleDarkIcon.classList.toggle("hidden");
  themeToggleLightIcon.classList.toggle("hidden");

  // if set via local storage previously
  if (localStorage.getItem("color-theme")) {
    if (localStorage.getItem("color-theme") === "light") {
      document.documentElement.classList.add("dark");
      localStorage.setItem("color-theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("color-theme", "light");
    }

    // if NOT set via local storage previously
  } else {
    if (document.documentElement.classList.contains("dark")) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("color-theme", "light");
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("color-theme", "dark");
    }
  }
};

export const handleCreateCategoryForm = (e) => {
  e.preventDefault();
  const formData = new FormData(e.target);
  categoryList.append(createNewCategoryBtn(formData.get("new-category-name")));
  e.target.reset();
  document.querySelector(`[data-drawer-hide="create-category-drawer"]`).click();
};

export const handleCreateProductForm = (e) => {
  e.preventDefault();
  const formData = new FormData(e.target);

  // const productCard = productTemplate.content.cloneNode(true);
  // productCard.querySelector(".product-name").innerText =
  //   formData.get("product-name");
  // productCard.querySelector(".product-category").innerText =
  //   formData.get("selected-category");
  // productCard.querySelector(".product-price").innerText =
  //   formData.get("product-price");

  productList.append(
    createProductCard({
      name: formData.get("product-name"),
      price: formData.get("product-price"),
      category: formData.get("selected-category"),
    })
  );
  e.target.reset();
  document.querySelector(`[data-drawer-hide="create-product-drawer"]`).click();
};
