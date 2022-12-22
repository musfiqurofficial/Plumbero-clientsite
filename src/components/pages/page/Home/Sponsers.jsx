import React from "react";
import adidas from "../../../../assets/adidas.png";
import nike from "../../../../assets/nike.png";
import samsung from "../../../../assets/samsung.png";
import sony from "../../../../assets/sony.png";
import coca from "../../../../assets/coca.png";
import { Link } from "react-router-dom";

const Sponsers = () => {
  return (
    <div className="w-10/12 mx-auto my-32">
      <div className="lg:flex md:flex justify-between">
        <div className="grid grid-cols-3 gap-3 mr-10">
          <img
            className="w-40 h-40 object-cover rounded-xl"
            src={adidas}
            alt=""
          />
          <img
            className="w-40 h-40 object-cover rounded-xl"
            src={samsung}
            alt=""
          />
          <img
            className="w-40 h-40 object-cover rounded-xl"
            src={nike}
            alt=""
          />
          <img
            className="w-40 h-40 object-cover rounded-xl"
            src={coca}
            alt=""
          />
          <img
            className="w-40 h-40 object-cover rounded-xl"
            src={sony}
            alt=""
          />
        </div>
        <div className="my-auto w-1/2">
          <div className="">
            <h6 className="lg:text-base lg:font-bold my-1">
              PARTNERS & CLIENTS
            </h6>
            <h1 className="lg:text-5xl text-3xl font-bold my-2">
              Checkout Our Sponsers & Partners
            </h1>
            <p className="my-5">
              Excepteur aperiam tortor eu saepe orci, minim dictumst cum dolorem
              maiores porro, natoque scelerisque cum magna, purus vivamus,
              parturient interdum cum magna, purus .
            </p>
            <Link to="/about">
              <button className="btn text-black hover:text-white bg-amber-300 rounded-3xl border-none lg:px-5">
                LEARN MORE
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sponsers;
