import React, { useState } from 'react';
import Adata from './Adata';

const Accordion = () => {
    const [data,setData] =useState(false);
    const toggle=(index)=>{
        if(data===index)
        {
            return setData(null);
        }
        return setData(index);
    }
    return (
        <>
     
            <div className="container">
            <h1>Accordion</h1>
            <br /><br />
                <div className="row">
                    {
                        Adata.map ((val,ind)=>{
                            return (
                                <>
                                    <div className="card" key={ind}>
                                        <div className="card-header" onClick={()=>toggle(ind)}>
                                            <h2>  {data === ind ? <span> - </span>: <span> +</span> }    {val.question} </h2>
                                        </div>
                                        {
                                            data === ind ? (<>
                                            <div className="card-body">
                                            <h4>{val.answer}</h4>
                                        </div>
                                            </>) : null
                                        }
                                    </div>

                                </>
                            )
                        })
                    }
                    
                </div>
            </div>
        </>
    )
}

export default Accordion;
