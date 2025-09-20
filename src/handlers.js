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

  // Get ImageURL from Uploaded Image
  const imageFile = formData.get("new-product-image");
  let imageURL = "";
  if (imageFile && imageFile instanceof File && imageFile.size > 0) {
    imageURL = URL.createObjectURL(imageFile);
  }

  productList.append(
    createProductCard({
      name: formData.get("product-name"),
      price: formData.get("product-price"),
      category: formData.get("selected-category"),
      image: imageURL,
    })
  );
  e.target.reset();
  document.querySelector(`[data-drawer-hide="create-product-drawer"]`).click();
};
