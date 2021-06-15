import React,{useEffect,useContext} from 'react'
import {Redirect} from 'react-router-dom'
import {UserContext} from '../Context'

export default function Logout() {
    const {logindata}=useContext(UserContext)
    //eslint-disable-next-line
    const [login,setLogin]=logindata
    useEffect(()=>{
        let login = { user: "varshaa", pass: "varsgrootan", access: false }
        localStorage.setItem("key", JSON.stringify(login))
        setLogin(login)
    })
    return (
        <div>
        <Redirect to="/" />            
        </div>
    )
}
