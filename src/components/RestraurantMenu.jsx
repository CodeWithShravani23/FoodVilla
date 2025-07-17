import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import { useDispatch } from "react-redux";
import { addItem } from "../cartSlice";
import useRestro from "../utils/useRestro";

const RestraurantMenu = () => {
  const { id } = useParams();
  const restaurant = useRestro(id);  // Clean variable name
  const dispatch = useDispatch();

  const handleAddItem = () => dispatch(addItem(restaurant));

  return !restaurant ? (
    <Shimmer />
  ) : (
    <div className="flex justify-center px-4">
      <div className="max-w-md w-full bg-white rounded-lg shadow-md border hover:shadow-xl transition-shadow duration-300 overflow-hidden p-5 mt-20">
        <h1 className="text-2xl font-bold mb-2 text-center text-green-700">
          {restaurant.strCategory}
        </h1>
        <img
          src={restaurant.strCategoryThumb}
          alt={restaurant.strCategory}
          className="w-full h-64 object-cover rounded-md mb-4"
        />
        <p className="text-gray-700 text-sm mb-4">
          {restaurant.strCategoryDescription}
        </p>
        <div className="flex justify-between items-center mb-4">
          <p className="text-yellow-600 font-medium">
            4.5 <i className="fa-solid fa-star"></i>
          </p>
          <button
            className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-full text-sm transition"
            onClick={handleAddItem} data-testid="addbtn"
          >
            ➕ Add to Cart
          </button>
        </div>
        <p className="text-sm text-gray-400 text-center">ID: {id}</p>
      </div>
    </div>
  );
};

export default RestraurantMenu;

