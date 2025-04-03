import { useContext } from "react";
import { Link } from "react-router";
import { UserContext } from "../../contexts/UserContext";

const NavBar = () => {
    // Pass the UserContext object to the useContext hook to access:
    // - The user state (which we use here).
    // - The setUser function to update the user state (which we aren't using).
    //
    // Destructure the object returned by the useContext hook for easy access
    // to the data we added to the context with familiar names.
    const { user } = useContext(UserContext);

    return (
        <nav>
            <ul>
                {user ? (
                    <li>Welcome, {user.username}</li>
                ) : (
                    <li>
                        <Link to="/sign-up">
                            Sign Up
                        </Link>
                    </li>
                )}
            </ul>
        </nav>
    );
};

export default NavBar;
