import React from "react";
import { AiFillStar } from "react-icons/ai";
import { BsStarHalf } from "react-icons/bs";

const Still = () => {
  return (
    <div>
      <div className="pt-10 grid md:grid-cols-4 gap-5 py10 mb-10">
        <div className="relative ">
          <sup className="border-2 p-4 rounded-full bg-red-600 text-white absolute top-[-20px] left-0">
            $30 Free
          </sup>
          <img
            src="https://i.ibb.co/JQZS1Gj/cycle2.webp"
            className="h-[350px] "
            alt=""
          />
          <h1 className="font-bold">Diamondback Hook </h1>
          <p>From 850$</p>
          <p className="flex text-orange-500">
            <AiFillStar></AiFillStar>
            <AiFillStar></AiFillStar>
            <AiFillStar></AiFillStar>
            <AiFillStar></AiFillStar>
            <AiFillStar></AiFillStar>
          </p>
          <p>43 Reviews</p>
        </div>
        <div className="relative ">
          <sup className="border-2 p-4 rounded-full bg-red-600 text-white absolute top-[-20px] left-0">
            $50 Free
          </sup>
          <img
            src="https://i.ibb.co/ft7hg3M/cycle4.webp"
            className="h-[350px] "
            alt=""
          />
          <h1 className="font-bold">Diamondback Haanjo 1</h1>
          <p>From 750$</p>
          <p className="flex text-orange-500">
            <AiFillStar></AiFillStar>
            <AiFillStar></AiFillStar>
            <AiFillStar></AiFillStar>
            <AiFillStar></AiFillStar>
            <AiFillStar></AiFillStar>
          </p>
          <p>59 Reviews</p>
        </div>
        <div>
          <img
            src="https://i.ibb.co/D11qL7P/cycle1.webp"
            className="h-[350px] "
            alt=""
          />
          <h1 className="font-bold">Diamondback Atroz 1</h1>
          <p>From 1050$</p>
          <p className="flex text-orange-500">
            <AiFillStar></AiFillStar>
            <AiFillStar></AiFillStar>
            <AiFillStar></AiFillStar>
            <AiFillStar></AiFillStar>
            <BsStarHalf></BsStarHalf>
          </p>
          <p>16 Reviews</p>
        </div>
        <div>
          <img
            src="https://i.ibb.co/wYsLKzz/cycle3.webp"
            className="h-[350px] "
            alt=""
          />
          <h1 className="font-bold">Aventon Sinch Foldable E-Bike</h1>
          <p>From 1660$</p>
          <p className="flex text-orange-500">
            <AiFillStar></AiFillStar>
            <AiFillStar></AiFillStar>
            <AiFillStar></AiFillStar>
            <AiFillStar></AiFillStar>
            <BsStarHalf></BsStarHalf>
          </p>
          <p>5 Reviews</p>
        </div>
      </div>
    </div>
  );
};

export default Still;
