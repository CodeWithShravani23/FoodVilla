import { useEffect, useState } from "react";
const restromenu=(id)=>{
     const [restraurant, setRestraurant] = useState(null);

  useEffect(() => {
    getRestraurant();
  }, []);

  async function getRestraurant() {
    const data = await fetch("https://www.themealdb.com/api/json/v1/1/categories.php");
    const json = await data.json();

    // find category by ID (note: idCategory is a string in the API)
    const matchedCategory = json.categories.find((cat) => cat.idCategory === id);

    setRestraurant(matchedCategory);
  }
return restraurant
}
export default restromenu