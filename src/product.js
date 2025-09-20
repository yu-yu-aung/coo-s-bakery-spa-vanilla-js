import { productTemplate } from "./selectors";

const createProductCard = ({ name, price, category }) => {
  const productCard = productTemplate.content.cloneNode(true);
  productCard.querySelector(".product-name").innerText = name;
  productCard.querySelector(".product-category").innerText = price;
  productCard.querySelector(".product-price").innerText = category;

  return productCard;
};

export default createProductCard;
