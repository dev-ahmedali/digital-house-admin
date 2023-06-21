
import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";

export default function ProductForm() {
    const router = useRouter()
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [goToProducts, setGoToProducts] = useState(false);

  const createProduct = async (e) => {
    e.preventDefault();
    const data = { title, description, price };
    await axios.post("/api/products", data);
    setGoToProducts(true);
  };
  if (goToProducts) {
    router.push("/products");
  }
  return (
    <>
      <form onSubmit={createProduct}>
        <h1>New product</h1>
        <label>Product name</label>
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          type="text"
          placeholder="Product name"
        />
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
  )
}