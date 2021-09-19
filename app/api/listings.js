import client from "./client";

const endpoint = "/products";
export const getListings = () => client.get(endpoint);

export const addListings = (listing, onUploadProgress) =>
  client.post(endpoint, listing, {
    onUploadProgress: (progress) => onUploadProgress(progress),
  });
export const getCategories = () => client.get("/products/categories");

/* let listing;
const data = new FormData();

data.append("title", listing.title);
data.append("price", listing.price);
data.append("description", listing.description);
data.append("category", listing.category);

listing.images.forEach((image, index) =>
  data.append("images", {
    name: "image" + index,
    type: "image/jpeg",
    uri: image,
  })
);

if (listing.location) {
  data.append("location", JSON.stringify(listing.location));
} */
