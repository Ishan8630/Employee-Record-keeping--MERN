import React,{ useState } from 'react';
import './Add.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Axios from 'axios';
import { useHistory } from 'react-router-dom';

const Add=()=>{
    let history = useHistory();
    const[name,setName]=useState();
    const[phone,setPhone]=useState(0);
    const[address,setAddress]=useState(1);
    const[salary,setSalary]=useState(2);
    const add =()=>{
        Axios.post("http://localhost:8000/insert",{
            name :name,
            phone : phone,
            address : address,
            salary : salary,
        })
        history.push('/display')
    }
    return(
        <div className="container">
            <div className="Add">
                <h2>Add Data</h2>
                <label htmlFor="name">Name  </label>
                <input type="text" name="name" onChange={(e)=>{setName(e.target.value)}}/>
                <br/>
                <label htmlFor="phn">Phone : </label>
                <input type="tel" name="phn" onChange={(e)=>{setPhone(e.target.value)}}/>
                <br/>
                <label htmlFor="address">Address : </label>
                <input type="text" name="address" onChange={(e)=>{setAddress(e.target.value)}}/>
                <br/>
                <label htmlFor="sal">Salary : </label>
                <input type="number" name="sal" onChange={(e)=>{setSalary(e.target.value)}}/>
                <br/>
                <br/>
                <button type="button" className="btn btn-outline-primary btn-lg" onClick={add} >Add</button>
            </div>
        </div>
    )
};

export default Add;