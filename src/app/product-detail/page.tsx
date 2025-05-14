import Products from "@/components/products";
import Reviews from "@/components/reviews";
import { Suspense } from "react";

export default function ProductDetail() {
  return (
    <div>
      <h1>Product Detail Page</h1>
      <Suspense fallback={"Product is loading..."}>
        <Products />
      </Suspense>
      <Suspense fallback={"Reviews are loading..."}>
        <Reviews />
      </Suspense>
    </div>
  );
}
