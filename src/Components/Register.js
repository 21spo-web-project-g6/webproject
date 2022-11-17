import { Link } from 'react-router-dom'
import RegCSS from '../Styles/Reg.module.css'

export default function Register() {
  return (
    <div className={RegCSS.container}>
        <form className={RegCSS.form}>
            <div className={RegCSS.content}>
                <h1 className={RegCSS.title}>Register to Web App</h1>
                <h3 className={RegCSS.subtitle}>Already a member? Please login <Link to='/login'>here.</Link></h3>
                <div className={RegCSS.group}>
                    <input type="email" 
                    className={RegCSS.email}
                    placeholder="Email address"
                    />  
                    <input type="password" 
                    className={RegCSS.pw}
                    placeholder="Password"
                    />                  
                </div>
                <div className={RegCSS.submit}>
                    <button type="submit" style={{verticalAlign: "middle"}}>
                        <span>Log in</span>
                    </button>
                </div>
            </div>
        </form>
    </div>
  )
}
