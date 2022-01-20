import { useLocation } from "react-router-dom";

export default function CategoriesPage() {
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const skip = query.get("skip")
  const limit = query.get("limit")
  console.log(skip);
  console.log(limit);
  
  return (
    <div>
      <h1>CategoriesPage:</h1>
      <h2>{skip}</h2>
      <h2>{limit}</h2>
    </div>
  );
}
