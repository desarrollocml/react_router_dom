import { useLocation } from "react-router-dom"

export default function CategoriesPage() {
    const location=useLocation();
    console.log(location.search);
    //?skip=10&limit=10
  return (
    <div>
        <h1>CategoriesPage:</h1>
    </div>
  )
}
