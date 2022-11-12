import LoginCSS from '../Styles/Login.module.css'

export default function Login() {
  return (
    <div className={LoginCSS.form_container}>
        <form className={LoginCSS.form}>
            <div className={LoginCSS.form_content}>
                <h3 className={LoginCSS.form_title}>Log in</h3>
                <div className={LoginCSS.form_group}>
                    <input type="email" 
                    className={LoginCSS.form_email}
                    placeholder="Email address"
                    />                    
                </div>
                <div className={LoginCSS.form_group}>
                    <input type="password" 
                    className={LoginCSS.form_pw}
                    placeholder="Password"
                    />
                </div>
                <div className={LoginCSS.form_submit}>
                    <button type="submit">
                        <span>Log in</span>
                    </button>
                </div>
            </div>
        </form>
    </div>
  )
}
