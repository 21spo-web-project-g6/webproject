import LoginCSS from '../Styles/Login.module.css'

export default function Login() {
  return (
    <div className={LoginCSS.container}>
        <form className={LoginCSS.form}>
            <div className={LoginCSS.content}>
                <h1 className={LoginCSS.title}>Log in</h1>
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
                    <button type="submit" style={{verticalAlign: "middle"}}>
                        <span>Log in</span>
                    </button>
                </div>
            </div>
        </form>
    </div>
  )
}
