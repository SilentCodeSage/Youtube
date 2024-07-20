import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "./utils/appSlice";
import { cacheResults } from "./utils/searchSlice";
import { toggleState } from "./utils/appSlice";
import { newSearchQuery } from "./utils/searchSlice";
import { menu } from "./utils/constants";

const Header = () => {
  //using dipatch a reducer can be dispatched
  const dispatch = useDispatch();
  //search input data stored in the state variable searchData
  const [searchData, setSearchData] = useState("");
  //list of suggestions of the search input stored in the state variable suggestions
  const [suggestions, setSuggestions] = useState([]);
  //to manipulate the appearing of the suggestions another state variable show suggestions
  const [showSuggestions, setShowSuggestions] = useState(false);

  //subscribing to the store whenever the store.search changes the component will re-render
  const searchCache = useSelector((store) => store.search);

  const toggleMenuHandler = () => {
    //using dispatch we are accessing the reducer function toggleMenu 
    dispatch(toggleMenu());
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      /// if cached and data is found in the cache
      if (searchCache[searchData]) {
        setSearchData(searchData);
      } else {
        fetchData();
      }
    }, 200);
    ///fetchData();
    return () => {
      clearTimeout(timer);
    };
  }, [searchData]);

  const fetchData = async () => {
    const api = await fetch(
      "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=" +
        searchData
    );
    const result = await api.json();
    setSuggestions(result[1]);
    //update cache
    dispatch(
      cacheResults({
        [searchData]: result[1],
      })
    );
  };

  return (
    <div className="fixed top-0 left-0 w-full h-22 bg-white text-white px-4 py-3 z-50">
      <div className="grid grid-flow-col gap-2 mx-2 px-2 overflow-hidden">
        <div className="flex col-span-1 items-center">
          <img
            onClick={toggleMenuHandler}
            className="cursor-pointer w-12 h-12"
            src={menu}
            alt="menu"
          />
          <img
            className="w-24 h-22"
            src="data:image/png;base64,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"
            alt="logo"
          />
        </div>

        <div className="flex flex-col col-span-10 items-center">
          <div className=" w-6/12 ">
            <div className="flex justify-center w-full">
              <input
                className="border rounded-l-full w-full h-12 px-8 text-black"
                type="text"
                name="search"
                id=""
                onChange={(e) => setSearchData(e.target.value)}
                onFocus={() => setShowSuggestions(true)}
                onBlur={() => {
                  //giving 100 ms before bluring to slelct from list
                  setTimeout(() => {
                    setShowSuggestions(false);
                  }, 100);
                }}
              />
              <button className="rounded-r-full border h-12 px-8">
                <img
                  className="w-5 h-5"
                  src="https://cdn-icons-png.flaticon.com/512/54/54481.png"
                  alt=""
                />
              </button>
            </div>

            {showSuggestions == true ? (
              <div className="flex justify-start">
                <div className=" mt-4 shadow-2xl border border-gray-200 rounded-xl absolute bg-white w-[38rem]">
                  <ul className="my-4">
                    {suggestions.map((data, index) => (
                      <li key={index}
                        onClick={() => {
                          dispatch(toggleState());
                          //setting the searchQuery Result from suggestions  array to the variable inside the store using the reducer newSearchQuery
                          dispatch(newSearchQuery(data));
                          //hiding the suggestions after clicking
                          setShowSuggestions(false);
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
                <img
                  className="w-3 h-3"
                  src="https://cdn-icons-png.flaticon.com/512/54/54481.png"
                  alt=""
                />
              </div>
            ) : null}
          </div>
        </div>

        <div className="flex col-span-1 items-center">
          <img
            className="w-8 h-8 mx-4"
            src="data:image/png;base64,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"
            alt="rec"
          />
          <img
            className="w-8 h-8 mx-4"
            src="data:image/png;base64,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"
            alt="user"
          />
        </div>
      </div>
    </div>
  );
};
export default Header;
