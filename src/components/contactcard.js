import React from "react";
import userimg from "../Assests/userimg.png";

const ContactCard=(props)=>{
    const {id,name,email}=props.contact
    return(
        <div>
            <div>
                <img style={{height:"25px",width:"25px"}} src={userimg} alt="UserImage"/>
            </div>
        <div>{name}</div>
        <div>{email}</div>
        <button style={{color:"red",paddingTop:"7px"}}>Delete</button>
        </div>
        )
}
export default ContactCard;