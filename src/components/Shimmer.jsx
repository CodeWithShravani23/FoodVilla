

const Shimmer = () => {
  return (
    <div className="flex flex-wrap gap-10 justify-center mt-8">
      {Array(8).fill("").map((_, index) => (
        <div
          key={index}
          className="w-72 h-80 bg-gray-200 rounded-2xl animate-pulse p-4 shadow"
        >
          <div className="w-full h-40 bg-gray-300 rounded-lg mb-4"></div>

          <div className="h-4 bg-gray-300 rounded w-3/4 mb-2"></div>
          <div className="h-3 bg-gray-300 rounded w-full mb-2"></div>
          <div className="h-3 bg-gray-300 rounded w-5/6 mb-4"></div>

          <div className="flex justify-between mt-auto">
            <div className="h-6 w-14 bg-gray-300 rounded-full"></div>
            <div className="h-6 w-20 bg-gray-300 rounded-full"></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Shimmer;

