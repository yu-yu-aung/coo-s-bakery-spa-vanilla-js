export const createNewCategoryBtn = (categoryName) => {
  const btn = document.createElement("button");

  btn.className = "bg-transparent rounded w-[100px] px-3 py-1 text-end";
  btn.innerText = categoryName;
  return btn;
};
