import CustomBadge from "./Badge";
import { BsViewList } from "react-icons/bs";
import { BiCalendar } from "react-icons/bi";
import { FaEllipsisV } from "react-icons/fa";
import PropTypes from "prop-types";

function TaskCard(props) {
  return (
    <div
      className="min-h-14 h-auto w-full bg-white p-2 space-y-1 my-2"
      key={`${props.column_id}-${props.task_id}`}
    >
      {/* Task Title & Menu */}
      <div className="flex items-center justify-between">
        {/* Task Title */}
        <h1>{props.title}</h1>
        {/* Ellipsis */}
        <button
          onClick={function () {
            //functional form of setState, guarantees that you're working with the most recent state.
            props.setTasks((prevTasks) => {
              // Filter out the task with the specific task_id
              return prevTasks.filter((task) => task.id !== props.task_id);
            });
            props.tasks.length--;
            /*
              - Instead of directly using props.tasks inside the onClick handler, we pass a function to setTasks, which receives the previous state (prevTasks) as an argument. This ensures that you're always working with the latest state, even if it's being updated asynchronously.
              - The filter method will then return a new array without the deleted task, and the state will be updated accordingly.
            
            */
          }}
        >
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
  column_id: PropTypes.number,
  task_id: PropTypes.string,
  title: PropTypes.string,
  category: PropTypes.string,
  number: PropTypes.number,
  due_date: PropTypes.string,
  tasks: PropTypes.array,
  setTasks: PropTypes.func,
};

export default TaskCard;
