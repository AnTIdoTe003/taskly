/* eslint-disable react/prop-types */
import {createContext, useEffect, useState} from "react";

export const UserInterface = createContext(null);

export const UserInterfaceProvider = ({children})=>{
    const [isUser, setIsUser] = useState(false)
    const [userDetails, setUserDetails] = useState({})
    const [ token, setToken] = useState("")
    useEffect(()=>{
        if(localStorage?.getItem("user") && localStorage?.getItem("token")){
            setIsUser(true)
            setUserDetails(JSON.parse(localStorage?.getItem("user")))
            setToken(localStorage.getItem("token"))
        }
    },[])

    const value = {
        isUser,userDetails,token
    }
    return(
        <UserInterface.Provider value={value}>
            {children}
        </UserInterface.Provider>
    )
}
