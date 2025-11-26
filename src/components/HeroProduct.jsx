import Product1 from "../assets/product1.jpg";
import "./HeroProduct.css";
import Product2 from "../assets/product2.jpg";
import Product3 from "../assets/product3.jpg";
import Product4 from "../assets/product4.jpg";
import Product5 from "../assets/product5.jpg";
import Product6 from "../assets/product6.jpg";
import Product7 from "../assets/product7.jpg";
import Product8 from "../assets/product8.jpg";
import Product9 from "../assets/product9.jpg";
import Product10 from "../assets/product10.jpg";
import Product11 from "../assets/product11.jpg";
import Product12 from "../assets/product12.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { Link } from "react-router-dom";
const products = [
  {
    id: 2,
    name: "VR-BOX",
    image: Product1,
    description: "VR Box 3D Virtual Reality BOX With Free Joystick Controller",
    price: "₦ 22,000",
  },
  {
    id: 1,
    name: "VR SHINECON",
    image: Product2,
    description: "VR SHINECON Virtual Reality Glasses 3D VR Headset for Movies",
    price: "₦ 63,650",
  },
  {
    id: 3,
    name: "Occulus Meta Quest 3s",
    image: Product3,
    description: "All-in-one Vr Headset 128gb",
    price: "₦ 675,500",
  },
  {
    id: 4,
    name: "Playstation VR Bundle",
    image: Product4,
    description:
      "Sony Computer Entertainment Playstation VR Bundle,Motion Move,PSVR World Game-PS 4 & 5",
    price: "₦ 680,000",
  },
  {
    id: 5,
    name: "VRSHINECON",
    image: Product5,
    description: "Increase Version 7th VR Glasses With Headset",
    price: "₦ 37,750",
  },
  {
    id: 6,
    name: "Playstation VR2",
    image: Product6,
    description:
      " Sony Computer Entertainment Playstation VR2,Motion Move,PS VR World Game-PS 5",
    price: "₦ 1,000,000",
  },
  {
    id: 7,
    name: "Meta Quest Pro",
    image: Product7,
    description:
      "Meta Quest Pro is a virtual reality system that unlocks new perspectives into how we work, create, and collaborate, so you can go beyond what was previously possible.",
    price: "₦ 1,800,000",
  },
  {
    id: 8,
    name: "Hard Shell Travel",
    image: Product8,
    description: "Hard Shell Travel Storage Bag For Oculus Quest 2 & Vr VR",
    price: "₦ 38,000",
  },
  {
    id: 9,
    name: "5000 MAh Battery Capacity Power Bank",
    image: Product9,
    description:
      "5000 MAh Battery Capacity Power Bank For Oculus Quest 2 VR for extra 2.5 hours of play",
    price: "₦ 18,500",
  },
  {
    id: 10,
    name: "VRPARK J60",
    image: Product10,
    description: "VRPARK J60 Virtual Reality Headset VR Glasses",
    price: "₦ 30,593",
  },
  {
    id: 11,
    name: "VR SHINECON",
    image: Product11,
    description: "Vr Helmet 3D Box VR Bluetooth Headset VR Glasses Bsuit Black",
    price: "₦ 181,099",
  },
  {
    id: 12,
    name: "Oculus Quest",
    image: Product12,
    description: "Oculus Quest 64GB VR Headset",
    price: "₦ 550,000",
  },
];

function HeroProduct() {
  const [count, setCount] = useState(0);
  const increase = () => setCount((prev) => prev + 1);
  const decrease = () => setCount((prev) => (prev > 0 ? prev - 1 : 0));
  return (
    <>
      <div className="product">
        <div className=" w-full bg-[#2b2b2e] min-h-screen py-10  pt-[100px] ">
          <button className="fixed flex items-center ml-4 z-1000">
            <Link to="/not-found">
              <FontAwesomeIcon
                icon={faCartShopping}
                className="w-8 h-8 text-pink-600"
              />

              <span className="absolute top-2 right-2 flex items-center justify-center w-5 h-5 text-xs font-bold text-white bg-pink-700 rounded-full">
                {count}
              </span>
            </Link>
          </button>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 px-6  py-[100px]">
            {products.map((product) => (
              <div
                key={product.id}
                className="product-card w-full max-w-[400px] bg-[#42424f] flex flex-col items-center justify-between text-center border border-gray-700 rounded-lg p-6 shadow-lg hover:shadow-pink-500/30 transition-transform transform hover:-translate-y-1 mx-auto"
              >
                <img
                  src={product.image}
                  alt=""
                  className="rounded-lg w-[300px] h-[250px] object-cover mx-3 mt-4 mb-4 transition-transform transform hover:scale-100"
                />
                <h2 className="text-lg font-semibold text-white mb-2">
                  {product.name}
                </h2>
                <p className="text-gray-300 text-sm mb-3">
                  {product.description}
                </p>
                <h2 className="text-pink-400 font-bold text-xl mb-4">
                  {product.price}
                </h2>
                <div className="flex pb-4 gap-2">
                  <button
                    onClick={increase}
                    className="bg-pink-600 hover:bg-pink-700 text-white font-bold text-xl w-10 h-10 rounded-full shadow-md transition-transform transform hover:scale-110"
                  >
                    +
                  </button>
                  <button
                    onClick={decrease}
                    className="bg-pink-600 hover:bg-pink-700 text-white font-bold text-xl w-10 h-10 rounded-full shadow-md transition-transform transform hover:scale-110"
                  >
                    -
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
export default HeroProduct;
