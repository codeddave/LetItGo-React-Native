import client from "./client";

const endpoint = "/products";
export const getListings = () => client.get(endpoint);
