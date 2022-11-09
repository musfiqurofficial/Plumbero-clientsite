import React from "react";
import { useLottie } from "lottie-react";
import plus from "./plus.json";

const PlusLottie = () => {
    const options = {
        animationData: plus,
        loop: true
    };

    const { View } = useLottie(options);

    return <>{View}</>;
};

export default PlusLottie;