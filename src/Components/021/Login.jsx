
import { useState } from 'react';




function Login({setPass}) {
    const [text, setText] = useState('')
     const [text1, setText1] = useState('')
        
    const handleText = e => {
        setText(e.target.value)
    }

     const handleText1 = e => {
        setText1(e.target.value)
    }
 
 const submitPress = e => {
        e.preventDefault()

      if(text === 'labas' & text1 ==='123') {

         setPass('labas')
        
       console.log(text)
       console.log(text1)
         setText('')
       
      
              

      }
         else {
             setPass('fuck')
             console.log(text)
           
         }

    

    }
    
    return (
   
        <>
       <input type="text" className='input' onChange={handleText} value={text} placeholder='Login'></input>
       <input type="text" className='input' onChange={handleText1} value={text1} placeholder='Password'></input>
       <button className='button2' type="submit"     onClick={submitPress}>Submit</button>
          </>
      
       
       
        
    )
}

export default Login;