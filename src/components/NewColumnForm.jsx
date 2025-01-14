import SearchableDropdown from "./SearchableDropdown";

function NewColumnForm() {
  return (
    <div className="w-70 h-104 bg-gray-200 p-2 flex flex-col justify-between">
      <div>
        <h1>New List</h1>

        <h1>Scope</h1>
        <p>Issues must match this scope to appear in this list</p>
        <SearchableDropdown />
      </div>
      <div className="space-x-2">
        <button className="bg-blue-600 text-white border-2 border-gray-400 px-2">
          Add to board
        </button>
        <button className="bg-white  border-2 border-gray-400 px-2">
          Cancel
        </button>
      </div>
    </div>
  );
}

export default NewColumnForm;
