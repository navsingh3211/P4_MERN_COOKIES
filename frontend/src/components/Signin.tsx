import { useState } from "react"
import { BACKEND_URL } from "../config"
import axios from "axios"

export const Signin = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    return <div>
        <h1>Signin</h1>
        <input onChange={(e) => {
            setEmail(e.target.value);
        }} type="text" placeholder="email" />
        <input onChange={(e) => {
            setPassword(e.target.value);
        }} type="password" placeholder="password" />
        <button onClick={async () => {
            await axios.post(`${BACKEND_URL}/signin`, {
                email,
                password
            }, {
                withCredentials: true,
            });
            alert("you are logged in")
        }}>Submit</button>
    </div>
}