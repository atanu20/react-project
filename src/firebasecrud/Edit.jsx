import React , { useEffect, useState } from 'react';
import {db} from './Firebase';
import firebase from 'firebase';
import { useHistory, useParams } from 'react-router';


const Edit = () => {
    const [details,setDetails]=useState({
        name:"",
        email:"",
      })
      const his=useHistory();
      const {id}=useParams();

useEffect(()=>{
getData();
},[]);

const getData=()=>{
    db.collection('users').doc(id).get()
        .then(snapshot => setDetails(snapshot.data()))
}

      const InputHandel=(event)=>{
        const {name,value}=event.target;
        setDetails((prevvalue)=>{
          return {
              ...prevvalue,
              [name]:value,
          }
      })
      }
      const Fromsubmit=(e)=>
      {
        e.preventDefault();
        db.collection("users").doc(id).update({
         
          
          datee :firebase.firestore.FieldValue.serverTimestamp(),
          email : details.email,
          name: details.name,
        })
         his.push("/done");
        // setDetails("");
      }
        return (
            <>
            <section id="hom">
           <br /><br /><br /><br /><br /><br />
            <div className="container">
                <div className="row">
            <div className="col-6 mx-auto">
      <form onSubmit={Fromsubmit}>
      <div class="form-group">
        <label for="">Enter Name:</label>
        <input type="text" class="form-control" placeholder="Enter Name" name="name" value={details.name} onChange={InputHandel} required />
      </div>
      <div class="form-group">
        <label for="">Enter Email:</label>
        <input type="email" class="form-control" placeholder="Enter Email" name="email" value={details.email} onChange={InputHandel}  required />
      </div>
      
      <button type="submit" class="btn btn-warning">Submit</button>
    </form>
                    </div>
                </div>
            </div>
           </section>
                
            </>
        )
}

export default Edit
