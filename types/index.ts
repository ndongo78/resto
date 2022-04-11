export type AllProducts = {
  id: number;
  name: string;
  price: number;
  composition: string;
  image: string;
  sauces: string[];
}[];

export type SingleProduct = {
  id: number;
  name: string;
  price: number;
  composition: string;
  image: string;
  sauces: string[];
};

export type Cart = {
  id: number;
  name: string;
  price: number;
  composition: string;
  image: string;
  sauces: string[];
  quantity: number;
}[];

export type ProductCart = {
  id: number;
  name: string;
  price: number;
  composition: string;
  image: string;
  sauces: string[];
  quantity: number;
};
