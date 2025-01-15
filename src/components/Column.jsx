import { FaChevronDown } from "react-icons/fa6";
import { BsViewList } from "react-icons/bs";
import { IoMdAdd } from "react-icons/io";
import TaskCard from "./TaskCard";
import PropTypes from "prop-types";

const Column = (props) => {
  return (
    <div className="flex gap-5">
      {/* Column One: Open */}
      <div className="w-70 h-104 bg-gray-200 p-2  overflow-y-auto ">
        {/* Column Header */}
        <div className=" flex justify-between items-center  ">
          {/* Header Left Section */}
          <div className="flex items-center gap-1">
            <button>
              <FaChevronDown />
            </button>
            <h1>{props.title}</h1>
          </div>
          {/* Header Right Section */}
          <div className="flex items-center gap-2">
            <div className="flex items-center text-gray-700 gap-0.5">
              <BsViewList />
              <span className="text-xxs">{props.tasks.length}</span>
            </div>
            {props.title == "Open" && (
              <button
                className="bg-white"
                onClick={function handleAddTask() {
                  console.log("Add Task Clicked");
                  props.setTasks([
                    ...props.tasks,
                    {
                      column: {
                        id: 1,
                        name: "Open",
                      },
                      id: props.tasks.length + 1,
                      title: `Task${props.tasks.length + 1}`,
                      task_category: "",
                      task_number: props.tasks.length + 1,
                      due_date: "",
                    },
                  ]);
                  props.tasks.length = props.tasks.length + 1;
                }}
              >
                <IoMdAdd fontSize={18} />
              </button>
            )}
          </div>
        </div>
        {/* Column Body */}
        {props.tasks.map((task) => {
          return (
            <TaskCard
              key={`${task.column.id}-${task.id}`}
              column_id={task.column.id}
              task_id={task.id}
              title={task.title}
              categorty={task.task_category}
              number={task.task_number}
              due_date={task.due_date}
              tasks={props.tasks}
              setTasks={props.setTasks}
            />
          );
        })}
      </div>
    </div>
  );
};
Column.propTypes = {
  title: PropTypes.string,
  tasks: PropTypes.array,
  setTasks: PropTypes.func,
};
export default Column;
