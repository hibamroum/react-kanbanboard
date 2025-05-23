import { FaChevronDown } from "react-icons/fa6";
import { BsViewList } from "react-icons/bs";
import { IoMdAdd } from "react-icons/io";
import TaskCard from "./TaskCard";
import PropTypes from "prop-types";
import { useState } from "react";
import { VscGear } from "react-icons/vsc";
import InfiniteScroll from "react-infinite-scroll-component";

const Column = (props) => {
  const [tasks, setTasks] = useState(props.tasks);
  const [visibleTasks, setVisibleTasks] = useState(tasks.slice(0, 5));
  const [hasMore, setHasMore] = useState(true);

  const fetchMoreTasks = () => {
    if (visibleTasks.length >= tasks.length) {
      setHasMore(false);
      return;
    }
    setTimeout(() => {
      setVisibleTasks((prev) => [
        ...prev,
        ...tasks.slice(prev.length, prev.length + 5),
      ]);
    }, 1000);
  };
  return (
    <div className="flex gap-5">
      <div
        id={`col-${props.index}`}
        className="w-70 h-104 bg-gray-200 p-2  overflow-y-auto "
      >
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
              <span className="text-xxs">{visibleTasks.length}</span>
            </div>
            {props.title !== "Closed" && (
              <div className="flex space-x-1">
                <button
                  className="bg-white p-1"
                  onClick={function handleAddTask() {
                    console.log("Add Task Clicked");

                    setVisibleTasks([
                      ...visibleTasks,
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

        <div>
          <InfiniteScroll
            dataLength={visibleTasks.length}
            next={fetchMoreTasks}
            scrollableTarget={`col-${props.index}`}
            hasMore={hasMore}
            loader={<h4>Loading...</h4>}
            endMessage={<p>No more tasks</p>}
          >
            {visibleTasks.map((task) => {
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
          </InfiniteScroll>
        </div>
      </div>
    </div>
  );
};
Column.propTypes = {
  index: PropTypes.number,
  id: PropTypes.number,
  title: PropTypes.string,
  tasks: PropTypes.array,
  color: PropTypes.string,
  lists: PropTypes.array,
  setLists: PropTypes.func,
};
export default Column;
