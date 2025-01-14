import SearchableDropdown from "./SearchableDropdown";

function NewColumnForm() {
  return (
    <div className="w-70 h-104 bg-gray-200 p-2">
      <h1>New List</h1>
      <h1>Scope</h1>
      <p>Issues must match this scope to appear in this list</p>
      <SearchableDropdown />
    </div>
  );
}

export default NewColumnForm;
