import { Link } from 'react-router-dom'
import LoginCSS from './Login.module.css'

export default function Login() {

    const handleLoginSubmit = (e) => {
        
    }


  return (
    <div className={LoginCSS.container}>
        <form className={LoginCSS.form} onSubmit={ handleLoginSubmit }>
            <div className={LoginCSS.content}>
                <h1 className={LoginCSS.title}>Welcome back</h1>
                <h3 className={LoginCSS.subtitle}>Not a member? Register <Link to='/register'>HERE</Link></h3>
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
                    <button type="submit">LOGIN</button>
                </div>
            </div>
        </form>
    </div>
  )
}
