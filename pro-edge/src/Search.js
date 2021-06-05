// import { response } from "express";
import { useState } from "react";
// import {useEffect} from "react";
// const axios = require('axios');


const Search = () => {
  const [rollno, setrollno] = useState('');
  let roll;

  const handleSubmit = (e) => {
    e.preventDefault();
    roll = rollno.split(',');
    console.log(roll);
  }

  // useEffect = (() => {
  //   const something = async () => {
  //     const api_url = `http://localhost:3001/result`;
  //     response = await axios.post(api_url,{roll});
  //     const rolls = response.data;
  //     // const fetch_response = await fetch(api_url);
  //     // const json = await fetch_response.json();
  //     // response.json(json);
  //   };
  //   something();
  // },[roll]);
  

  
 

    return ( 
      <div className="create">
      <form onSubmit={handleSubmit}>
            <h1>Result</h1>
            <label>Enter roll numbers (Seperated by commas):</label>
            <input type="text"
            required 
            value={rollno}
            onChange={(e) => setrollno(e.target.value)}
            ></input>
            <button>Check Result</button>
            </form>
        </div>
     );
}
 
export default Search;