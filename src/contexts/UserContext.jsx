import { createContext } from 'react';

const UserContext = createContext();  // constructor 

function UserProvider({ children }) {
    //the children prop represents each component we provide context to 

    // Create state just like you normally would in any other component
    const [user, setUser] = useState(null);
    // This is the user state and the setUser function that will update it!
    // This variable name isn't special; it's just convention to use `value`.
    const value = { user, setUser };

    return (
        <UserContext.Provider value={value}>
            {/* The data we pass to the value prop above is now available to */}
            {/* all the children of the UserProvider component. */}
            {children}
        </UserContext.Provider>
    );
};

export { UserProvider, UserContext };