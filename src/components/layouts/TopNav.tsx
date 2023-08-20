import { Link } from "react-router-dom"

const TopNav = () => {
    return(
        <nav>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>

                <li>
                    <Link to="/about">About</Link>
                </li>

                <li>
                    <Link to="/contact">Contact Us</Link>
                </li>
            </ul>
        </nav>
    )
}

export default TopNav