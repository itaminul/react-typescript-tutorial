import { Link } from "react-router-dom"

const TopNav = () => {
    return(
        <nav>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>

                <li>
                    <Link to="/aboutindex">About</Link>
                </li>

                <li>
                    <Link to="/contact">Contact Us</Link>
                </li>
            </ul>
        </nav>
    )
}

export default TopNav