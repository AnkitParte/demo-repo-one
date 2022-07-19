import { useState } from "react";
import { createContext } from "react";

export const dark = {color:"white",background:"black"};
export const light = {color:"black",background:"white"};

export const ThemeContext = createContext();

export default function ThemeProvider({children}){
    const [theme,setTheme] = useState(light);
    const changeTheme = ()=>{
        (theme===dark) ? setTheme(light) : setTheme(dark);
        //console.log(theme);
    }
    return(
        <>
            <ThemeContext.Provider value={{theme,changeTheme}}>
                {children}
            </ThemeContext.Provider>
        </>
    )
}