import { productList, productTemplate } from "./selectors";

export const createProductCard = ({ name, price, category, image }) => {
  const productCard = productTemplate.content.cloneNode(true);
  productCard.querySelector(".product-name").innerText = name;
  productCard.querySelector(".product-category").innerText = category;
  productCard.querySelector(".product-image").src = image;
  productCard.querySelector(".product-price").innerText = price;

  return productCard;
};

export const renderProduct = (inputProducts) => {
  productList.innerHTML = "";
  inputProducts.forEach((product) => {
    productList.append(createProductCard(product));
  });
};
