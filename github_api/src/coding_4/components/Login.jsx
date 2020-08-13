import React from 'react'
import styles from './HomePage.module.css'
import axios from 'axios'
import Dashboard from './Dashboard'
import List from './List'


class Login extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            desc : "",
            loc : "",
            data : [],
            token : 0
        }
    }

    takeinp = (e) => {
            this.setState({
                [e.target.name] : e.target.value
            })
    }
    
    handleLogin = async (e) => {
        e.preventDefault()
        var desc = this.state.desc
        var loc = this.state.loc
        var res = await axios.get('https://jobs.github.com/positions.json?', {
            params : {
                "description": desc,
                "location": loc
            }
          })
          .then((response) => {
                console.log(response.data[0].company);
            this.setState({
                data : response.data,
                // token : response.data.token
            })
          })
          .catch(function (error) {
            console.log(error);
          });
    }

    componentDidMount(){
        this.setState({
            desc : "",
            loc : ""
        })
    }

    render(){
        const {data} = this.state
        return(
            <div className = {styles.body}>
                {
                    <form className = {styles.myForm}>
                            <label>JOB DESCRIPTION : </label>
                            <input name="desc" type="text"></input>
                            <label>LOCATION: </label>
                            <input name="loc" type="text" onChange = {this.takeinp}></input>
                            {/* <select name="loc" onChange = {this.takeinp}>
                                {
                                    data.map(item => {
                                        return <option value={item.location}>{item.location}</option> 
                                    })
                                }
                            </select> */}
                            <button onClick = {this.handleLogin}>SEARCH</button>
                    </form>
                }
                {/* {
                    restatus === 200?<Dashboard token = {token} email = {email}/>:<h1></h1>
                } */}
                {
                    data.map(item =>{
                        return <List key = {item.id} data = {item}/>
                    })
                }
            </div>
        )
    }
}

export default Login