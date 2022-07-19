import { useContext } from "react";
import { NavLink } from "react-router-dom";
import {ThemeContext} from "./Theme";

let Links = [   {to:"/",title:"Home"},
                {to:"/login",title:"Login"},
                {to:"/dashboard",title:"Dashboard"},
                {to:"/contact",title:"Contacts"},]

const curr = {color:"#f71735",textDecoration:"none",fontSize:"18px"}
const prev = {color:"#8d99ae",textDecoration:"none"}

export default function Navbar(){
    const {changeTheme} = useContext(ThemeContext);
    //console.log(theme);
    return(
        <div
        style={{display:"flex",justifyContent:"space-evenly",padding:"1rem",border:"2px solid black"}}
        >
            {Links.map((item)=>{
                return <NavLink style={({isActive})=>(isActive) ? curr : prev } to={item.to}>{item.title}</NavLink>
            })}
            <div><button onClick={()=>changeTheme()}>Theme</button></div>
        </div>
    )
}