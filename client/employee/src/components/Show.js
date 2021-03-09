import React,{ useEffect,useState } from 'react';
import Axios from 'axios';
import './Show.css'
import { useHistory } from 'react-router-dom';

const Show=()=>{
    let history = useHistory();
    const[emplist,setEmplist] = useState([]);
    useEffect(()=>{
        Axios.get("http://localhost:8000/read").then((response)=>{
            setEmplist(response.data);
        })
    },[]);

    const updhandler = (id)=>{
        const newName = prompt("Enter new name : ");
        const newAddress = prompt("Enter new address : ");
        const newPhone =prompt("Enter new phone : ");
        const newSalary = prompt("Enter new salary : ");
        console.log(newName);
        
        Axios.put("http://localhost:8000/update",{
            id:id,
            newName:newName,
            newAddress:newAddress,
            newPhone:newPhone,
            newSalary:newSalary,
        }).then(
            alert("Updated Successfully"),
            history.push('/')
        )
    }

    const delhandler =(id) =>{
        Axios.delete(`http://localhost:8000/delete/${id}`).then(
            alert("Successfully deleted"),
            history.push("/")
        )
    }

    return(
        <div class="container">
            <h2>Display Records</h2>
            <table className="table">
                <thead>
                    <tr>
                        <th>Phone</th>
                        <th>Address</th>
                        <th>Phone</th>
                        <th>Salary</th>
                        <th>Delete</th>
                        <th>Edit</th>
                    </tr>
                </thead>
                <tbody>
                    {emplist.map((val,key)=>{
                        return(
                            <tr key={key}>
                                <td>{val.Name}</td> 
                                <td>{val.Address}</td> 
                                <td>{val.Phone}</td> 
                                <td>{val.Salary}</td>
                                <td><button type="button" className="btn btn-danger" onClick={()=>{delhandler(val._id)}}>Delete</button></td>
                                <td><button type="button" class="btn btn-warning" onClick={()=>{updhandler(val._id)}}>Update</button></td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )

}

export default Show;