

export const login = {type:"LOGIN_SUCCESS"}
export const logout = {type:"LOGOUT_SUCCESS"}

export function Reducer(state,action){
    switch(action.type){
        case "LOGIN_SUCCESS" : return({...state,isAuth:true,token:action.payload})
        case "LOGOUT_SUCCESS" : return({...state,isAuth:false,token:null})
        default : return state 
    }
}

export function fetchUser(dispatch,state){
    //dispatch(logout)
    
    fetch("https://reqres.in/api/login",{
            method:"POST",
            headers:{
                "Content-type":"application/json"
            },
            body: JSON.stringify(state)
        })
        .then((res) => res.json())
        .then((res) => {
            //console.log(res);
            dispatch({...login,payload:res.token})
        })
        .catch((err)=>{alert("error",err)})
}