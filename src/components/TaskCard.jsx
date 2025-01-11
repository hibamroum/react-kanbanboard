import CustomBadge from "./Badge";
import { BsViewList } from "react-icons/bs";
import { BiCalendar } from "react-icons/bi";

import { FaEllipsisV } from "react-icons/fa";
function TaskCard() {
  return (
    <div className="min-h-14 h-auto w-full bg-white p-2 space-y-1">
      {/* Task Title & Menu */}
      <div className="flex items-center justify-between">
        {/* Task Title */}
        <h1>Task 1</h1>
        {/* Ellipsis */}
        <button>
          <FaEllipsisV fontSize={14} />
        </button>
      </div>
      {/* Task Category */}
      <CustomBadge />
      {/* Task Number & Date */}
      <div className="flex gap-4 text-sm text-gray-500">
        {/* Task Number */}
        <div className="flex items-center gap-1">
          <BsViewList />
          <span>#0</span>
        </div>
        {/* Task Date */}
        <div className="flex items-center">
          <BiCalendar />
          <span>Feb 17</span>
        </div>
      </div>
    </div>
  );
}

export default TaskCard;
