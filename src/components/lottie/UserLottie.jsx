import React from "react";
import { useLottie } from "lottie-react";
import user from "./user.json";

const UserLottie = () => {
  const options = {
    animationData: user,
    loop: true
  };

  const { View } = useLottie(options);

  return <>{View}</>;
};

export default UserLottie;