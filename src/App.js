import React from "react";
import {
  heroImg,
  productImg1,
  productImg2,
  productImg3,
  productImg4,
  productImg5,
  productImg6,
  productImg7,
  productImg8,
  bannerImg,
} from "./assets/images/index";

export default function App() {
  return (
    <div className="container mx-auto px-4 pt-3">
      <div className="md:flex md:flex-row md:justify-between text-center">
        <div className="flex flex-row justify-center">
          <div className="bg-gradient-to-r from-purple-400 to-red-600 w-10 h-10 rounded-lg"></div>
          <h1 className="text-3xl text-gray-600 ml-2">Hello</h1>
        </div>
        <div className="mt-2">
          <a
            href="#"
            className="text-gray-600 hover:underline hover:text-purple-600 p-4"
          >
            Home
          </a>
          <a href="#" className="text-gray-600  hover:text-purple-600 p-4">
            Shop
          </a>
          <a href="#" className="text-gray-600  hover:text-purple-600 p-4">
            Blog
          </a>
          <a href="#" className="text-gray-600  hover:text-purple-600 p-4">
            Contect
          </a>

          <a className="text-white shadow-lg h-18 w-20 p-2 px-5 pb-3 bg-purple-600 rounded-full hover:bg-purple-700">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5 inline-block"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
            Cart(0)
          </a>
        </div>
      </div>
      {/* NAV END */}
      {/* HERO START */}
      <div className="md:flex md:flex-row mt-20">
        <div className="md:w-2/5 text-center md:text-left">
          <h2 className="mb-4 font-serif text-4xl text-center md:text-left">
            Hello foks yeep!!
          </h2>
          <p className="uppercase text-gray-600 tracking-wide text-center md:text-left">
            Some tag line here
          </p>
          <p className="uppercase text-gray-600 tracking-wide text-center md:text-left">
            Some tag line here
          </p>
          <button className="bg-gradient-to-r from-red-600 to-pink-500 rounded-full text-white py-4 px-8 uppercase text-xl md:self-start my-5">
            Shop Now
          </button>
        </div>

        <div className="md:w-3/5">
          <img src={heroImg} alt="img" />
        </div>
      </div>
      {/* Hero end */}

      {/*Mens Product start */}
      <div className="flex flex-row justify-between my-5">
        <h2 className="text-2xl">Men's Collection</h2>
        <a href="#" className="flex flex-row text-xl">
          View all
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-7 w-5 ml-1"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
              clip-rule="evenodd"
            />
          </svg>
        </a>
      </div>
      {/* product list */}
      <div class="grid grid-flow-row grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 ">
        <div className="shadow-lg rounded-lg my-2">
          <img src={productImg1} alt="product" className="rounded-t-lg" />
          <div className="p-3">
            <h3>T-Shirt</h3>
            <div className="flex flex-row my-2">
              <div className="bg-black h-5 w-5 rounded-full shadow-md mr-2"></div>
              <div className="bg-white h-5 w-5 rounded-full shadow-md mr-2"></div>
              <div className=" bg-green-600 h-5 w-5 rounded-full shadow-md mr-2"></div>
              <div className="bg-pink-500 h-5 w-5 rounded-full shadow-md mr-2"></div>
            </div>
            <div className="flex flex-row my-2">
              <div className="border-2 text-gray-400 border-gray-300 text-xs px-2 py-1 rounded-md mr-2">
                XL
              </div>
              <div className="border-2 text-gray-400 border-gray-300 text-xs px-2 py-1 rounded-md mr-2">
                2XL
              </div>
              <div className="border-2 text-gray-400 border-gray-300 text-xs px-2 py-1 rounded-md mr-2">
                M
              </div>
              <div className="border-2 text-gray-400 border-gray-300 text-xs px-2 py-1 rounded-md mr-2">
                L
              </div>
              <div className="border-2 text-gray-400 border-gray-300 text-xs px-2 py-1 rounded-md mr-2">
                S
              </div>
            </div>
            <div className="flex flex-col xl:flex-row justify-between">
              <a
                href="#"
                className="bg-gradient-to-r from-red-600 to-pink-500 hover:from-pink-500 hover:to-pink-500 rounded-full text-white py-2 px-4 flex flex-row text-sm justify-center my-2"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5 mr-1 inline-block"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
                Add to Cart
              </a>
              <a
                href="#"
                className="bg-purple-600 hover:bg-purple-700 rounded-full text-white py-2 px-4 flex flex-row text-sm justify-center my-2"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5 mr-1"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  />
                </svg>
                View Details
              </a>
            </div>
          </div>
        </div>
        <div className="shadow-lg rounded-lg my-2">
          <img src={productImg2} alt="product" className="rounded-t-lg" />
          <div className="p-3">
            <h3>T-Shirt</h3>
            <div className="flex flex-row my-2">
              <div className="bg-black h-5 w-5 rounded-full shadow-md mr-2"></div>
              <div className="bg-white h-5 w-5 rounded-full shadow-md mr-2"></div>
              <div className=" bg-green-600 h-5 w-5 rounded-full shadow-md mr-2"></div>
              <div className="bg-pink-500 h-5 w-5 rounded-full shadow-md mr-2"></div>
            </div>
            <div className="flex flex-row my-2">
              <div className="border-2 text-gray-400 border-gray-300 text-xs px-2 py-1 rounded-md mr-2">
                XL
              </div>
              <div className="border-2 text-gray-400 border-gray-300 text-xs px-2 py-1 rounded-md mr-2">
                2XL
              </div>
              <div className="border-2 text-gray-400 border-gray-300 text-xs px-2 py-1 rounded-md mr-2">
                M
              </div>
              <div className="border-2 text-gray-400 border-gray-300 text-xs px-2 py-1 rounded-md mr-2">
                L
              </div>
              <div className="border-2 text-gray-400 border-gray-300 text-xs px-2 py-1 rounded-md mr-2">
                S
              </div>
            </div>
            <div className="flex flex-col xl:flex-row justify-between">
              <a
                href="#"
                className="bg-gradient-to-r from-red-600 to-pink-500 hover:from-pink-500 hover:to-pink-500 rounded-full text-white py-2 px-4 flex flex-row text-sm justify-center my-2"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5 mr-1 inline-block"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
                Add to Cart
              </a>
              <a
                href="#"
                className="bg-purple-600 hover:bg-purple-700 rounded-full text-white py-2 px-4 flex flex-row text-sm justify-center my-2"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5 mr-1"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  />
                </svg>
                View Details
              </a>
            </div>
          </div>
        </div>
        <div className="shadow-lg rounded-lg my-2">
          <img src={productImg3} alt="product" className="rounded-t-lg" />
          <div className="p-3">
            <h3>T-Shirt</h3>
            <div className="flex flex-row my-2">
              <div className="bg-black h-5 w-5 rounded-full shadow-md mr-2"></div>
              <div className="bg-white h-5 w-5 rounded-full shadow-md mr-2"></div>
              <div className=" bg-green-600 h-5 w-5 rounded-full shadow-md mr-2"></div>
              <div className="bg-pink-500 h-5 w-5 rounded-full shadow-md mr-2"></div>
            </div>
            <div className="flex flex-row my-2">
              <div className="border-2 text-gray-400 border-gray-300 text-xs px-2 py-1 rounded-md mr-2">
                XL
              </div>
              <div className="border-2 text-gray-400 border-gray-300 text-xs px-2 py-1 rounded-md mr-2">
                2XL
              </div>
              <div className="border-2 text-gray-400 border-gray-300 text-xs px-2 py-1 rounded-md mr-2">
                M
              </div>
              <div className="border-2 text-gray-400 border-gray-300 text-xs px-2 py-1 rounded-md mr-2">
                L
              </div>
              <div className="border-2 text-gray-400 border-gray-300 text-xs px-2 py-1 rounded-md mr-2">
                S
              </div>
            </div>
            <div className="flex flex-col xl:flex-row justify-between">
              <a
                href="#"
                className="bg-gradient-to-r from-red-600 to-pink-500 hover:from-pink-500 hover:to-pink-500 rounded-full text-white py-2 px-4 flex flex-row text-sm justify-center my-2"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5 mr-1 inline-block"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
                Add to Cart
              </a>
              <a
                href="#"
                className="bg-purple-600 hover:bg-purple-700 rounded-full text-white py-2 px-4 flex flex-row text-sm justify-center my-2"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5 mr-1"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  />
                </svg>
                View Details
              </a>
            </div>
          </div>
        </div>
        <div className="shadow-lg rounded-lg my-2">
          <img src={productImg4} alt="product" className="rounded-t-lg" />
          <div className="p-3">
            <h3>T-Shirt</h3>
            <div className="flex flex-row my-2">
              <div className="bg-black h-5 w-5 rounded-full shadow-md mr-2"></div>
              <div className="bg-white h-5 w-5 rounded-full shadow-md mr-2"></div>
              <div className=" bg-green-600 h-5 w-5 rounded-full shadow-md mr-2"></div>
              <div className="bg-pink-500 h-5 w-5 rounded-full shadow-md mr-2"></div>
            </div>
            <div className="flex flex-row my-2">
              <div className="border-2 text-gray-400 border-gray-300 text-xs px-2 py-1 rounded-md mr-2">
                XL
              </div>
              <div className="border-2 text-gray-400 border-gray-300 text-xs px-2 py-1 rounded-md mr-2">
                2XL
              </div>
              <div className="border-2 text-gray-400 border-gray-300 text-xs px-2 py-1 rounded-md mr-2">
                M
              </div>
              <div className="border-2 text-gray-400 border-gray-300 text-xs px-2 py-1 rounded-md mr-2">
                L
              </div>
              <div className="border-2 text-gray-400 border-gray-300 text-xs px-2 py-1 rounded-md mr-2">
                S
              </div>
            </div>
            <div className="flex flex-col xl:flex-row justify-between">
              <a
                href="#"
                className="bg-gradient-to-r from-red-600 to-pink-500 hover:from-pink-500 hover:to-pink-500 rounded-full text-white py-2 px-4 flex flex-row text-sm justify-center my-2"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5 mr-1 inline-block"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
                Add to Cart
              </a>
              <a
                href="#"
                className="bg-purple-600 hover:bg-purple-700 rounded-full text-white py-2 px-4 flex flex-row text-sm justify-center my-2"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5 mr-1"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  />
                </svg>
                View Details
              </a>
            </div>
          </div>
        </div>
      </div>
      {/*Mens Product end */}

      {/*Women's Product start */}
      <div className="flex flex-row justify-between my-5">
        <h2 className="text-2xl">Women's Collection</h2>
        <a href="#" className="flex flex-row text-xl">
          View all
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-7 w-5 ml-1"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
              clip-rule="evenodd"
            />
          </svg>
        </a>
      </div>
      {/* product list */}
      <div class="grid grid-flow-row grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 ">
        <div className="shadow-lg rounded-lg my-2">
          <img src={productImg5} alt="product" className="rounded-t-lg" />
          <div className="p-3">
            <h3>T-Shirt</h3>
            <div className="flex flex-row my-2">
              <div className="bg-black h-5 w-5 rounded-full shadow-md mr-2"></div>
              <div className="bg-white h-5 w-5 rounded-full shadow-md mr-2"></div>
              <div className=" bg-green-600 h-5 w-5 rounded-full shadow-md mr-2"></div>
              <div className="bg-pink-500 h-5 w-5 rounded-full shadow-md mr-2"></div>
            </div>
            <div className="flex flex-row my-2">
              <div className="border-2 text-gray-400 border-gray-300 text-xs px-2 py-1 rounded-md mr-2">
                XL
              </div>
              <div className="border-2 text-gray-400 border-gray-300 text-xs px-2 py-1 rounded-md mr-2">
                2XL
              </div>
              <div className="border-2 text-gray-400 border-gray-300 text-xs px-2 py-1 rounded-md mr-2">
                M
              </div>
              <div className="border-2 text-gray-400 border-gray-300 text-xs px-2 py-1 rounded-md mr-2">
                L
              </div>
              <div className="border-2 text-gray-400 border-gray-300 text-xs px-2 py-1 rounded-md mr-2">
                S
              </div>
            </div>
            <div className="flex flex-col xl:flex-row justify-between">
              <a
                href="#"
                className="bg-gradient-to-r from-red-600 to-pink-500 hover:from-pink-500 hover:to-pink-500 rounded-full text-white py-2 px-4 flex flex-row text-sm justify-center my-2"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5 mr-1 inline-block"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
                Add to Cart
              </a>
              <a
                href="#"
                className="bg-purple-600 hover:bg-purple-700 rounded-full text-white py-2 px-4 flex flex-row text-sm justify-center my-2"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5 mr-1"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  />
                </svg>
                View Details
              </a>
            </div>
          </div>
        </div>
        <div className="shadow-lg rounded-lg my-2">
          <img src={productImg6} alt="product" className="rounded-t-lg" />
          <div className="p-3">
            <h3>T-Shirt</h3>
            <div className="flex flex-row my-2">
              <div className="bg-black h-5 w-5 rounded-full shadow-md mr-2"></div>
              <div className="bg-white h-5 w-5 rounded-full shadow-md mr-2"></div>
              <div className=" bg-green-600 h-5 w-5 rounded-full shadow-md mr-2"></div>
              <div className="bg-pink-500 h-5 w-5 rounded-full shadow-md mr-2"></div>
            </div>
            <div className="flex flex-row my-2">
              <div className="border-2 text-gray-400 border-gray-300 text-xs px-2 py-1 rounded-md mr-2">
                XL
              </div>
              <div className="border-2 text-gray-400 border-gray-300 text-xs px-2 py-1 rounded-md mr-2">
                2XL
              </div>
              <div className="border-2 text-gray-400 border-gray-300 text-xs px-2 py-1 rounded-md mr-2">
                M
              </div>
              <div className="border-2 text-gray-400 border-gray-300 text-xs px-2 py-1 rounded-md mr-2">
                L
              </div>
              <div className="border-2 text-gray-400 border-gray-300 text-xs px-2 py-1 rounded-md mr-2">
                S
              </div>
            </div>
            <div className="flex flex-col xl:flex-row justify-between">
              <a
                href="#"
                className="bg-gradient-to-r from-red-600 to-pink-500 hover:from-pink-500 hover:to-pink-500 rounded-full text-white py-2 px-4 flex flex-row text-sm justify-center my-2"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5 mr-1 inline-block"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
                Add to Cart
              </a>
              <a
                href="#"
                className="bg-purple-600 hover:bg-purple-700 rounded-full text-white py-2 px-4 flex flex-row text-sm justify-center my-2"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5 mr-1"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  />
                </svg>
                View Details
              </a>
            </div>
          </div>
        </div>
        <div className="shadow-lg rounded-lg my-2">
          <img src={productImg7} alt="product" className="rounded-t-lg" />
          <div className="p-3">
            <h3>T-Shirt</h3>
            <div className="flex flex-row my-2">
              <div className="bg-black h-5 w-5 rounded-full shadow-md mr-2"></div>
              <div className="bg-white h-5 w-5 rounded-full shadow-md mr-2"></div>
              <div className=" bg-green-600 h-5 w-5 rounded-full shadow-md mr-2"></div>
              <div className="bg-pink-500 h-5 w-5 rounded-full shadow-md mr-2"></div>
            </div>
            <div className="flex flex-row my-2">
              <div className="border-2 text-gray-400 border-gray-300 text-xs px-2 py-1 rounded-md mr-2">
                XL
              </div>
              <div className="border-2 text-gray-400 border-gray-300 text-xs px-2 py-1 rounded-md mr-2">
                2XL
              </div>
              <div className="border-2 text-gray-400 border-gray-300 text-xs px-2 py-1 rounded-md mr-2">
                M
              </div>
              <div className="border-2 text-gray-400 border-gray-300 text-xs px-2 py-1 rounded-md mr-2">
                L
              </div>
              <div className="border-2 text-gray-400 border-gray-300 text-xs px-2 py-1 rounded-md mr-2">
                S
              </div>
            </div>
            <div className="flex flex-col xl:flex-row justify-between">
              <a
                href="#"
                className="bg-gradient-to-r from-red-600 to-pink-500 hover:from-pink-500 hover:to-pink-500 rounded-full text-white py-2 px-4 flex flex-row text-sm justify-center my-2"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5 mr-1 inline-block"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
                Add to Cart
              </a>
              <a
                href="#"
                className="bg-purple-600 hover:bg-purple-700 rounded-full text-white py-2 px-4 flex flex-row text-sm justify-center my-2"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5 mr-1"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  />
                </svg>
                View Details
              </a>
            </div>
          </div>
        </div>
        <div className="shadow-lg rounded-lg my-2">
          <img src={productImg8} alt="product" className="rounded-t-lg" />
          <div className="p-3">
            <h3>T-Shirt</h3>
            <div className="flex flex-row my-2">
              <div className="bg-black h-5 w-5 rounded-full shadow-md mr-2"></div>
              <div className="bg-white h-5 w-5 rounded-full shadow-md mr-2"></div>
              <div className=" bg-green-600 h-5 w-5 rounded-full shadow-md mr-2"></div>
              <div className="bg-pink-500 h-5 w-5 rounded-full shadow-md mr-2"></div>
            </div>
            <div className="flex flex-row my-2">
              <div className="border-2 text-gray-400 border-gray-300 text-xs px-2 py-1 rounded-md mr-2">
                XL
              </div>
              <div className="border-2 text-gray-400 border-gray-300 text-xs px-2 py-1 rounded-md mr-2">
                2XL
              </div>
              <div className="border-2 text-gray-400 border-gray-300 text-xs px-2 py-1 rounded-md mr-2">
                M
              </div>
              <div className="border-2 text-gray-400 border-gray-300 text-xs px-2 py-1 rounded-md mr-2">
                L
              </div>
              <div className="border-2 text-gray-400 border-gray-300 text-xs px-2 py-1 rounded-md mr-2">
                S
              </div>
            </div>
            <div className="flex flex-col xl:flex-row justify-between">
              <a
                href="#"
                className="bg-gradient-to-r from-red-600 to-pink-500 hover:from-pink-500 hover:to-pink-500 rounded-full text-white py-2 px-4 flex flex-row text-sm justify-center my-2"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5 mr-1 inline-block"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
                Add to Cart
              </a>
              <a
                href="#"
                className="bg-purple-600 hover:bg-purple-700 rounded-full text-white py-2 px-4 flex flex-row text-sm justify-center my-2"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5 mr-1"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  />
                </svg>
                View Details
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* Women's Product end */}
      {/* news latter section */}
      <div className=" rounded-lg shadow-lg my-20 flex flex-row">
        <div className="lg:w-3/5 w-full bg-gradient-to-r from-black to-purple-800 lg:from-black lg:via-purple-700 lg:to-transparent rounded-lg p-8">
          <div className="w-1/2 text-gray-100">
            <h3 className="text-2xl font-extrabold mb-4">
              Subscribe to get our offer first
            </h3>
            <p className="mb-4 leading-relaxed">
              Chocolate and coffee ? Together ? Whoever came up with that
              combination should have won a Nobel Peace Prize
            </p>
            <div>
              <input
                type="email"
                placeholder="Enter Email"
                className="bg-gray-600 text-gray-200 placeholder-gray-400 w-full px-4 py-2 rounded-md focus:outline-none"
              />
              <button
                type="button"
                className=" bg-red-600 w-full py-2 mt-2 rounded-lg"
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>
        <div className="w-2/5 hidden lg:flex lg:flex-row">
          <img src={bannerImg} alt="" className="h-96" />
        </div>
      </div>
      {/* news latter section end */}
      <div className="flex flex-col md:flex-row text-center md:justify-between border-t-2 border-gray-300 py-4 text-sm">
        <div className="mb-4">
          <a className="mx-2.5">About</a>
          <a className="mx-2.5">Privacy Policy</a>
          <a className="mx-2.5">Term of Uses</a>
        </div>
        <p>&copy; All right reserve</p>
      </div>
    </div>
  );
}
