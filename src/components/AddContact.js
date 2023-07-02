
import React from "react";

class AddContact extends React.Component{
    render(){
        return(
          <div>
            <h2>AddContact</h2>
            <form>
                <label>Name</label>
                <input type ="text" name="name" placeholder="Name"/><br/>
                <label>Email</label>
                <input type ="text" name="email" placeholder="Email"/><br/>
                <button>Add</button>
            </form>
          </div>
        )
    }
}
export default AddContact;