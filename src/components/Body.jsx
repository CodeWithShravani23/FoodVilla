import { useEffect, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import RestroCard from "./RestroCard";
import Shimmer from "./Shimmer"
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";


function filterData(searchText, restaurants) {
  return restaurants.filter((restaurant) =>
    restaurant.strCategory.toLowerCase().includes(searchText.toLowerCase())
  );
}

const Body = () => {
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchRestaurants();
  }, []);

  async function fetchRestaurants() {
    try {
      const res = await fetch("https://www.themealdb.com/api/json/v1/1/categories.php");
      const json = await res.json();
     
      setAllRestaurants(json?.categories);
      setFilteredRestaurants(json?.categories);
    } catch (err) {
      console.error("Error fetching restaurants:", err);
    }
  }

  const isOnline = useOnline();
  if (!isOnline) {
    return (
      <div className="text-center text-2xl font-semibold text-red-600 mt-10">
        🔴 You are Offline! Please check your internet connection.
      </div>
    );
  }

  return (
    <>
      <div className="flex justify-center mt-10 mb-6 mb-10">
        <input
          type="text"
          placeholder="Search for categories..."
          className="w-96 px-5 py-2 border border-gray-300 rounded-full shadow-md focus:outline-none focus:ring-2 focus:ring-orange-400"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button
          className="ml-3 px-4 py-2 bg-orange-500 text-white rounded-full hover:bg-orange-600 transition"
          onClick={() => {
            const data = filterData(searchText, allRestaurants);
            setFilteredRestaurants(data);
          }}
        >
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </button>
      </div>

      <div className="flex flex-wrap gap-8 justify-center px-4" data-testid="restro">
        {allRestaurants.length === 0 ? (
          <Shimmer />
        ) : filteredRestaurants.length > 0 ? (
          filteredRestaurants.map((item) => (
            <Link to={`/restraurant/${item.idCategory}`} key={item.idCategory}>
              <RestroCard {...item} />
            </Link>
          ))
        ) : (
          <p className="text-xl text-gray-500 mt-10">No results found.</p>
        )}
      </div>
    </>
  );
};

export default Body;

