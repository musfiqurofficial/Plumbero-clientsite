import React from "react";
import { useLottie } from "lottie-react";
import register from "./register.json";

const RegisterLottie = () => {
  const options = {
    animationData: register,
    loop: true
  };

  const { View } = useLottie(options);

  return <>{View}</>;
};

export default RegisterLottie;