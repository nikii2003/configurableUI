import React from "react";
import "./Home.css"
import  Config  from "./../../util/Config.json"

function Home (){
    return(
       <div className="container">
       <h1>{Config.title}</h1>
       <p>{Config.description}</p>

       <h2>services</h2>
       {
        Config.services.map((servicedetail,index)=>{
        const {title, description, price} = servicedetail
            return(
        <div className="card" key={index}>
            <h1>{title}</h1>
            <p>{description}</p>
             <p>{price}</p>
        </div>
       )
        })
       }
       </div>

    )
}
export default Home