import { FaChevronDown } from "react-icons/fa6";
import { BsViewList } from "react-icons/bs";
import { IoMdAdd } from "react-icons/io";
import TaskCard from "./TaskCard";
import { storedTasks } from "../data/tasks";
import { useState } from "react";

const Column = () => {
  const [tasks, setTasks] = useState(storedTasks);
  return (
    <div className="flex gap-5">
      {/* Column One: Open */}
      <div className="w-70 h-104 bg-gray-200 p-2  overflow-y-scroll ">
        {/* Column Header */}
        <div className=" flex justify-between items-center  ">
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
              <span className="text-xxs">0</span>
            </div>
            <button
              className="bg-white"
              onClick={function handleAddTask() {
                console.log("Add Task Clicked");
                setTasks([
                  ...tasks,
                  {
                    column: {
                      id: 1,
                      name: "Open",
                    },
                    id: tasks.length + 1,
                    title: `Task ${tasks.length + 1}`,
                    task_category: "",
                    task_number: tasks.length + 1,
                    due_date: "",
                  },
                ]);
              }}
            >
              <IoMdAdd fontSize={18} />
            </button>
          </div>
        </div>
        {/* Column Body */}
        {tasks.map((task) => {
          return (
            <TaskCard
              key={`${task.column.id}-${task.id}`}
              title={task.title}
              categorty={task.task_category}
              number={task.task_number}
              data={task.due_date}
            />
          );
        })}
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
              <span className="text-xxs">0</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Column;
