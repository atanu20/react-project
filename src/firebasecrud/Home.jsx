import React, { useEffect, useState } from 'react';
// import firebase from 'firebase';
import {db} from './Firebase';
import { NavLink , Link } from 'react-router-dom';

const Home = () => {
const [details,setDetails]=useState([]);

  useEffect(()=>{
    getdata();
  },[]);

  const getdata=()=>{
    // db.collection("users").onSnapshot((querySnapshot) => {
    //   const tdata=querySnapshot.docs.map((doc)=>({
    //     id:doc.id,
    //     name: doc.data().name,
    //     email : doc.data().email,
    //     datee : doc.data().datee,
    //   }))
    //  setDetails(tdata);

  
     
    //   });

    // var museums = db.collection('users').orderBy('datee');
    // var museums = db.collection('users').where('name','==','somu');
    // var museums = db.collection('users').orderBy('datee','desc').limit(2);
    var museums = db.collection('users');
    museums.get().then((querySnapshot) => {
       
        const tdata=querySnapshot.docs.map((doc)=>({
              id:doc.id,
              name: doc.data().name,
              email : doc.data().email,
              datee : doc.data().datee,
            }))
           setDetails(tdata);

    });
    

  }

  const deleteUser=(idd)=>{
    db.collection("users").doc(idd).delete();
  }


    return (
        <>
            <br /><br /><br />
       <div className="container show ">
       <div className="row">
           <div className="col-8 mx-auto ">
           <table className="table table-bordered table-sm">
    <thead>
      <tr>
        <th>Id</th>
        <th>Name</th>
        <th>Email</th>
        <th>Date</th>
        <th>Operation</th>
      </tr>
    </thead>
    <tbody>
        
            {
              details.map((val,ind)=>{
                return (<>
                <tr key={ind}>
                  <td>{ind+1}</td>
                <td>{val.name}</td>
                <td>{val.email}</td>
                {/* <td>{val.datee.toDate().toISOString()}</td> */}
                <td>{new Date(val.datee.seconds * 1000).toLocaleDateString("en-US")}</td>
                  
                  <td>
                    <NavLink to={`/edit/${val.id}`} className="btn btn-primary">Edit</NavLink >
                   &nbsp;
                   <Link className="btn btn-danger mx-2" onClick={()=>{ if (window.confirm('Are you sure you want to delete this item?')) deleteUser(val.id) }} >Delete</Link>

                  </td>
                </tr>
                
                </>)
              })
            }
              
             
            
       
    
    </tbody>
  </table>
           </div>
       </div>
       </div>
        </>
    )
}

export default Home;



