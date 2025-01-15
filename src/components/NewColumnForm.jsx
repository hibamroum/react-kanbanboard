import PropTypes from "prop-types";
import SearchableDropdown from "./SearchableDropdown";
import Column from "./Column";
import { useState } from "react";
function NewColumnForm(props) {
  const [selectedOption, setSelectedOption] = useState(null);
  const [categoryId, setCategoryId] = useState();

  const categories = [
    {
      category_name: "Bug",
      color: "red",
      id: 3,
    },
    {
      category_name: "Dashboard",
      color: "green",
      id: 4,
    },
    {
      category_name: "DB",
      color: "blue",
      id: 5,
    },
    {
      category_name: "Feature",
      color: "orange",
      id: 6,
    },
    {
      category_name: "Form",
      color: "black",
      id: 7,
    },
    {
      category_name: "Manager",
      color: "gray",
      id: 8,
    },
    {
      category_name: "UI",
      color: "violet",
      id: 9,
    },
  ];
  return (
    <div className="w-70 h-104 bg-gray-200 p-2 flex flex-col justify-between">
      <div>
        <h1>New List</h1>

        <h1>Scope</h1>
        <p>Issues must match this scope to appear in this list</p>
        <SearchableDropdown
          setSelectedOption={setSelectedOption}
          categories={categories}
          setCategoryId={setCategoryId}
        />
      </div>
      <div className="space-x-2">
        <button
          className="bg-blue-600 text-white border-2 border-gray-400 px-2"
          onClick={function () {}}
        >
          Add to board
        </button>
        <button
          className="bg-white  border-2 border-gray-400 px-2"
          onClick={function () {
            props.setIsNewList(false);
          }}
        >
          Cancel
        </button>
      </div>
    </div>
  );
}
NewColumnForm.propTypes = {
  setIsNewList: PropTypes.func,
};
export default NewColumnForm;
