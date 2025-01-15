import { FaChevronDown, FaGear } from "react-icons/fa6";
import { BsViewList } from "react-icons/bs";
import { IoMdAdd } from "react-icons/io";
import TaskCard from "./TaskCard";
import PropTypes from "prop-types";
import { useState } from "react";
import { VscGear } from "react-icons/vsc";

const Column = (props) => {
  const [tasks, setTasks] = useState(props.tasks);
  return (
    <div className="flex gap-5">
      <div className="w-70 h-104 bg-gray-200 p-2  overflow-y-auto ">
        {/* Column Header */}
        <div className=" flex justify-between items-center  ">
          {/* Header Left Section */}
          <div className="flex items-center gap-1">
            <button>
              <FaChevronDown />
            </button>
            <h1
              style={{ backgroundColor: props.color }}
              className="w-fit h-fit rounded-3xl px-2 "
            >
              {props.title}
            </h1>
          </div>
          {/* Header Right Section */}
          <div className="flex items-center gap-2">
            <div className="flex items-center text-gray-700 gap-0.5">
              <BsViewList />
              <span className="text-xxs">{props.tasks.length}</span>
            </div>
            {props.title !== "Closed" && (
              <div className="flex space-x-1">
                <button
                  className="bg-white p-1"
                  onClick={function handleAddTask() {
                    console.log("Add Task Clicked");

                    setTasks([
                      ...tasks,
                      {
                        id: `${props.id}-${props.tasks.length + 1}`,
                        title: `Task${props.tasks.length + 1}`,
                        task_category: "",
                        task_number: props.tasks.length + 1,
                        due_date: "",
                      },
                    ]);

                    props.tasks.length = props.tasks.length + 1;
                  }}
                >
                  <IoMdAdd fontSize={20} />
                </button>
                {props.title !== "Closed" && props.title !== "Open" && (
                  <button
                    className="bg-white p-1"
                    onClick={function handleAddTask() {
                      console.log("Delete Column Clicked");
                      props.setLists((prevLists) => {
                        // Filter out the task with the specific task_id
                        return prevLists.filter((list) => list.id !== props.id);
                      });
                    }}
                  >
                    <VscGear fontSize={18} />
                  </button>
                )}
              </div>
            )}
          </div>
        </div>
        {/* Column Body */}
        {tasks.map((task) => {
          return (
            <TaskCard
              key={`${props.id}-${task.id}`}
              column_id={props.id}
              task_id={task.id}
              title={task.title}
              category={task.task_category}
              number={task.task_number}
              due_date={task.due_date}
              tasks={props.tasks}
              setTasks={setTasks}
            />
          );
        })}
      </div>
    </div>
  );
};
Column.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  tasks: PropTypes.array,
  color: PropTypes.string,
  lists: PropTypes.array,
  setLists: PropTypes.func,
};
export default Column;
