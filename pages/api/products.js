import { Product } from "@/models/Product";
import { mongooseConnect } from "@/lib/mongoose";

export default async function handle(req, res) {
  const { method } = req;
  await mongooseConnect();

  if (method === "GET") {
    res.json(await Product.find());
  }

  if (method === "POST") {
    const { title, description, price } = req.body;
    const ProductDoc = await Product.create({
      title,
      description,
      price,
    });
    res.json(ProductDoc);
  }
}
