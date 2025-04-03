import { createContext } from 'react';

const UserContext = createContext();  // constructor 

function UserProvider({ children }) {
    //the children prop represents each component we provide context to 

  return (
    <UserContext.Provider>
      {children}
    </UserContext.Provider>
  );
};

export { UserProvider };