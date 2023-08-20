import { useState } from "react";
import { useNavigate } from 'react-router-dom';
interface LoginProps {
    onLogin: (username: string, password: string) => void;
}

const Login = () => {

    const[username, setUsername] = useState('')
    const[password, setPassword]= useState('')
    const navigate = useNavigate();
    const eventHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();

    }


const handleSubmit = async(e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    try {
        const response = await fetch('http://localhost:9007/user/login', {
           method: 'POST' ,
           headers: {
            'Content-Type': 'application/json'
           },
           body: JSON.stringify({username, password})
        })
        if(response.ok) {
        console.log('login success')
            const data = await response.json();
               localStorage.setItem('accessToken', data.accessToken)
               navigate('/dahsboard')
           //onLogin(username, password);
        }else{
            console.log('Login faild')
        }
    } catch (error) {
        console.log('Login error', error)
        
    }
}
console.log('username', username)
    return(
        <div>
            <br/>
            <form onSubmit={handleSubmit}>
                <label>Username</label>
                <input 
                type="text"
                name="username"
                onChange={(e) => setUsername(e.target.value)}
                />
                <br />
                <br />

                <label>Password</label>
                <input 
                type="text"
                name="password"
                onChange={(e) => setPassword(e.target.value)}
                />
                <br />
                <br />
                <button>Login</button>
            </form>
        </div>
    )
}

export default Login;