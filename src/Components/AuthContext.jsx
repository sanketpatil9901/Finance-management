import React, { createContext, useState } from 'react';

const UserDataContext = createContext();

const UserDataProvider = ({ children }) => {
  const [user, setUser] = useState({
    staffname: "",
    staffpassword: ""
  }); 

  const updateUser = (userData) => {
    setUser(userData);
  };

  return (
    <UserDataContext.Provider value={{ user, updateUser }}>
      {children}
    </UserDataContext.Provider>
  );
};

export { UserDataContext, UserDataProvider };
