import { useEffect, useState } from 'react';
import React from "react";
import { HashRouter, Link, Route, Routes } from 'react-router-dom';
import Member from './Components/021/Member';
import Login from './Components/021/Login';
import Protected from './Components/021/Protected';
import axios from 'axios';
import Alabama from './Components/021/Alabama';
import './App1.css';



function App() {

    const [member, setMember] = useState(null);
      const [memberSur, setMemberSur] = useState(null);
        const [age, setAge] = useState(null);
        const [picture, setpicture] = useState(null);
      
        const [pass, setPass]=useState('')
         const [isLoggedIn, setisLoggedIn] = useState(null);


        
        const logIn = () => {
           
         
        if(pass != '')
           setisLoggedIn(true)
        
           
            };

        const logOut = () => {

            setisLoggedIn(false);
            setPass('')
        };



    const getMember = () => {
        axios.get('https://randomuser.me/api/')
            .then(res => {
                console.log(res)
            setMember(res.data.results[0].name.first);
            setMemberSur(res.data.results[0].name.last);
            setpicture(res.data.results[0].picture.medium);
            setAge(res.data.results[0].dob.age)
             console.log(pass)
    }) .catch(err => {
        console.log(err)
    })

    


}
    return (
    
      
       
     <div className='container'>



      <HashRouter>
     


  
           
            <Routes>
          


                    {           
              pass === 'labas' & isLoggedIn ? 
                
                  <Route path="/" element={<Member picture={picture} age={age} memberSur={memberSur} member={member} getMember={getMember}/>}></Route>
        
                :<Route path="/" element={<Login setPass={setPass}></Login>}></Route>
          
                    }

            </Routes>
                   {(isLoggedIn) ? (
 <button className='button' onClick={logOut}>Logout</button>
 ) : (
 <button className='button' onClick={logIn}>Login</button>
 )}
           </HashRouter>
             
              </div>
    );

}

export default App;