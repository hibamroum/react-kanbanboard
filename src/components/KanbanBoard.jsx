import { useEffect, useState } from "react";
import Column from "./Column";

import NewColumnForm from "./NewColumnForm";
// import { storedTasks } from "../../data/tasks";

function KanbanBoard() {
  const [lists, setLists] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [isNewList, setIsNewList] = useState(false);
  const [storedTasks, setStoredTasks] = useState();

  const fetchTasks = async () => {
    let dataURL = "../../data/tasks.json";
    try {
      const response = await fetch(dataURL);
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const result = await response.json();
      setStoredTasks(result.tasks);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      let dataURL = "../../data/columns.json";
      try {
        const response = await fetch(dataURL);
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const result = await response.json();
        setLists(result.columns);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  if (!lists) return null; // or initial state handling

  return (
    <div>
      <div className="flex gap-5 items-start p-3">
        {lists.map((col, index) => {
          return (
            <Column
              key={index}
              index={index}
              id={col.id}
              title={col.name}
              tasks={col.tasks}
              color={col.color ? col.color : ""}
              list={lists}
              setLists={setLists}
            />
          );
        })}
        {!isNewList && (
          <button
            className="border-2 px-2 rounded-xmd"
            onClick={function () {
              setIsNewList(true);
              fetchTasks();
            }}
          >
            + New list
          </button>
        )}
        {isNewList && (
          <NewColumnForm
            setIsNewList={setIsNewList}
            lists={lists}
            setLists={setLists}
            storedTasks={storedTasks}
            setStoredTasks={setStoredTasks}
          />
        )}
      </div>
    </div>
  );
}

export default KanbanBoard;
