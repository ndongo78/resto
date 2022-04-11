export type AllProducts = {
    id: number;
    name: string;
    price: number;
    composition: string;
    image: string;
    sauces:string[];
}[];

export type SingleProduct = {
    id: number;
    name: string;
    price: number;
    composition: string;
    image: string;
    sauces:string[];
}