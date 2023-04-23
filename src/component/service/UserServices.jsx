import { myaxios } from "./Helper";

export const getTest =()=>{
    return myaxios.get("/user/hello");
}
export const registration =(userDto)=>{
    return myaxios.post("user/register",userDto);
}
export const logInUser =(logDto)=>{
    return myaxios.post("user/login",logDto);
}
export const logOutUser =()=>{
     let token =localStorage.getItem("token")
     console.log(token)
    return myaxios.post("user/logout?token="+token);
}
export const getDetailsUser =()=>{
     let token =localStorage.getItem("token")
     console.log(token)
    return myaxios.get("user/details?token="+token);
}
export const imass =(file)=>{
    return myaxios.get("user/upload?file="+file);
}
export const list =()=>{
    let list =[{name:"jitendt",isLogin:true}]
    return list;
}
export const isCheckLogIn =()=>{
    let value =localStorage.getItem("login")
    console.log("service",value)
    if(value){
        return true
    }
    else{
        return false
    }
}