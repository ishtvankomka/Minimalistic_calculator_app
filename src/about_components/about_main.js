import React from "react"

import sass from "../media/sass.svg"
import react from "../media/react.svg"


export default function About() {

    return (
        <div className="about_main">
            <div className="about_text">
                <p>Just minimalistic simple calculator app based on few popular technologies</p>
            </div>

            <div className="about_links">
                <a href="https://reactjs.org/" target="_blank" rel="noreferrer">
                    <img src={react} alt="" />
                </a>
                <a href="https://sass-lang.com/" target="_blank" rel="noreferrer">
                    <img src={sass} alt="" />
                </a>
            </div>
        </div >
    )
}