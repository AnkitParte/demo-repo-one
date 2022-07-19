import { useContext } from "react";
import { useEffect } from "react";
import { useState } from "react"
import { AppContext } from "../AppContext";
import { logout } from "../Reducer";

export default function Dashboard(){

    const [data,setData] = useState([]);
    const [page,setPage] = useState(1);
    const arr = [1,2,3,4,5]
    const {authority,dispatch} = useContext(AppContext);

    const handleLogout = ()=>{
        dispatch(logout)
    }



    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/photos?_page=${page}&_limit=10`)
        .then(res => res.json())
        .then(res => {
            //console.log(res);
            setData(res);
        })
    },[page])
    return (
        <div>
            <h2>Dashboard</h2>
            <br />
            <div><button onClick={handleLogout}>LOGOUT</button></div>
            <br />
            <div><h5>Token : {authority.token}</h5></div>
            <br />
            {arr.map((el)=>{return <button disabled={page===el} onClick={()=>setPage(el)}>{el}</button>})}
            <br />
            <ul>
            {data.map((item)=>{
                return <li>{item.title}</li>
            })}
            </ul>
            <br />
            <br />
            <br />
            <br />
        </div>
    )
}