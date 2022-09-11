import { useState } from 'react';

function MyForm() {
  
    const [name, setName] = useState("");
    const [Email, setEmail] = useState("");
    const [Mobile,setMobile]=useState('');
    const [errMsg,setMsg]=useState("");
    const CurrentDate= new Date();
  const handleSubmit = (event) => {
    event.preventDefault();
       if(Email==""){
        setMsg("Please Provide Email");
        return false;
       }if(Mobile==""){
        setMsg("Please Provide Mobile Number");
           
        return false;
       }
       if(name==""){
        setMsg("**Please Provide Username");
           return false;
       }
      let  regObject={
            username:name,
            useremail:Email,
            usermobile:Mobile
        
        }
         if(name!="" && Mobile!="" && Email!=""){
            setMsg("");
         }

        fetch("http://localhost/api/user.php",{
            method:"POST",
            body:JSON.stringify(regObject)
        }).then(function(response){
            return response.json();
        }).then(function(result){
          console.log(result);
        });
     console.log(CurrentDate.getMonth());
     

}

  
let newDate=CurrentDate.toDateString();
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
  }
const MonthArray=['January' ,'February' ,'March' ,'April', 'May', 'June', 'July','August' ,'September', 'October', 'November', 'December'];
let currentMonth= CurrentDate.getMonth();
let CurrentDates = CurrentDate.getDate();
let currentYear= CurrentDate.getFullYear();
let RandomNumber=getRndInteger(0,10);
currentMonth=MonthArray[currentMonth];
const myStyle = {
    color: "white",
    margin:"23px",
    backgroundColor: "DodgerBlue",
    padding: "10px",
    fontFamily: "Sans-Serif"
  };
/*
currentMonth=MonthArray[RandomNumber-currentMonth];*/
 const errorStyle={
    color:"red",
    fontSize:"18px"
 };
return (
 
      <form  onSubmit={handleSubmit}>
  <h1 style={myStyle}>Hello {name}</h1>
    <h1 style={errorStyle}>{errMsg}</h1>  
        <label>Enter your name:       </label>
 <input type="text"   value={name}
          onChange={(e) => setName(e.target.value)}/>
    <label>Enter Your Email Address</label>      
    <input  type="text" value={Email} onChange={(e)=>setEmail(e.target.value)} />
   <label>Enter Your Mobild Number</label>        
    <input type="text"  value={Mobile}     onChange={(e) => setMobile(e.target.value)}/>
    <input type ="submit" value="Register"/>
      </form>
 
    )
  }
  export default MyForm;