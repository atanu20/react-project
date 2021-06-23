import React, { useState } from 'react';
// import {Link} from 'react-router-dom';
import './Slider.css';
import one from './image/one.jpg';
import two from './image/two.jpg';
import three from './image/three.jpg';
import { motion } from "framer-motion";

const Slider = () => {
    const [data,setData]=useState(0);
    const imgd=[one,two,three];
    let len=3;
    
const prevSlide=()=>{
    setData( data ===0 ? len-1:data-1 );
   
}
const nextSlide=()=>{
    setData( data <len-1 ? data+1:0 );
}
// setInterval(() => {
//     nextSlide();
//   }, 2000);
// console.log(data);
    return (
        <>
       
       <section className="slider">
           <button className="btnprev" onClick={prevSlide}> <i className="fa fa-arrow-left" ></i> </button>
           <button className="btnnext" onClick={nextSlide}><i className="fa fa-arrow-right" ></i></button>
       <div className="slider_inner">
            <motion.img   
            initial={{opacity:0.5}}
            animate={{opacity:1}}
            transition={{duration:2, yoyo:Infinity}}
            
            src={imgd[data]} alt={imgd[data]}  />
          
            
            </div>
       </section>
            
        </>
    )
}

export default Slider;
