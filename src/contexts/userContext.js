import { createContext, useState, useContext, useEffect } from "react";

//context shuu gej uusgej baina
export const UserContext = createContext({});

//custom hook buyu gar hiitsiin hook (like useState)
export function useUser() {
  return useContext(UserContext);
}

//contextiin provider aa export hiij baina Index.js d ashigalna
export const UserProvider = (props) => {
  const [user, setUser] = useState();


  useEffect(() => {
    if (localStorage.getItem("user")) {
      
      let data = JSON.parse(localStorage.getItem("user"))
      setUser({name: data.name, email: data.mail})
    }
  }, []);

  return (
    //value dotor yamar medeelel busadttai share hiimeer baigaagaa oruulj ogno
    <UserContext.Provider value={[user, setUser]}>
      {props.children}
    </UserContext.Provider>
  );
};
