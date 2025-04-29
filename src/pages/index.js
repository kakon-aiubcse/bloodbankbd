import React from "react";
import Header from "@/components/header";

export default function Home() {
  return (
    <>
    <div className="overflow-hidden">
      <Header/>
    </div>
      <div className="flex flex-col items-center justify-center text-3xl text-gray-300 font-extrabold h-screen w-auto bg-red-800">Looking for emergency blood?</div>
    </>
  );
}
