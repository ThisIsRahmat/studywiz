import React from 'react';

export default function LoadingDots(){
  return (
  //   <div className="flex justify-center items-center"> Cooking up some questions...</span>
  //   </div>
  // );
  <button
  type="button"
  className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 opacity-75 cursor-not-allowed"
  disabled
>
  <div className="flex items-center justify-center">
    <span className="animate-pulse">Cooking up some questions</span>
    <span className="animate-pulse mx-1">.</span>
    <span className="animate-pulse mx-1">.</span>
    <span className="animate-pulse mx-1">.</span>
  </div>
</button>
);
};



