import React from "react";
import { useLottie } from "lottie-react";
import login from "./login.json";

const LoginLottie = () => {
  const options = {
    animationData: login,
    loop: true
  };

  const { View } = useLottie(options);

  return <>{View}</>;
};

export default LoginLottie;