import React from "react";
import { Link, useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const Shopid = () => {
    const { id } = useParams();
    const { data, error, isLoading, isError } = useQuery({
        queryKey: ["product", id],
        queryFn: async () => {
            const res = await axios.get(`https://fakestoreapi.com/products/${id}`);
            return res.data;
        },
    });
    const narx = "som";

    if (isLoading) return <h2>Loading...</h2>;
    if (isError) return <h2>Error: {error.message}</h2>;
    if (!data) return <h2>No product found</h2>;
    console.log(data);

    return (
        <>
            <div className="shopid_box">
                <h3 className="shopid_title">{data.title}</h3>
                <Link className="Not_found_link" to={"/shop"}>
                    Back
                </Link>
                <img src={data.image} alt={data.title} className="shopid_img" />
                <div className="matn_box">
                    <p className="shopid_text">{data.description}</p>
                    <p className="shopid_price">
                        {data.price} {narx}
                    </p>
                </div>
            </div>
        </>
    );
};

export default Shopid;
