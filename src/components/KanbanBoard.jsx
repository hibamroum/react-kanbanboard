import { useState } from "react";
import Column from "./Column";
import NewColumnForm from "./NewColumnForm";
import { storedTasks } from "../data/tasks";

function KanbanBoard() {
  const [openTasks, setOpenTasks] = useState(
    storedTasks.filter((task) => {
      return task.column.id == 1;
    })
  );
  const [closedTasks, setClosedTasks] = useState(
    storedTasks.filter((task) => {
      return task.column.id == 2;
    })
  );
  const [isNewList, setIsNewList] = useState(false);

  return (
    <div>
      <div className="flex gap-5 items-start p-3">
        <Column title="Open" tasks={openTasks} setTasks={setOpenTasks} />
        <Column title="Closed" tasks={closedTasks} setTasks={setClosedTasks} />
        {!isNewList && (
          <button
            className="border-2 px-2 rounded-xmd"
            onClick={function () {
              setIsNewList(true);
            }}
          >
            + New list
          </button>
        )}
        {isNewList && <NewColumnForm setIsNewList={setIsNewList} />}
      </div>
    </div>
  );
}

export default KanbanBoard;
