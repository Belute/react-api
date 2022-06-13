import img from './img/user.jpg'


function Member(props) {


 

    
    return (
     
       
       <>
            
            <img className="img" src={props.picture ? props.picture: img} alt="Girl in a jacket" width="100" height="100"></img>
            
            
        
        
            <span className='name'>{props.member ? props.member + " "+ props.memberSur: " "}</span>
      
       
        <div>
             {props.age ? <span> Age: {props.age}    </span>: " "}
     
        <span style={{color: "orange"}}>{props.age ? props.age >= 18 ? "  Adult": "  Not Adult": ""}</span>
            </div>
      
     
         <button className="button1" onClick={props.getMember}>Change Person</button>
        </>
       
    )
}

export default Member;