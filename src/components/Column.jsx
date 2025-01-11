import { FaChevronDown } from "react-icons/fa6";
import { BsViewList } from "react-icons/bs";
import { IoMdAdd } from "react-icons/io";

const Column = () => {
  return (
    <div className="flex gap-5">
      {/* Column One: Open */}
      <div className="w-70 h-104 bg-gray-200 ">
        {/* Column Header */}
        <div className=" flex justify-between items-center p-2 ">
          {/* Header Left Section */}
          <div className="flex items-center gap-1">
            <button>
              <FaChevronDown />
            </button>
            <h1>Open</h1>
          </div>
          {/* Header Right Section */}
          <div className="flex items-center gap-2">
            <div className="flex items-center text-gray-700 gap-0.5">
              <BsViewList />
              <span className="text-xs">0</span>
            </div>
            <button className="bg-white">
              <IoMdAdd fontSize={18} />
            </button>
          </div>
        </div>
      </div>
      {/* Column Two: Closed */}
      <div className="w-70 h-104 bg-gray-200 ">
        {/* Column Header */}
        <div className=" flex justify-between items-center p-2 ">
          {/* Header Left Section */}
          <div className="flex items-center gap-1">
            <button>
              <FaChevronDown />
            </button>
            <h1>Closed</h1>
          </div>
          {/* Header Right Section */}
          <div className="flex items-center gap-2">
            <div className="flex items-center text-gray-700 gap-0.5">
              <BsViewList />
              <span className="text-xs">0</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Column;
