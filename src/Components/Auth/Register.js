import axios from 'axios'
import Constants from '../../Constants.json';
import { useState } from 'react';
import { Link, useNavigate} from 'react-router-dom'
import RegCSS from './Reg.module.css'


export default function Register() {

    const [ registerState, setRegisterState ] = useState("idle")
    const navigate = useNavigate()


    const handleRegisterSubmit = async (e) =>{
        e.preventDefault()
        setRegisterState("processing")

        try {
            const result = await axios.post(Constants.API_ADDRESS + '/registerBasic', {
                mail: e.target.mail.value,
                pw: e.target.pw.value
              })
              console.log(result)
              setRegisterState("regSuc")
              setTimeout(() => {
                navigate('/login', { replace: true })
              }, 1500);
        } catch (error) {
            console.error(error)
            setRegisterState("regErr")
        }
    }


    let registerUIControls = null
    switch (registerState) {
        case "idle":
            registerUIControls = <button type="submit">REGISTER</button>
            break;
        case "processing":
            registerUIControls = <span>Processing...</span>
            break;
        case "regSuc":
            registerUIControls = <span style={{ color: "green" }}>Register succesful</span>
            break;
        case "regErr":
            registerUIControls = <span style={{ color: "red" }}>Error</span>
    }


  return (
    <div className={RegCSS.container}>
        <form className={RegCSS.form} onSubmit={ handleRegisterSubmit }>
            <div className={RegCSS.content}>
                <h1 className={RegCSS.title}>Register to the Application</h1>
                <h3 className={RegCSS.subtitle}>Already a member? Login <Link to='/login'>HERE</Link></h3>
                <div className={RegCSS.group}>
                    <input type="mail" 
                    name="email"
                    className={RegCSS.email}
                    placeholder="Email address"
                    />  
                    <input type="password" 
                    name="pw"
                    className={RegCSS.pw}
                    placeholder="Password"
                    />                  
                </div>
                <div className={RegCSS.submit}>
                    { registerUIControls }
                </div>
            </div>
        </form>
    </div>
  )
}
