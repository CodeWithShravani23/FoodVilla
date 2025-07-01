import { useDispatch } from "react-redux";
import { addItem } from "../cartSlice";

const RestroCard = ({ idCategory, strCategory, strCategoryThumb, strCategoryDescription }) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addItem({ id: idCategory, name: strCategory }));
  };

  return (
    <div className="max-w-xs w-72 bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden p-4 flex flex-col justify-between">
      
      <img
        src={strCategoryThumb}
        alt={strCategory}
        className="w-full h-44 object-cover rounded-lg mb-3"
      />

      <div className="text-gray-800">
        <h3 className="text-xl font-semibold mb-1">{strCategory}</h3>
        <p className="text-sm text-gray-600 mb-3">
          {strCategoryDescription.split(" ").slice(0, 10).join(" ") + "..."}
        </p>

        <div className="flex justify-between items-center mt-auto">
          <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-sm font-medium">
            ⭐ 4.5
          </span>

          <button
            onClick={handleAddToCart}
            className="bg-purple-600 hover:bg-purple-700 text-white px-3 py-1 rounded-full text-sm"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default RestroCard;

