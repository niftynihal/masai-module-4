import React from 'react'
import styles from './HomePage.module.css'
import axios from 'axios'
import Dashboard from './Dashboard'


class Register extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            email : "",
            password : "",
            restatus : 0,
            token : 0,
            id: 0
        }
    }
    takeinp = (e) => {
            this.setState({
                [e.target.name] : e.target.value
            })
    }
    
    handleLogin = async (e) => {
        e.preventDefault()
        var email = this.state.email
        var pass = this.state.password
        var res = await axios.post('https://reqres.in/api/register', {
            "email": email,
            "password": pass
          })
          .then((response) => {
            console.log(response);
            this.setState({
                restatus : response.status,
                token : response.data.token,
                id : response.data.id
            })
          })
          .catch(function (error) {
            console.log(error);
          });
    }

    render(){
        const {restatus,token,email,id} = this.state
        console.log(restatus)
        return(
            <div>
                {
                    restatus !== 200&&<form className = {styles.myForm}>
                            <label>EMAIL : </label>
                            <input name="email" type="email" onChange = {this.takeinp}></input>
                            <label>PASSWORD: </label>
                            <input name="password" type="password" onChange = {this.takeinp}></input>
                            <button onClick = {this.handleLogin}>REGISTER</button>
                    </form>
                }
                {
                    restatus === 200?<Dashboard key = {id} token = {token} email = {email}/>:<h1></h1>
                }
            </div>
        )
    }
}

export default Register