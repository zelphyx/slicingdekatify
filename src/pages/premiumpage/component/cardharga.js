// cardGenerator.js

import React from 'react';

function Card({ price, features,type,duration }) {
    return (
        <div className="flex items-center justify-center h-full mt-4">
            <div className="relative flex flex-col bg-clip-border rounded-xl bg-gradient-to-tr from-gray-900 to-gray-800 text-white shadow-gray-900/20 shadow-md w-full max-w-[25rem] p-8">
                <div className="relative pb-8 m-0 mb-8 overflow-hidden text-center text-gray-700 bg-transparent border-b rounded-none shadow-none bg-clip-border border-white/10">
                    <p className="blopck font-sans text-sm antialiased font-normal leading-normal text-white uppercase">{type}</p>
                    <h1 className="flex justify-center gap-1 mt-6 font-sans antialiased font-normal tracking-normal text-white text-7xl">
                        <span className="mt-2 text-4xl">Rp. {price}.000,-</span>
                        <span className="self-end text-4xl">/{duration}</span>
                    </h1>
                </div>
                <div className="flex flex-col gap-4">
                    {features.map((feature, index) => (
                        <div key={index} className="flex items-center gap-4">
              <span className="p-1 border rounded-full border-white/20 bg-white/20">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" className="w-3 h-3">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5"></path>
                </svg>
              </span>
                            <p className="block font-sans text-base antialiased font-normal leading-relaxed text-inherit">{feature}</p>
                        </div>
                    ))}
                </div>
                <div className="p-0 mt-12">
                    <button type="button"
                            className="text-black font-bold bg-white hover:bg-yellow-400 rounded-full text-sm px-20 py-3 text-center mb-2 ">Dapatkan
                        Paket Dekkers
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Card;


