import "./index.css";
import { FaChevronDown } from "react-icons/fa6";
import { BsViewList } from "react-icons/bs";
import { IoMdAdd } from "react-icons/io";
export default function App() {
  return (
    <div className="flex gap-5 items-start p-3">
      <div className="w-70 h-104 bg-gray-200 ">
        <div className=" flex justify-between items-center p-2 ">
          <div className="flex items-center gap-1">
            <button>
              <FaChevronDown />
            </button>
            <h1>Open</h1>
          </div>
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
      <div className="w-70 h-104 bg-gray-200 ">
        <div className=" flex justify-between items-center p-2 ">
          <div className="flex items-center gap-1">
            <button>
              <FaChevronDown />
            </button>
            <h1>Closed</h1>
          </div>
          <div className="flex items-center gap-2">
            <div className="flex items-center text-gray-700 gap-0.5">
              <BsViewList />
              <span className="text-xs">0</span>
            </div>
          </div>
        </div>
      </div>
      <button className="border-2 px-2 rounded-xmd">+ New list</button>
    </div>
  );
}
