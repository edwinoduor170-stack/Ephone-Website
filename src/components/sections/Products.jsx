import React, { useState } from "react";

const productsData = [
    {
        id: 1,
        name: "Apple Iphone 11",
        image: "/Product 1.jpg",
        price: 37000,
        oldPrice: 40000,
    },
    {
        id: 2,
        name: " Samsung Galaxy S21",
        image: "/Product 2.jpg",
        price: 45707,
        oldPrice: 53600,
    },
    {
        id: 3,
        name: "Oppo A6 Pro",
        image: "/Product 3.jpg",
        price: 33599,
        oldPrice: 35999,
    },
    {
        id: 4,
        name: "Oppo Reno 13 F 4G",
        image: "/Product 4.jpg",
        price: 35799,
        oldPrice:37999,
    },
    {
        id: 5,
        name: " Samsung Galaxy Z Fold 5",
        image: "/Product 5.jpg",
        price: 89000,
        oldPrice: 150000,
    },
    {
        id: 6,
        name: "Samsung Galaxy Z Fold 4 5G",
        image: "/Product 6.jpg",
        price: 79800,
        oldPrice: 105000,
    },
    {
        id: 7,
        name: "Apple Refurbished I Phone X",
        image: "/Product 7.jpg",
        price: 25000,
        oldPrice: 35000,
    },
    {
        id: 8,
        name: "Oppo Reno 14 5G",
        image: "/Product 8.jpg",
        price: 54789,
        oldPrice: 59999,
    },
    {
        id: 9,
        name: "Out of Stock",
        image: "/",
        price: 7000,
        oldPrice: 9000,
    },
    {
        id: 10,
        name: "Out of Stock",
        image: "/",
        price: 45000,
        oldPrice: 50000,
    },
    {
        id: 11,
        name: "Out of stock",
        image: "/",
        price: 16000,
        oldPrice: 20000,
    },
    {
        id: 12,
        name: "Samsung A12",
        image: "/",
        price: 15000,
        oldPrice: 20000,
    },
    {
        id: 13,
        name: "Oppo Reno 5",
        image: "/",
        price: 32500,
        oldPrice: 40000,
    },
    {
        id: 14,
        name: "Polo T-Shirt",
        image: "/polo.png",
        price: 800,
        oldPrice: 955,
    },
    {
        id: 15,
        name: "Pen",
        image: "/pen.png",
        price: 100,
        oldPrice: 125,
    },
    {
        id: 16,
        name: "Oppo A93",
        image: "/",
        price: 25000,
        oldPrice: 32000,
    },
];

const ITEMS_PER_PAGE = 8;

const Products = () => {
    const [page, setPage] = useState(1);
    const totalPages = Math.ceil(productsData.length / ITEMS_PER_PAGE);
    const currentProducts = productsData.slice(
        (page - 1) * ITEMS_PER_PAGE,
        page * ITEMS_PER_PAGE
    );

    return (
        <section className="py-10 px-4 text-center">
            <h2 className="text-5xl text-violet-700  font-bold mb-2 md:text-4xl">ePhon Duka</h2>
            <p className="text-violet-700 mb-8">
                Get the best smartphones with advanced features, sleek designs and unbeatable performance.
            </p>

            {/* Product grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-items-center">
                {currentProducts.map((product) => (
                    <div key={product.id} className="w-64">
                        {/* Card */}
                        <div className="bg-white border border-gray-300 rounded-2xl shadow-md overflow-hidden group hover:shadow-lg transition relative">
                            <div className="relative">
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className="w-full h-52 object-contain bg-white"
                                />
                                <button className="absolute bottom-2 right-2 bg-white rounded-full p-2 shadow hover:bg-gray-100 transition  cursor-pointer">
                                    +
                                </button>
                            </div>
                        </div>


                        {/* Description below the card */}
                        <div className="text-left mt-3 px-1">
                            <h3 className="text-lg font-medium mb-1">{product.name}</h3>
                            <div className="flex items-center gap-2">
                                <p className="text-gray-700 font-semibold text-base">
                                    Ksh{product.price.toFixed(2)}
                                </p>
                                <p className="text-gray-400 line-through text-sm">
                                    Ksh{product.oldPrice.toFixed(2)}
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Dot pagination */}
            <div className="flex justify-center items-center gap-2 mt-8">
                <button
                    disabled={page === 1}
                    onClick={() => setPage((prev) => prev - 1)}
                    className="p-2 text-xl disabled:opacity-50 cursor-pointer"
                >
                    ←
                </button>

                {[...Array(totalPages)].map((_, i) => (
                    <button
                        key={i}
                        onClick={() => setPage(i + 1)}
                        className={`w-3 h-3 rounded-full ${page === i + 1 ? "bg-black" : "bg-gray-300 hover:bg-gray-400"
                            }`}
                    ></button>
                ))}

                <button
                    disabled={page === totalPages}
                    onClick={() => setPage((prev) => prev + 1)}
                    className="p-2 text-xl disabled:opacity-50  cursor-pointer"
                >
                    →
                </button>
            </div>
        </section>
    );
};

export default Products;
