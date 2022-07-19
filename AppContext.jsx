import { createContext, useReducer } from "react";
import { Reducer, fetchUser } from "./Reducer";



export const AppContext = createContext();

export function AppContextProvider({children}){

    const [authority,dispatch] = useReducer(Reducer,{isAuth:false,token:""})




    return (
        <AppContext.Provider value={{authority,dispatch,fetchUser}}>
            {children}
        </AppContext.Provider>
    )
}