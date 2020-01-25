import React, { Component } from 'react'
import LoginChecker from './LoginChecker'


export default class Login extends Component {
    state = {
        nama :'',
        isLoggedIn:false
    }

    onChangeHandler=(e)=>{
        this.setState({nama:e.target.value})
    }
    render() {
        return (
            <div className="container">
                <div className="row mt-4">
                    <div className="col-8">
                        <input type="text" className="form-control" placeholder="username" onChange={this.onChangeHandler}/>
                    </div>
                    <div className="col-4">
                        <input type="button" value="Login" className="btn btn-primary btn-block" onClick={()=>{this.setState({isLoggedIn:true})}} />
                    </div>
                </div>
                <div className="row mt-3">
                    <LoginChecker username={this.state.nama} login={this.state.isLoggedIn}/>
                </div>
            </div>
        )
    }
}
