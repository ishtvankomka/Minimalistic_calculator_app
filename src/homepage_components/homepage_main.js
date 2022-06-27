import React from "react"
import { useState } from "react";

export default function Home() {

    const [calculation, setCalculation] = useState("");

    function calculate() {
        var formatted = calculation.replaceAll("^", "**");
        formatted = formatted.replaceAll("π", "(3.14)");
        formatted = formatted.replaceAll("÷", "/");
        formatted = formatted.replaceAll("×", "*");
        formatted = eval(formatted).toString();
        formatted = Math.round(formatted * 100) / 100;
        setCalculation(formatted.toString());
        console.log(calculation);
    }

    function addChange(value) {
        console.log(calculation);
        setCalculation(calculation + value)
        console.log(calculation);
    }

    function AC() {
        console.log(calculation);
        setCalculation("");
        console.log(calculation);
    }

    function backspace() {
        setCalculation(calculation.slice(0, -1));
        console.log(calculation);
    }

    return (
        <div className="homepage_main">
            <div className="calculator_body">

                <div className="display">
                    <div>
                        <span>
                            {calculation}
                        </span>
                    </div>
                </div>

                <div className="keyboard">
                    {/*1*/}
                    <button onClick={() => { AC() }}>
                        <p>
                            AC
                        </p>
                    </button>
                    <button onClick={() => { addChange("^") }}>
                        <p>
                            ^
                        </p>
                    </button>
                    <button onClick={() => { addChange("π") }}>
                        <p>
                            π
                        </p>
                    </button>
                    <button onClick={() => { addChange("÷") }}>
                        <p>
                            ÷
                        </p>
                    </button>

                    {/*2*/}
                    <button onClick={() => { addChange("7") }}>
                        <p>
                            7
                        </p>
                    </button>
                    <button onClick={() => { addChange("8") }}>
                        <p>
                            8
                        </p>
                    </button>
                    <button onClick={() => { addChange("9") }}>
                        <p>
                            9
                        </p>
                    </button>
                    <button onClick={() => { addChange("×") }}>
                        <p>
                            ×
                        </p>
                    </button>

                    {/*3*/}
                    <button onClick={() => { addChange("4") }}>
                        <p>
                            4
                        </p>
                    </button>
                    <button onClick={() => { addChange("5") }}>
                        <p>
                            5
                        </p>
                    </button>
                    <button onClick={() => { addChange("6") }}>
                        <p>
                            6
                        </p>
                    </button>
                    <button onClick={() => { addChange("-") }}>
                        <p>
                            -
                        </p>
                    </button>

                    {/*4*/}
                    <button onClick={() => { addChange("1") }}>
                        <p>
                            1
                        </p>
                    </button>
                    <button onClick={() => { addChange("2") }}>
                        <p>
                            2
                        </p>
                    </button>
                    <button onClick={() => { addChange("3") }}>
                        <p>
                            3
                        </p>
                    </button>
                    <button onClick={() => { addChange("+") }}>
                        <p>
                            +
                        </p>
                    </button>

                    {/*5*/}
                    <button onClick={() => { addChange("0") }}>
                        <p>
                            0
                        </p>
                    </button>
                    <button onClick={() => { addChange(".") }}>
                        <p>
                            .
                        </p>
                    </button>
                    <button onClick={() => { backspace() }}>
                        <p>
                            del
                        </p>
                    </button>
                    <button onClick={() => { calculate() }}>
                        <p>
                            =
                        </p>
                    </button>
                </div>
            </div>
        </div>
    )

}