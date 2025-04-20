import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import { formatPrice } from "../utils";

const ProductsList = () => {
  const { products } = useLoaderData();

  return (
    <div className="mt-12 grid gap-y-8">
      {products.map((product) => {
        const { title, price, image } = product.attributes;
        const dollarsAmount = formatPrice(price);
        return (
          <Link
            key={`/products/${product.id}`}
            className="p-8 rounded-lg flex flex-col sm:flex-row gap-y-4 flex-wrap bg-base-100 shadow-xl hover:shadow-2xl duration-300 group"
          >
            
          </Link>
        );
      })}
    </div>
  );
};

export default ProductsList;
