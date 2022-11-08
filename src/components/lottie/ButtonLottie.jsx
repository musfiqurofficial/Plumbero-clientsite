import React from "react";
import { useLottie } from "lottie-react";
import button from "./button.json";

const ButtonLottie = () => {
  const options = {
    animationData: button,
    loop: true
  };

  const { View } = useLottie(options);

  return <>{View}</>;
};

export default ButtonLottie;