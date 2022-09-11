import { useState } from 'react';
function MyForm() {
  
    const [name, setName] = useState("");
    const CurrentDate= new Date();
  const handleSubmit = (event) => {
    event.preventDefault();

     console.log(CurrentDate.getMonth());
    alert(`The name you entered was: ${name}`)

}
  
let newDate=CurrentDate.toDateString();
let currentMonth= CurrentDate.getMonth();
January February March 
    return (
 
      <form  onSubmit={handleSubmit}>
          {newDate}
          {currentMonth}
        <label>Enter your name:       </label>
 <input type="text"   value={name}
          onChange={(e) => setName(e.target.value)}/>
    <label>Enter Your Email Address</label>      
    <input  type="text" />
   <label>Enter Your Mobild Number</label>        
    <input type="text" />
    <input type ="submit" value="Register"/>
      </form>
 
    )
  }
  export default MyForm;