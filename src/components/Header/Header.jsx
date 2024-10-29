import { NavLink } from 'react-router-dom';
import "./Header.css"

const Header = () => {
    return (
        <div>
            <h2>Navbar</h2>

            <nav>
                {/* <span>My Website</span> */}
                {/* <Link to="/">Home</Link>
                <Link to="/users">Users</Link>
                <Link to="/posts">Posts</Link>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact Us</Link> */}

                <NavLink to="/">Home</NavLink>
                <NavLink to="/users">Users</NavLink>
                <NavLink to="/posts">Posts</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/contact">Contact Us</NavLink>
                
            </nav>
        </div>
    );
};

export default Header;