import './App.css';
import React from 'react';
import Header from "./components/Header";
import Contactlist from "./components/Contactlist";
import AddContact from './components/AddContact';


function App() {

  const contacts =[
    {
     id:"1",
     name:"dipesh",
     email:"dipesh@gmail.com",
    },
    {
     id:"2",
     name:"ramu",
     email:"ramu@gmail.com",
    }
  
]
  return (
    <div>
      <Header/>
      <AddContact/>
      <Contactlist contacts={contacts}/>
    </div>
  );
}

export default App;
