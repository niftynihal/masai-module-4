import React, { Fragment } from "react";
import styles from "./UserDetails.module.css";
import Image from "./Image"

class List extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      showDescription : false
    }
  }

  // componentDidMount(){
  //   alert("Mounted")
  // }

  toggleDescription = () =>{
    this.setState({
      showDescription : !this.state.showDescription
    })
  }

  render() {
    const show = this.state.showDescription    
    var data = this.props.data
    const {company, location,title,company_logo,description,company_url} = data
    var htmlObject = document.createElement("div")
    htmlObject.innerHTML = description;
    console.log(company_url)
    return (
      <div className = {styles.beforeCont}>
      <div className={styles.cont}>
        <div>
          <Image
            className={styles.img}
            src = {company_logo}
            alt= {`${company} logo`}
            url = {company_url}
          />
        </div>
        <div>
            <div>{title}</div>
            <div>Role</div>
        </div>
        <div>
            <div>{company}</div>
            <div>Name</div>
        </div>
        <div>
            <div>{location}</div>
            <div>Location</div>
        </div>
        <button className = {styles.readBtn}onClick = {this.toggleDescription}>
          Details
        </button>
        {/* <div>
            <div>{followers}</div>
            <div>Followers</div>
        </div>
        <div>
            <div>{posts}</div>
            <div>Posts</div>
        </div>
        <div>
            <button className = {styles.button}>{is_following?"Unfollow":"Follow"}</button>
        </div> */}
      </div>
      {
        show
        ? <div dangerouslySetInnerHTML={{ __html: description }} /> 
        :<h1></h1>
      }
      </div>
    );
  }
}

export default List;
