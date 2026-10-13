import '../styles/Register.css';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import axios from 'axios';


const Register = () => {
      const [username, setUserName] =useState("");
      const [email, setEmail] =useState("");
      const [password, setPassword] =useState("");
      const [errors, setErrors] = useState({});
      const [success, setSuccess] =useState(false);
      const [loading, setLoading] = useState(false);



      const handleSubmit = async (e) =>{
        e.preventDefault();
        setLoading(true);

        const userData = {
          username, email ,password
        }
        try{
          const response = await axios.post('http://127.0.0.1:8000/api/accounts/register/', userData); 
          console.log('userData==>', response.data)
           setErrors({})
           setSuccess(true)
        }
     catch (error) {
    if (error.response) {
        console.log(error.response.data);
    } else if (error.request) {
        console.log("No response received from the server.");
    } else {
        console.log(error.message);
    }
}finally{
          setLoading(false)
        }
     
      clearForm()
      }
      const clearForm = () => {
        setEmail(""),
        setUserName(""),
        setPassword("")
     }
    
  return (
    <div className="shot">
      <h3 className='tit'>Join the Market</h3>
    <form className='fo' onSubmit={handleSubmit}>
      <label className='lab'>User Name  </label> 
      <input type='text' placeholder='username'
       className='pt' value={username} 
       onChange={(e) =>setUserName(e.target.value)} required/>
       <small>{errors.username}</small>
   
    <label className='lab'>Email </label>
      <input type='email' placeholder='email@gmail.com'className='pt'
      value={email}
     onChange={(e) =>setEmail(e.target.value)} required/>
    <small>{errors.email}</small>
    
    <label className = 'lab'>Set Password </label>
      <input type='password' placeholder='**********' className ='pt' value={password}
      onChange={(e) =>setPassword(e.target.value)} required/>
      <small>{errors.password}</small>

      {success && <div>Registration Successful</div>}   
     <Button type="submit" className="Regi" disabled={loading}>
  {loading ? "Please wait..." : "Register"}
</Button>
     
    </form>
  
    </div>
  )
}

export default Register