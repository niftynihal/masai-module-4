import React from 'react'
import styles from './HomePage.module.css'


class Dashboard extends React.Component{
    constructor(props){
        super(props)
    }
    
    render(){
        const {email,token} = this.props
        return(
           <div className = {styles.Dashboard}>
              <div> {email} : {token}</div>
           </div>
        )
    }
}

export default Dashboard