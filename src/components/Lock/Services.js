import React from "react";
import img from "../../img/U-unsplash (1).jpg";
import { AiFillStar } from "react-icons/ai";
import { BsStarHalf } from "react-icons/bs";

const CycleTires = () => {
  return (
    <div>
      <img className="h-[600px] w-full" src={img} alt="" />
      <div className="flex justify-between mt-5 p-5">
        <ul>
          <h1 className="font-bold text-2xl underline mb-5">Tire Diameter</h1>
          <li className="underline cursor-pointer text-xl">700c Tires</li>
          <li className="underline cursor-pointer text-xl">29" Tires</li>
          <li className="underline cursor-pointer text-xl">27.5" Tires</li>
          <li className="underline cursor-pointer text-xl">650b Tires</li>
          <li className="underline cursor-pointer text-xl">26" Tires</li>
          <li className="underline cursor-pointer text-xl">24" Tires</li>
          <li className="underline cursor-pointer text-xl">20" Tires</li>
          <li className="underline cursor-pointer text-xl">12-18" Tires</li>
        </ul>
        <ul>
          <h1 className="font-bold text-2xl underline mb-5">Flat Prevention</h1>
          <li className="underline cursor-pointer text-xl">Flat Prevention</li>
          <li className="underline cursor-pointer text-xl">Patch Kits</li>
          <li className="underline cursor-pointer text-xl">Tire Levers</li>
          <li className="underline cursor-pointer text-xl">Tubes</li>
          <li className="underline cursor-pointer text-xl">View All</li>
        </ul>
      </div>
      <div>
        <div className="pt-10 grid md:grid-cols-4 gap-5 py10 mb-10 p-5">
          <div className="relative ">
            <img
              src="https://i.ibb.co/xXKM99T/giant-700c-presta-valve-bike-tube-28307298943078-600x.jpg"
              className="h-[350px] "
              alt=""
            />
            <h1 className="font-bold">Giant 700c Presta </h1>
            <p>10.99$</p>
            <p className="flex text-orange-500">
              <AiFillStar></AiFillStar>
              <AiFillStar></AiFillStar>
              <AiFillStar></AiFillStar>
              <AiFillStar></AiFillStar>
              <AiFillStar></AiFillStar>
            </p>
            <p>3 Reviews</p>
          </div>
          <div className="relative ">
            <img
              src="https://i.ibb.co/sVrPTqV/giant-26-premium-schrader-valve-bike-tube-28300594085990.jpg"
              className="h-[350px] "
              alt=""
            />
            <h1 className="font-bold">Giant 26" Premium</h1>
            <p>12.99$</p>
            <p className="flex text-orange-500">
              <AiFillStar></AiFillStar>
              <AiFillStar></AiFillStar>
              <AiFillStar></AiFillStar>
              <AiFillStar></AiFillStar>
              <AiFillStar></AiFillStar>
            </p>
            <p>9 Reviews</p>
          </div>
          <div>
            <img
              src="https://i.ibb.co/GndrJjy/stan-s-no-tubes-tire-sealant-16oz-13353979609190-600x.jpg"
              className="h-[350px] "
              alt=""
            />
            <h1 className="font-bold">Stan's No Tubes 16oz Tubeless</h1>
            <p>19.99$</p>
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
              src="https://i.ibb.co/6RDbbcZ/stan-s-no-tubes-bike-valve-core-remover-tool-presta-schrader-valves-28336433201254-600x.jpg"
              className="h-[350px] "
              alt=""
            />
            <h1 className="font-bold">Presta Schrader Valves</h1>
            <p>10.99$</p>
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
    </div>
  );
};

export default CycleTires;
