import React from "react";
import ContactCard from "./ContactCard";

const Contactlist=(props)=>{
   // console.log(props)

const renderContactlist = props.contacts.map((contact)=>{
    return <ContactCard contact ={contact}></ContactCard>
})    
return(
    <div>
        {renderContactlist}
    </div>
)
}
export default Contactlist;