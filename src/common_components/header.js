import React from "react"
import { Link } from "react-router-dom";

export default function Header() {

    return (
        <div className="header_main">
            <div className="header_inside">
                <Link style={{textDecoration: 'none'}} to="/home">
                    <div className="header_link">
                        <p className="header_link_text">home</p>
                    </div>
                </Link>
                <Link style={{textDecoration: 'none'}} to="/about">
                    <div className="header_link">
                        <p>about</p>
                    </div>
                </Link>
            </div>
        </div>
    )
}