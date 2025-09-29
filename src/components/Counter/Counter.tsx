/**
 * @module
 */
import { IoMdArrowRoundUp } from "react-icons/io";
import { IoArrowDownOutline } from "react-icons/io5";

import { useState } from "react";

const Counter: React.FC = () => {
  // States
  const [counter, setCounter] = useState(() => {
    return 0;
  });

  // Handler functions
  const handleCounterIncrement = () => {
    setCounter((previous) => previous + 1);
  };
  const handleCounterDecrement = () => {
    setCounter((previous) => previous - 1);
  };

  return (
    <div className="flex items-center justify-center gap-6">
      <div className="text-white text-8xl font-bold duration-200 transition-all">
        {counter}
      </div>
      <div className="flex flex-row gap-2 h-full">
        <div className="flex flex-col gap-2">
          <button
            onClick={handleCounterIncrement}
            className="text-white border-1 rounded-md p-1 hover:bg-white hover:text-black hover:cursor-pointer duration-200 transition-all"
          >
            <IoMdArrowRoundUp size={20} />
          </button>
          <button
            onClick={handleCounterDecrement}
            className="text-white border-1 rounded-md p-1 hover:bg-white hover:text-black hover:cursor-pointer duration-200 transition-all"
          >
            <IoArrowDownOutline size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Counter;
