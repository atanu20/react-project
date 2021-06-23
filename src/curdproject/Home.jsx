import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {NavLink, Link} from 'react-router-dom';
import { useHistory } from 'react-router';

const Home =()=>{
    const [users,setusers]=useState([]);
     useEffect(()=>{
        loadData();

    },[])
    const his=useHistory();
    const deleteUser=async (id)=>{
        await axios.delete(`http://localhost:3002/users/${id}`);
        loadData();
    
    }
    
const loadData= async ()=>{

const res= await axios.get("http://localhost:3002/users");
console.log(res.data);
setusers(res.data);

}

    return(
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
        <th>Operation</th>
      </tr>
    </thead>
    <tbody>
        
            
          {
            users.map((user,ind)=>{
                return (<>
                
                <tr key={ind}>
                <td>{ind+1}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>
                    {/* <NavLink class="btn btn-danger" to={`/delete/${user.id}`}>Delete</NavLink> &nbsp; */}
                    <NavLink className="btn btn-danger" to={`/edit/${user.id}`}>Edit</NavLink>
                    &nbsp;
                    <Link className="btn btn-danger mx-2" onClick={()=>deleteUser(user.id)} >Delete</Link>
         

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
    );
}
export default Home;