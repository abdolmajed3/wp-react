import { useEffect, useState } from "react";
import API_URL from "../config";

const Categories = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch(`${API_URL}/categories`)
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])

    return (
        <div className="categories">
            <h2>Categories</h2>
            <ul>
                {categories.map(category => (
                    <li key={category.id}>{category.name}</li>
                ))}
            </ul>
        </div>
    )
}

export default Categories