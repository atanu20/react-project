import React, { useState } from 'react';

const Form=()=>{
    const [formval,setFormval]=useState({
        fname:"",
        email:"",
      });
    
      const inputHandel=(event)=>{
        const {name,value}=event.target;
        setFormval((preval)=>{
          return {
            ...preval,
          [name]:value,
          }
    
        })
      }
      
    const submitForm=(e)=>{
    e.preventDefault();
    alert("name is" +formval.fname +" and email is " +formval.email);
    }
    
    return (<>
    
    <br /><br />
    <div className="container">
    <form onSubmit={submitForm}>
     <input type="text" name="fname" value={formval.fname} onChange={inputHandel} required /> <br /><br />
     <input type="email" name="email" value={formval.email} onChange={inputHandel}  required/> <br /><br />
<input type="submit" value="submit" className="btn btn-primary" />


   </form>
    </div>
   

  <br /><br /><br />
    </>)
}
export default Form;