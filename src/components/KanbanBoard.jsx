import { useState } from "react";
import Column from "./Column";
import NewColumnForm from "./NewColumnForm";

function KanbanBoard() {
  const [isNewList, setIsNewList] = useState(false);
  return (
    <div>
      <div className="flex gap-5 items-start p-3">
        <Column />
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
        {isNewList && <NewColumnForm />}
      </div>
    </div>
  );
}

export default KanbanBoard;
