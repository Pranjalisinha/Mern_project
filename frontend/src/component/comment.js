import React from "react";
import {useState, useEffect} from 'react';
import axios from 'axios';

const Comment = () =>{
    const [data, setdata] = useState([]);
    const [user, setUser] = useState([]);
    const [serchdata, setSearchData] = useState("");
    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/posts").then((data)=>{
            setdata(data.data);
            setUser(data.data)
        }).catch((err)=>{
            console.log(err);
        })
    }, [])

    const serchHandle = (e) =>{
        e.preventDefault();
        setSearchData("")
         let value = user.filter((item, i) =>{
            const title = item.title.split(" ");
            console.log(title);
            for(let i=0; i<title.length; i++){
                if(serchdata === title[i]){
                    return item;
                 }
            }
       })
       setdata(value)
    }
    return (
        <>
        <div className="page">
        <input type="text" placeholder="Search" className="search" onChange={(e)=>setSearchData(e.target.value)}/>
        <div className="child">
        <button className="btn" onClick={(e) => serchHandle(e)} >Search</button>
        </div>
        <h1>Frontend</h1>
        {
            data.map((data, i) =>
            <div key={data.id} className="card">
            <h1>{data.title}</h1>
            <h3>{data.body}</h3>
            </div>
            )
        }
        </div>
        </>
    )
}
export default Comment;