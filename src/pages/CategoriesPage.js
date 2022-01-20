import { useHistory } from "react-router-dom";
import { useLocation } from "react-router-dom";

export default function CategoriesPage() {
  const location = useLocation();
  const history = useHistory();
  const query = new URLSearchParams(location.search);
  const skip = query.get("skip") || 0; //por defecto 0
  const limit = query.get("limit") || 15; //por defecto 15
  console.log(skip);
  console.log(limit);

  const handleNext = () => {
    query.set("skip", 100);
    query.set("limit", 200);
    history.push({ pathname: "/contact" });
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
