import Layout from "@/components/Layout";
import { useState } from "react";
import axios from "axios";

export default function NewProduct() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const data = { title, description, price };

  const createProduct = async (e) => {
    e.preventDefault();
    await axios.post("/api/products", data);
  };
  return (
    <Layout>
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
    </Layout>
  );
}
