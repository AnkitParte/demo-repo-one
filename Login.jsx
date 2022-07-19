import { useContext } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "./AppContext";

export default function Login(){
    const [state,setState] = useState({email:"",password:""})
    const {authority,dispatch,fetchUser} = useContext(AppContext);
    const nav = useNavigate();

    const handleSubmit = (e)=>{
        e.preventDefault();
        fetchUser(dispatch,state)
        if(authority.isAuth){
            //console.log("navigate")
            nav("/dashboard");
        }
        

    }
    const handleChange = (e)=>{
        let {name,value} = e.target;
        setState({...state,[name]:value})
        //console.log(state);
    }
    const sty = {padding:"5px",margin:"2px auto"}
    return (
        <div>
            <h2>Login page</h2>
            <div>
                <form onSubmit={handleSubmit}>
                    <div><input style={sty} type="text" name="email" placeholder="enter email" onChange={handleChange}/></div>
                    <div><input style={sty} type="text" name="password" placeholder="enter password" onChange={handleChange}/></div>
                    <div><input style={sty} type="submit"/></div>
                </form>
            </div>
            <br />
            <br />
            <br />
            <br />
        </div>
    )
}
