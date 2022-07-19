import { useContext } from "react"
import { Navigate } from "react-router-dom";
//import { useNavigate } from "react-router-dom";
import { AppContext } from "./AppContext";


export default function PrivateRoute({children}){
    const {authority} = useContext(AppContext);
    //const nav = useNavigate();
    if(authority.isAuth === false){
        return <Navigate to="/login" />
    }
    return (
        <>
            {children}
        </>
    )
}