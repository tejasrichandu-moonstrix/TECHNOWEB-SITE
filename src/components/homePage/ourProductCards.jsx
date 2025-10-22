import React from "react";

const products = [
  { id: "01", img: "https://i.postimg.cc/KYxqvK1K/Card-1.png" },
  { id: "02", img: "https://i.postimg.cc/kgxYmNg3/Card-2.png" },
  { id: "03", img: "https://i.postimg.cc/rw6Z3ZcN/Card-3.png" },
];

export default function Products() {
  return (
    <div className="relative w-full z-20">
      <div className="h-[300vh] relative">
        {products.map((p) => (
          <div
            key={p.id}
            className="sticky top-20 flex justify-center items-center h-screen"
          >
            <div className="w-full text-center overflow-hidden">
              <img
                src={p.img}
                alt={`Product ${p.id}`}
                className="mx-auto md:max-h-[80vh] object-contain"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
