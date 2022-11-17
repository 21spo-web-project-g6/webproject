import { Link } from 'react-router-dom'
import LoginCSS from '../Styles/Login.module.css'

export default function Login() {
  return (
    <div className={LoginCSS.container}>
        <form className={LoginCSS.form}>
            <div className={LoginCSS.content}>
                <h1 className={LoginCSS.title}>Welcome Back</h1>
                <h3 className={LoginCSS.subtitle}>Not a member? Register <Link to='/register'>here.</Link></h3>
                <div className={LoginCSS.group}>
                    <input type="email" 
                    className={LoginCSS.email}
                    placeholder="Email address"
                    />  
                    <input type="password" 
                    className={LoginCSS.pw}
                    placeholder="Password"
                    />                  
                </div>
                <div className={LoginCSS.submit}>
                    <button type="submit">LOG IN</button>
                </div>
            </div>
        </form>
    </div>
  )
}
