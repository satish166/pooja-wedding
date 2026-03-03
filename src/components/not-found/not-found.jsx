import React from "react";

import './not-found.scss';

import { Link } from "react-router-dom";

function NotFound() {
    return (
        <>
            <section className="not-found">
                <div className="text-center">
                    <h1>Page Not Found</h1>

                    <Link to="/" className="button button-primary mt-3">Back To Homepage</Link>

                </div>
            </section>
        </>
    );
}
export default NotFound;