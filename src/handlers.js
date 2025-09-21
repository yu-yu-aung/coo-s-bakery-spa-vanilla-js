import { createNewCategoryBtn } from "./category";
import { categories, products } from "./constants";
import { createProductCard, renderProduct } from "./product";
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
  const newCategory = {
    id: categories[categories.length - 1].id + 1,
    title: formData.get("new-category-name"),
  };
  categoryList.append(createNewCategoryBtn(newCategory));
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

export const handleSearchForm = (e) => {
  e.preventDefault();

  const formData = new FormData(e.target);
  console.log(formData.get("search"));

  e.target.reset();
};

export const handleSearch = (e) => {
  // if (e.key === "Enter") {
  //   console.log(e.target.value);
  // }

  const q = e.target.value;
  renderProduct(products.filter((el) => el.name.toLowerCase().search(q) != -1));
};

export const handleCategoryList = (e) => {
  const clickedCategory = e.target.innerText;

  //Remove Classes
  categoryList.childNodes.forEach((el) => {
    el.classList.remove(
      "bg-blue-100",
      "border",
      "border-blue-300",
      "text-blue-800"
    );
  });

  //Add Classes to Active Btn
  e.target.classList.add(
    "bg-blue-100",
    "border",
    "border-blue-300",
    "text-blue-800"
  );
  if (clickedCategory === "All") {
    renderProduct(products);
  } else {
    renderProduct(products.filter((el) => el.category === clickedCategory));
  }
};
