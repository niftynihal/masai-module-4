import React from 'react'
import styles from './HomePage.module.css'
import Login from './Login'
import Register from './Register'


class HomePage extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            login : false,
            register: false
        }
    }
    
    render(){
        const {login,register} = this.state
        return (
            <div className = {styles.container}>
               <div className = {styles.headDiv}><h1>Github</h1><p>Jobs</p>
                    <div className = {styles.allJobs}><h4>All Jobs</h4></div>
                </div>
                <div className = {styles.loginDiv}><Login/></div>
            </div>
        )
    }

}
export default HomePage