import Layout from "@/components/Layout";
import { useState } from "react";

export default function NewProduct() {
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [price, setPrice] = useState('')
  return (
    <Layout>
      <h1>New product</h1>
      <label>Product name</label>
      <input type="text" placeholder="Product name" />
      <label>Description</label>
      <textarea placeholder="description"></textarea>
      <label>Price (in USD)</label>
      <input type="text" placeholder="price" />
      <button className="btn-primary">Save</button>
    </Layout>
  );
}
