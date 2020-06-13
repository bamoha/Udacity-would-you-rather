import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../components";

const Page404 = () => (
    <div className="container">
        <div className="d-flex full-page justify-content-center align-items-center h-100 flex-column">
        <h1>Page Not Found</h1>
        <Link to="/"><Button type="button" title="Go to home page"></Button></Link>
        </div>
    </div>
);

export default Page404;