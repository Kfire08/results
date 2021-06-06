import { useState } from "react";
const axios = require('axios');


const Search = () => {
  const [rollno, setrollno] = useState('');
  let [data, updateData] = useState([]);
  let roll=[];
  let temp=[];

  const handleSubmit = (e) => {
    data=[];
    e.preventDefault();
    roll = rollno.split(',');
    axios.post('http://localhost:3001/result', roll)
            .then(res => updateData(res.data))      
            .catch(error => console.log("Error"))
  }
  let final = [];
  let final2 = [];
  temp = rollno.split(',');

  for (let r of temp){
    final.push(<ul keys={r}>{r}</ul>)
  }

  for (let rdata of data){
    final2.push(<ul key={rdata}>{rdata}</ul>)
  }

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
            <label1>Note: Display of results might take time depending upon your internet speed</label1>
            </form>
            <table className = "tab">
                  <thead>
                    <tr>
                      <th>Roll Number</th>
                      <th>Result</th>
                    </tr>
                  </thead>
                  <tbody>
                  <td>{final}</td>
                  <td>{final2}</td>
                  </tbody>
            </table>
        </div>
     );
}
 
export default Search;