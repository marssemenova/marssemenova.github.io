import React, { useEffect, useState } from "react";
import Lottie from "react-lottie";
import * as dots from '../assets/loading.json';
import App from "../App";
import '../index.css';

const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: dots.default,
    rendererSettings: {
        preserveAspectRatio: "xMidYMid slice",
    },
};

function Loading() {
    const [completed, setCompleted] = useState(undefined);

    useEffect(() => {
        setTimeout(() => {
            setCompleted(true);
        }, 1600);
    }, []);

    return (
        <>
            {!completed ? <div className="loading"> <Lottie options={defaultOptions} height={200} width={200} /> </div> : <App/>}
        </>
    );
}

export default Loading;
