import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem("user")) || null
  );

  const login = () => {
    //TO DO
    setCurrentUser({
      id: 1,
      name: "Anushka",
      profilePic: "https://media.licdn.com/dms/image/D5603AQF8tZgOdwOqLQ/profile-displayphoto-shrink_400_400/0/1695380331797?e=1700697600&v=beta&t=O9dWhWI8YneBb1-Nlah6ggMkBnlED-Kayfv8Ubx-MR8",
    });
  };

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(currentUser));
  }, [currentUser]);

  return (
    <AuthContext.Provider value={{ currentUser, login }}>
      {children}
    </AuthContext.Provider>
  );
};