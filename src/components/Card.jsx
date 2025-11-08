import { useState } from "react";

export default function Card() {
  let [name, setName] = useState("Grace");
  let [count, setCount] = useState(0);

  
    
  function incrimante(){
    setCount(prevCount => prevCount+1);
  };

  function decrimante(){
    setCount(prevCount =>prevCount - 1);
  };

  return (
    <div>
      <h1 className="w-full py-10 bg-blue-200 text-xl font-bold pl-10">
        {name}
      </h1>
      <button
        onClick={() => setName("Amani")}
        className="bg-blue-500 px-5 py-5 rounded-md ml-10"
      >
        Change Name
      </button>


      {/* button de crimante */}
      <div className="w-[100px] flex justify-between mt-5 text-xl font-bold ml-10">
        <button onClick={decrimante} className="w-8 h-8 bg-red-500 rounded-full">-</button>
        <h1>{count}</h1>
        <button onClick={incrimante} className="w-8 h-8 bg-blue-500 rounded-full">+</button>
      </div>
    </div>
  );
}