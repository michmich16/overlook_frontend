import { createContext, useState, useEffect } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [userData, setUserData] = useState();

    //hvis userData's access_token findes så sæt userData i vores session storage
    useEffect(() => {
        if (!userData) {
             //hvis userData findes i session storage så sæt den i local storage
            if (sessionStorage.getItem("userData")) {
                setUserData(JSON.parse(sessionStorage.getItem("userData")));
            }
        }
        //hvis userData findes i local storage så sæt den i session storage
        if (userData?.access_token) {
            sessionStorage.setItem("userData", JSON.stringify(userData));
        }
    }, [userData]);

    return (
        <UserContext.Provider value={{ userData, setUserData }}>
        {children}
      </UserContext.Provider>
    )
}