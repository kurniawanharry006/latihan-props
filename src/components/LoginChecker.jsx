import React from 'react'

const LoginChecker = (props)=>{
const {username,login} = props

    if(login){
        return(
            <div>
                <h1>Hello, {username}</h1>
            </div>
        )
    } else {
        return(
            <div>
                <h1>You are not Logged in</h1>
            </div>
        )
    }
}


export default LoginChecker