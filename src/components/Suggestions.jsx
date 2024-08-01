import React from "react";
import { toggleState } from "./utils/appSlice";
import { useDispatch } from "react-redux";
import { newSearchQuery } from "./utils/searchSlice";
import { useSelector } from "react-redux";
import { toggleSuggestions } from "./utils/appSlice";

const Suggestions = ({suggestions}) => {
    //const isSuggestions = useSelector((store) => store.app.isSuggestions);
const dispatch = useDispatch();
  return (
    <div className="flex justify-center">
      <div className=" mt-1 shadow-2xl border border-gray-200 rounded-xl absolute bg-white w-96 md:w-[38rem]">
        <ul className="my-4">
          {suggestions.map((data, index) => (
            //suggestions.length!==0 &&
            <li
              key={index}
              onClick={() => {
                dispatch(toggleState());
                //setting the searchQuery Result from suggestions  array to the variable inside the store using the reducer newSearchQuery
                dispatch(newSearchQuery(data));
                //hiding the suggestions after clicking
                dispatch(toggleSuggestions(false));
              }}
              className="flex items-center hover:bg-gray-100 px-4 py-2 cursor-pointer text-black"
            >
              <img
                className="w-5 h-5 mr-3"
                src="https://cdn-icons-png.flaticon.com/512/54/54481.png"
                alt=""
              />
              {"  " + data}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Suggestions;
