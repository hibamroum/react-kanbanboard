import CustomBadge from "./Badge";
import { BsViewList } from "react-icons/bs";
import { BiCalendar } from "react-icons/bi";
import { FaEllipsisV } from "react-icons/fa";
import PropTypes from "prop-types";

function TaskCard(props) {
  return (
    <div className="min-h-14 h-auto w-full bg-white p-2 space-y-1 my-2">
      {/* Task Title & Menu */}
      <div className="flex items-center justify-between">
        {/* Task Title */}
        <h1>{props.title}</h1>
        {/* Ellipsis */}
        <button>
          <FaEllipsisV fontSize={14} />
        </button>
      </div>
      {/* Task Category */}
      <CustomBadge category={props.category} />
      {/* Task Number & Date */}
      <div className="flex gap-4 text-sm text-gray-500">
        {/* Task Number */}
        <div className="flex items-center gap-1">
          <BsViewList />
          <span>#{props.number}</span>
        </div>
        {/* Task Date */}
        <div className="flex items-center">
          <BiCalendar />
          <span>{props.due_date}</span>
        </div>
      </div>
    </div>
  );
  
}
TaskCard.propTypes = {
  title: PropTypes.string,
  category: PropTypes.string,
  number: PropTypes.number,
  due_date: PropTypes.string,
};

export default TaskCard;
