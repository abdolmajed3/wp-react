import { Link } from "react-router-dom"

const Header = () => {
    return (
        <header>
            <h1>My Website</h1>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/categories">All catwgories</Link></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header