import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router';

const Add =()=>{
    const [details ,setDetails]=useState({
        name:'',
        email:'',
        number:'',
    });
    const his=useHistory();
    const inputChange=(e)=>{
        const {name,value}=e.target;
        setDetails((prevvalue)=>{
            return {
                ...prevvalue,
                [name]:value,
            }
        })
    }
    const formSubmit=async (e)=>{
        e.preventDefault();
        console.log(details);
         await axios.post("http://localhost/myapi/api_insert.php",details);
        his.push("/");
    }
    return(
        <>
       <section id="hom">
       <br /><br /><br /><br /><br /><br />
        <div className="container">
            <div className="row">
        <div className="col-6 mx-auto">
  <form onSubmit={formSubmit}>
  <div class="form-group">
    <label for="">Enter Name:</label>
    <input type="text" class="form-control" placeholder="Enter Name" name="name" value={details.name} onChange={inputChange} required />
  </div>
  <div class="form-group">
    <label for="">Enter Email:</label>
    <input type="email" class="form-control" placeholder="Enter Email" name="email" value={details.email} onChange={inputChange}  required />
  </div>
  <div class="form-group">
    <label for="">Enter number:</label>
    <input type="tel" class="form-control" placeholder="Enter Number" name="number" value={details.number} onChange={inputChange}  required />
  </div>
  
  <button type="submit" class="btn btn-warning">Submit</button>
</form>
                </div>
            </div>
        </div>
       </section>
      
        </>
    );
}
export default Add;