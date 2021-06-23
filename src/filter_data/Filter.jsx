import React, { useEffect, useState } from 'react';
import firebase from 'firebase';
import {db } from './Firebase';
import './Filter.css';
import { Link, NavLink } from 'react-router-dom';

const Filter = () => {
    const [dataa,setData]=useState();

    const InputHandel=(cat)=>{
        var val=db.collection('filter').where('category','==',cat);
        val.get().then((querySnapshot)=>{
            const tdata=querySnapshot.docs.map((doc)=>({
                id:doc.id,
                name: doc.data().name,
                image : doc.data().image,
                category : doc.data().category,
              }))
             setData(tdata);
            
        });
    }
useEffect(()=>{
    getdata();

},[]);
const getdata=()=>{
    var val=db.collection('filter');
    val.get().then((querySnapshot)=>{
        const tdata=querySnapshot.docs.map((doc)=>({
            id:doc.id,
            name: doc.data().name,
            image : doc.data().image,
            category : doc.data().category,
          }))
         setData(tdata);
        
    });
}
    return (
        <>
        <div className="container">
            <div className="row d-flex justify-content-around">
                <button class="btn btn-primary" onClick={()=>InputHandel("p1")}>p1</button>
                <button class="btn btn-primary" onClick={()=>InputHandel("p2")}>p2</button>
                <button class="btn btn-primary" onClick={()=>InputHandel("p3")}>p3</button>
                <button class="btn btn-primary" onClick={()=>getdata()}>ALL</button>
                {/* <NavLink class="btn btn-primary" to="/" >All</NavLink> */}
            </div>
            <hr />
            <br /><br />
            <div className="row ">
                {
                    dataa.map((val,ind)=>{
                        return (<>
                         <div className="col-lg-4 mb-4" key={ind}>
                    <div className="card">
                        <img src={`filter_img/${val.image}`} alt="atanu jana" className="img-fluid " />
                        <div className="p-2">
                            <h2>{val.category}</h2>
                            <h4>{val.name}</h4>
                        </div>
                    </div>
                </div>
                        </>)
                    })
                    
                }
               
                
                
            </div>

        </div>

            
        </>
    )
}

export default Filter;
