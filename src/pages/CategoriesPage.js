import { useHistory } from "react-router-dom";
import { useLocation } from "react-router-dom";

export default function CategoriesPage() {
  const location = useLocation();
  const history = useHistory();
  const query = new URLSearchParams(location.search);
  const skip = parseInt(query.get("skip")) || 0; //por defecto 0
  const limit = parseInt( query.get("limit")) || 15; //por defecto 15
  console.log(skip);
  console.log(limit);

  const handleNext = () => {
    query.set("skip", skip + limit);
    //query.set("limit", 200);
    history.push({
      // pathname: "/contact",
      search: query.toString(),
    });
  };

  return (
    <div>
      <h1>CategoriesPage:</h1>
      <h2>{skip}</h2>
      <h2>{limit}</h2>
      <button onClick={handleNext}>Next</button>
    </div>
  );
}
