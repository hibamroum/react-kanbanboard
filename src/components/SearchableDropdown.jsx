import { useState } from "react";
import { BiChevronDown } from "react-icons/bi";
import { SlMagnifier } from "react-icons/sl";

import CustomBadge from "./Badge";
import PropTypes from "prop-types";
function SearchableDropdown(props) {
  const [isDropdown, setIsDropdown] = useState(false);
  //const [searchValue, setSearchValue] = useState("Search Labels");

  return (
    <div>
      <button
        className="flex bg-white items-center px-2 border  border-gray-500"
        id="select_btn"
        onClick={function () {
          setIsDropdown(!isDropdown);
        }}
      >
        <div id="cat_color"></div>
        <p>Select a label</p>{" "}
        <div>
          <BiChevronDown />
        </div>
      </button>
      {isDropdown && (
        <div className="w-52 bg-black">
          <div className="bg-white p-1 rounded-t-md flex items-center justify-evenly mt-1 border-t-gray-500">
            <SlMagnifier color="gray" size={12} id="maginifier" />
            <input
              type="search"
              placeholder="Search Labels"
              className=" pl-8 text-xs outline-none"
              id="categories_input"
            />
          </div>
          <div className="h-fit bg-white border-t-2 border-t-gray-300 rounded-b-md flex flex-col  text-sm p-1">
            {props.categories.map((category, index) => {
              return (
                <button
                  className="flex items-center gap-2 pl-10 py-1 w-full hover:bg-gray-200 "
                  key={index}
                  onClick={function () {
                    let select_button = document.getElementById("select_btn");
                    select_button.childNodes[1].innerText =
                      category.category_name;
                    let cat_color = document.getElementById("cat_color");

                    cat_color.setAttribute("class", "w-5 h-2 rounded-md");
                    cat_color.setAttribute(
                      "style",
                      `background-color:${category.color}`
                    );
                    setIsDropdown(!isDropdown);
                    props.setSelectedOption(category.category_name);
                    props.setCategoryId(category.id);
                  }}
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

SearchableDropdown.propTypes = {
  categories: PropTypes.array,
  setSelectedOption: PropTypes.func,
  setCategoryId: PropTypes.func,
};
export default SearchableDropdown;
