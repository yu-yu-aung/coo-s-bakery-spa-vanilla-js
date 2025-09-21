import { categoryList } from "./selectors";

export const createNewCategoryBtn = (category) => {
  const btn = document.createElement("button");

  btn.className =
    "rounded-lg px-4 py-2 w-full text-end hover:bg-blue-100 hover:border-blue-300 active:bg-blue-100 active:border-blue-300 duration-200";
  btn.setAttribute("category-id", category.id);
  btn.innerText = category.title;
  return btn;
};

export const renderCategory = (inputCategories) => {
  categoryList.innerHTML = "";
  inputCategories.forEach((category) => {
    if (category.id === 0) {
      const btn = createNewCategoryBtn(category);
      btn.classList.add(
        "bg-blue-100",
        "border",
        "border-blue-300",
        "text-blue-800"
      );
      categoryList.append(btn);
    } else {
      categoryList.append(createNewCategoryBtn(category));
    }
  });
};
