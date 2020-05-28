import React, { useState } from 'react'

import LoginForm from './LoginForm'
import Register from './Register'
import './index.scss'

interface Props {
    loginType: string,

}
const Login: React.FC<Props> = () => {
    const [loginType, setLoginType] = useState<string>('login')

    const switchFrom = (value: string) => {
        setLoginType(value)

    }
    return (
        <div className="login">

            <div className="login-content">
                <div>
                    {
                        loginType === "login" ? <LoginForm switchFrom={switchFrom}></LoginForm> : <Register switchFrom={switchFrom}></Register>
                    }
                </div>
            </div>
        </div >
    )
}


export default Login