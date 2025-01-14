import { useState } from "react";
import { BiChevronDown } from "react-icons/bi";
import { SlMagnifier } from "react-icons/sl";

import CustomBadge from "./Badge";
function SearchableDropdown() {
  const [selectedOption, setSelectedOption] = useState(null);
  const [isDropdown, setIsDropdown] = useState(false);
  const [searchValue, setSearchValue] = useState("Search Labels");

  const categories = [
    {
      category_name: "Bug",
      color: "red",
    },
    {
      category_name: "Dashboard",
      color: "green",
    },
    {
      category_name: "DB",
      color: "blue",
    },
    {
      category_name: "Feature",
      color: "orange",
    },
    {
      category_name: "Form",
      color: "black",
    },
    {
      category_name: "Manager",
      color: "lightblue",
    },
    {
      category_name: "UI",
      color: "purple",
    },
  ];
  return (
    <div>
      <button
        className="flex bg-white items-center px-2 border  border-gray-500"
        onClick={function () {
          setIsDropdown(!isDropdown);
        }}
      >
        Select a label <BiChevronDown />
      </button>
      {isDropdown && (
        <div className="w-52 ">
          <button className="bg-white p-1 rounded-md flex items-center justify-evenly mt-1">
            <SlMagnifier color="gray" size={12} />
            <input
              type="search"
              placeholder="Search Labels"
              className=" pl-8 text-xs"
            />
          </button>
          <div className="h-fit bg-white border-t-2 rounded-md flex flex-col  text-sm p-2">
            {categories.map((category, index) => {
              return (
                <button
                  className="flex items-center gap-2 pl-10 py-2 w-full hover:bg-gray-200 "
                  key={index}
                >
                  <CustomBadge color={category.color} />
                  {category.category_name}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}

export default SearchableDropdown;
