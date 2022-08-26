import { faker } from "@faker-js/faker";
import avatarPic from "./assets/images/avatar2.png";
import p1 from "./assets/images/products/p1.png";
import p2 from "./assets/images/products/p2.png";
import p3 from "./assets/images/products/p3.png";
import p4 from "./assets/images/products/p4.png";

export let NavConfig = {
  logo: ["The", "Products"],
  pages: ["Home", "About", "Products", "Testimonial", "Shop"],
};

export let PopularProductsList = [
  {
    image: '/static/mock-images/products/product_1.jpg',
    name: "Nike Jordan-100",
    rating: 4.5,
    price: 20.2,
  },
  {
    image: '/static/mock-images/products/product_2.jpg',
    name: "Nike Jordan-100",
    rating: 4.5,
    price: 20.2,
  },
  {
    image: '/static/mock-images/products/product_3.jpg',
    name: "Nike Jordan-100",
    rating: 4.5,
    price: 20.2,
  },
  {
    image: '/static/mock-images/products/product_4.jpg',
    name: "Nike Jordan-100",
    rating: 4.5,
    price: 20.2,
  },
];
export const testimonialsList = [
  {
    name: "Mr Partil",
    avtar: avatarPic,
    rating: "⭐⭐⭐⭐⭐",
    review:
      "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica",
  },
  {
    name: "Mr Partil",
    avtar: avatarPic,
    rating: "⭐⭐⭐⭐⭐",
    review:
      "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica",
  },
  {
    name: "Mr Partil",
    avtar: avatarPic,
    rating: "⭐⭐⭐⭐⭐",
    review:
      "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica",
  },
  {
    name: "Mr Partil",
    avtar: avatarPic,
    rating: "⭐⭐⭐⭐⭐",
    review:
      "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica",
  },
  {
    name: "Mr Partil",
    avtar: avatarPic,
    rating: "⭐⭐⭐⭐⭐",
    review:
      "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica",
  },
  {
    name: "Mr Partil",
    avatar: avatarPic,
    rating: "⭐⭐⭐⭐⭐",
    review:
      "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica",
  },
];

const PRODUCT_COLOR = [
  "#00AB55",
  "#000000",
  "#FFFFFF",
  "#FFC0CB",
  "#FF4842",
  "#1890FF",
  "#94D82D",
  "#FFC107",
];
const PRODUCT_METADATA = {
  "Nike Air Force 1 NDESTRUKT": {
    price: 43,
    priceSale: 21,
    colors: PRODUCT_COLOR,
    status: "sale",
  },
  "Nike Space Hippie 04": {
    price: 43,
    priceSale: 21,
    colors: PRODUCT_COLOR,
    status: "sale",
  },
  "Nike Air Zoom Pegasus 37 A.I.R. Chaz Bear": {
    price: 43,
    priceSale: 21,
    colors: PRODUCT_COLOR,
    status: "sale",
  },
  "Nike Blazer Low 77 Vintage": {
    price: 43,
    priceSale: 21,
    colors: PRODUCT_COLOR,
    status: "sale",
  },
  "Nike ZoomX SuperRep Surge": {
    price: 43,
    priceSale: 21,
    colors: PRODUCT_COLOR,
    status: "sale",
  },
  "Zoom Freak 2": {
    price: 43,
    priceSale: 21,
    colors: PRODUCT_COLOR,
    status: "sale",
  },
  "Nike Air Max Zephyr": {
    price: 43,
    priceSale: 21,
    colors: PRODUCT_COLOR,
    status: "sale",
  },
  "Jordan Delta": {
    price: 43,
    priceSale: 21,
    colors: PRODUCT_COLOR,
    status: "sale",
  },
  "Air Jordan XXXV PF": {
    price: 43,
    priceSale: 21,
    colors: PRODUCT_COLOR,
    status: "sale",
  },
  "Nike Waffle Racer Crater": {
    price: 43,
    priceSale: 21,
    colors: PRODUCT_COLOR,
    status: "sale",
  },
  "Kyrie 7 EP Sisterhood": {
    price: 43,
    priceSale: 21,
    colors: PRODUCT_COLOR,
    status: "sale",
  },
  "Nike Air Zoom BB NXT": {
    price: 43,
    priceSale: 21,
    colors: PRODUCT_COLOR,
    status: "sale",
  },
  "Nike Air Force 1 07 LX": {
    price: 43,
    priceSale: 21,
    colors: PRODUCT_COLOR,
    status: "sale",
  },
  "Nike Air Force 1 Shadow SE": {
    price: 43,
    priceSale: 21,
    colors: PRODUCT_COLOR,
    status: "sale",
  },
  "Nike Air Zoom Tempo NEXT%": {
    price: 43,
    priceSale: 21,
    colors: PRODUCT_COLOR,
    status: "sale",
  },
  "Nike DBreak-Type": {
    price: 43,
    priceSale: 21,
    colors: PRODUCT_COLOR,
    status: "sale",
  },
  "Nike Air Max Up": {
    price: 43,
    priceSale: 21,
    colors: PRODUCT_COLOR,
    status: "sale",
  },
  "Nike Air Max 270 React ENG": {
    price: 43,
    priceSale: 21,
    colors: PRODUCT_COLOR,
    status: "sale",
  },
  "NikeCourt Royale": {
    price: 43,
    priceSale: 21,
    colors: PRODUCT_COLOR,
    status: "sale",
  },
  "Nike Air Zoom Pegasus 37 Premium": {
    price: 43,
    priceSale: 21,
    colors: PRODUCT_COLOR,
    status: "sale",
  },
  "Nike Air Zoom SuperRep": {
    price: 43,
    priceSale: 21,
    colors: PRODUCT_COLOR,
    status: "sale",
  },
  "NikeCourt Royale": {
    price: 43,
    priceSale: 21,
    colors: PRODUCT_COLOR,
    status: "sale",
  },
  "Nike React Art3mis": {
    price: 43,
    priceSale: 21,
    colors: PRODUCT_COLOR,
    status: "sale",
  },
  "Nike React Infinity Run Flyknit A.I.R. Chaz Bear": {
    price: 43,
    priceSale: 21,
    colors: PRODUCT_COLOR,
    status: "sale",
  },
};


export const products = Object.keys(PRODUCT_METADATA).map((_, i) => {
  return {
    id: faker.datatype.uuid(),
    cover: `/static/mock-images/products/product_${i + 1}.jpg`,
    image: `/static/mock-images/products/product_${i + 1}.jpg`,
    name: _,
    price: PRODUCT_METADATA[_].price,
    priceSale: PRODUCT_METADATA[_].priceSale,
    colors: PRODUCT_METADATA[_].colors,
    status: PRODUCT_METADATA[_].status,
  };
});
