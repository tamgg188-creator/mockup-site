"use client"; // যেহেতু আমরা Animations এবং State ব্যবহার করব

import { useState, useEffect, useRef } from 'react';
import Head from 'next/head';

export default function HoneyLab() {
  const [itemsCount, setItemsCount] = useState(0);
  const [billSum, setBillSum] = useState(0);
  const [isPouring, setIsPouring] = useState(false);
  const UNIT_PRICE = 750;

  // Honey Pouring Action
  const handleAddToCart = () => {
    setIsPouring(true);
    // মধু পড়ার অ্যানিমেশন শেষ হলে কার্ট আপডেট হবে
    setTimeout(() => {
      setIsPouring(false);
      setItemsCount(prev => prev + 1);
      setBillSum(prev => prev + UNIT_PRICE);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-[#fffef2] font-['Hind_Siliguri'] flex flex-col items-center">
      {/* Navbar */}
      <nav className="w-full max-w-6xl p-6 flex justify-between items-start">
        <div className="text-2xl font-black text-amber-900 tracking-tighter">
          TAMJID HONEY <span className="text-amber-500">LAB</span> 
          <span className="text-xs font-normal text-gray-400 block mt-[-5px]">(NEXT.JS VERSION)</span>
        </div>

        <div className="flex items-center gap-4">
          <div className="bg-amber-500 p-3 rounded-xl text-white font-bold shadow-lg">
            ৳ {billSum}
          </div>
          <div className="relative bg-white p-4 rounded-2xl shadow-xl">
             🛒 <span className="absolute -top-1 -right-1 bg-amber-600 text-white text-[10px] rounded-full h-5 w-5 flex items-center justify-center">{itemsCount}</span>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="mt-20">
        <div className="bg-white p-12 rounded-[50px] shadow-2xl text-center max-w-sm w-full border border-amber-50">
          <div className={`text-8xl transition-all duration-700 ${isPouring ? 'translate-x-12 -rotate-45' : ''}`}>
            🍯
          </div>

          <h2 className="text-2xl font-bold text-gray-800 mt-6">খাঁটি মধু</h2>
          <div className="text-amber-600 font-bold text-xl my-2">৳{UNIT_PRICE}</div>
          
          <button 
            onClick={handleAddToCart}
            className="w-full bg-amber-600 hover:bg-amber-700 text-white font-bold py-5 rounded-2xl transition-all active:scale-95"
          >
            {isPouring ? 'মধু ঢালা হচ্ছে...' : 'কার্টে যুক্ত করুন'}
          </button>
        </div>
      </main>
    </div>
  );
}
