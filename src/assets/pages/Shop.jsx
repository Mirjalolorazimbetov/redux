import React from "react";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";

const Shop = () => {
    const { data, error, isError, isFetching, isLoading } = useQuery({
        queryKey: ["product"],
        queryFn: async () => {
            const res = await axios.get("https://fakestoreapi.com/products");
            return res.data;
        },
    });

    if (isFetching || isLoading) return <h2>Loading...</h2>;

    if (isError) return <h2>{error.message}</h2>;

    return (
        <>
            <div className="container">
                <h2 className="product_shop">Shop</h2>
                <Link className="Not_found_link" to={"/"}>
                    Back
                </Link>
                <div className="product_box">
                    {data?.map((product) => (
                        <Link to={`/shop/${product.id}`} className="product_card" key={product.id}>
                            <img src={product.image} alt={product.title} />
                            <h2>{product.title}</h2>
                        </Link>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Shop;
