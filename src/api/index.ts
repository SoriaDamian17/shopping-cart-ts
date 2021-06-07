import { CartItemType } from "../ts/types/cart.types";

export const getProducts = async (): Promise<CartItemType[]> => 
    await (await fetch('https://fakestoreapi.com/products')).json();
