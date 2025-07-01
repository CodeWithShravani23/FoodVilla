const FoodItem = ({ idCategory, strCategory, strCategoryThumb, strCategoryDescription }) => {
  // Fallback text if description is undefined or not a string
  const shortDescription =
    typeof strCategoryDescription === "string"
      ? strCategoryDescription.split(" ").slice(0, 8).join(" ") + "..."
      : "No description available.";

  return (
    <div className="max-w-xs rounded-lg shadow-md border hover:shadow-xl transition-shadow duration-500 overflow-hidden p-3">
      <img
        src={strCategoryThumb}
        alt={strCategory}
        className="w-full h-48 object-cover rounded-md mb-2"
      />

      <div className="content">
        <p className="font-semibold text-lg mb-1">{strCategory}</p>
        <p className="text-sm text-gray-700 mb-2">{shortDescription}</p>
        <p className="text-yellow-600 font-medium">
          4.5 <i className="fa-solid fa-star fa-icon"></i>
        </p>
      </div>
    </div>
  );
};

export default FoodItem;


