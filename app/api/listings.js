import client from "./client";

import { getAuthTokenFromStore } from "../utility/storage";

const getToken = async () => {
  const tt = await getAuthTokenFromStore();
  client.setHeader("Authorization", "Bearer " + tt);
};
getToken();

const endpoint = "/listings";
export const getListings = () => client.get(endpoint);

export const addListings = async (listing, onUploadProgress) => {
  /* 
  const data = new FormData();

  data.append("title", listing.title);
  data.append("price", listing.price);
  data.append("description", listing.description);
  data.append("category", listing.category);
  data.append("images", listing.images); */

  return client.post(endpoint, listing, {
    onUploadProgress: (progress) =>
      onUploadProgress(progress.loaded / progress.total),
  });
};
/* export const addListings = (listing, onUploadProgress) =>
  client.post(endpoint, listing, {
    onUploadProgress: (progress) =>
      onUploadProgress(progress.loaded / progress.total),
  }); */
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

/* 

}; */
