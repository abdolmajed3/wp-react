import { useEffect, useState } from "react";
import API_URL from "../config";

/**
 * Function to fetch and display categories.
 * @returns JSX.Element The component for displaying categories.
 */
const Categories = () => {
    const [categories, setCategories] = useState([]);

    /**
     * Fetch categories from the API when the component mounts.
     */
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