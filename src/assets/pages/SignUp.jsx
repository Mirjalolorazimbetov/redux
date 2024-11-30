import React from "react";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
    const navigate = useNavigate();
    const handleClick = (e) => {
        e.preventDefault();
        console.log(useNavigate);
        navigate("/");
    };
    return (
        <>
            <h1 className="glavny_title">SignUp</h1>
            <div className="container">
                <form onSubmit={handleClick}>
                    <input type="text" />
                    <button type="submit" className="btn_signup">
                        Submit
                    </button>
                </form>
            </div>
        </>
    );
};

export default SignUp;
