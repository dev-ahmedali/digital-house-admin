import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";

export default function ProductForm({
  _id,
  title: existingTitle,
  description: existingDescription,
  price: existingPrice,
  images,
}) {
  const router = useRouter();
  const [title, setTitle] = useState(existingTitle || "");
  const [description, setDescription] = useState(existingDescription || "");
  const [price, setPrice] = useState(existingPrice || "");
  const [goToProducts, setGoToProducts] = useState(false);

  const saveProduct = async (e) => {
    e.preventDefault();
    const data = { title, description, price };
    if (_id) {
      // update
      await axios.put("/api/products/", { ...data, _id });
    } else {
      await axios.post("/api/products", data);
    }
    setGoToProducts(true);
  };
  if (goToProducts) {
    router.push("/products");
  }
  function uploadImages(e) {
    const files = e.target?.files;
    if(files?.length > 0) {
      const data = new FormData();
      for (const file of files) {
        //
      }
    }
  }
  return (
    <>
      <form onSubmit={saveProduct}>
        <label>Product name</label>
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          type="text"
          placeholder="Product name"
        />
        <label>Photos</label>
        <div className="mb-2">
          <label className="w-24 h-24 cursor-pointer flex flex-col text-gray-500 bg-gray-200 rounded-lg items-center text-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 8.25H7.5a2.25 2.25 0 00-2.25 2.25v9a2.25 2.25 0 002.25 2.25h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25H15m0-3l-3-3m0 0l-3 3m3-3V15"
              />
            </svg>
            <div>
            Upload
            </div>
           <input type="file" onChange={uploadImages} className="hidden"/>
          </label>
          {!images?.length && <div>No photos in this product</div>}
        </div>
        <label>Description</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="description"></textarea>
        <label>Price (in USD)</label>
        <input
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          v
          type="text"
          placeholder="price"
        />
        <button type="submit" className="btn-primary">
          Save
        </button>
      </form>
    </>
  );
}
