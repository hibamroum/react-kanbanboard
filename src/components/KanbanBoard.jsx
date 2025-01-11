import Column from "./Column";

function KanbanBoard() {
  return (
    <div>
      <div className="flex gap-5 items-start p-3">
        <Column />
        <button className="border-2 px-2 rounded-xmd">+ New list</button>
      </div>
    </div>
  );
}

export default KanbanBoard;
