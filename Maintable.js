import {Modal} from 'react-bootstrap';
import React, { useState } from "react";
import { MDBDataTable } from "mdbreact";
import { useEffect } from "react";
import{FaPencilAlt,FaTrashAlt,} from "react-icons/fa";
import { confirm } from 'react-confirm-box';
import { useNavigate } from 'react-router-dom';
function Maintable() {
    // edit modal
    const [details,setDetails]=useState([]);
    const [Sno ,setSno]=useState("");
    const [Name ,setName]=useState("");
    const [Password ,setPassword]=useState("");
    const [Age ,setAge]=useState("");
    const[Gender,setGender]=useState("");
    const [Place ,setPlace]=useState("");
    const [show,setShow]=useState(false);
    // // add modal
    const [addsno ,setAddSno]=useState("");
    const [addname ,setAddName]=useState("");
    const [addpassword ,setAddpassword]=useState("");
    const [addage ,setAddAge]=useState("");
    const[addgender,setAddGender]=useState("");
    const [addplace ,setAddPlace]=useState("");
    const [addshow,setAddShow]=useState(false);
    const navigator=useNavigate();
    useEffect(()=>{
        const data=JSON.parse(sessionStorage.getItem('details'))||[];
        setDetails(data);},[]);
    const handleEdit =(value)=>{
        setSno(value.Sno);
        setName(value.Name);
        setPassword(value.Password);
        setAge(value.Age);
        setGender(value.Gender);
        setPlace(value.Place);
        setShow(true);
    }
    const handleUpdate =()=>{
        const updateddetail=details.map((user)=>
        user.Sno === Sno ? {...user,Name,Password,Age,Gender,Place }:user)
        setDetails(updateddetail);
        sessionStorage.setItem('details',JSON.stringify(updateddetail))
        setShow(false);
    }
    const handledelete =async(user)=>{
        const result= await confirm('Are You Sure Want to Delete this?')
        if(result){
            const updateddetail = details.filter((value)=>user.Sno !== value.Sno);
            setDetails(updateddetail);
            sessionStorage.setItem('details',JSON.stringify(updateddetail))
        }
    }
    const handleview=()=>{
        navigator('/api');
    }
    const handleadd=()=>{
        setAddShow(true);
    }
    const handleAdd=()=>{
        const add= {
            Sno:addsno,
            Name:addname,
            Password:addpassword,
            Age:addage,
            Gender:addgender,
            Place:addplace,
    
        }
        const updateddetail=[...details,add];
        
        setDetails(updateddetail);
        sessionStorage.setItem('details',JSON.stringify(updateddetail))
        setAddSno('');
        setAddName('');
        setAddpassword('');
        setAddAge('');
        setAddGender('');
        setAddPlace('');
        setAddShow(false);

    }
    const maintable = {
        columns: [
            { label: 'Sno', field: 'Sno'},
            { label: 'Name', field: 'Name'},
            { label: 'Password', field: 'Password'},
            { label: 'Age', field: 'Age'},
            { label: 'Gender', field: 'Gender'},
            { label: 'Place', field: 'Place'},
            {label:'Action',field:'Action'}
            
        ],
        rows: details.map((value)=>({
            Sno:value.Sno,
            Name:value.Name,
            Password:value.Password,
            Age:value.Age,           
            Gender:value.Gender,
            Place:value.Place,
        
        Action: (
            <>
             <FaPencilAlt style={{ marginRight: '10px', cursor: 'pointer' 
        }} onClick={()=>handleEdit(value)} ></FaPencilAlt> 
             <FaTrashAlt style={{cursor: 'pointer' }} onClick={()=>handledelete(value)} ></FaTrashAlt>
            </>
          ),
    }))}
    return (
        <>
        <button onClick={handleview}>view details</button>
        <br></br>
        <button onClick={handleadd}>Add details</button>
        <MDBDataTable
        data={maintable}
        striped
        bordered
        small
        noBottomColumns></MDBDataTable>
        
        {/* edit modal */}
        <Modal show={show} onHide={() =>setShow(false)}>
        <Modal.Header closeButton>
            <Modal.Title>Edit Details</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <form>
                    <table>
                        <tbody>
                        <tr><th>S.no:</th><td><input type='text' value={Sno} readOnly/></td></tr>
                        <tr><th>Name:</th><td><input type='text' value={Name} onChange={(e) =>setName(e.target.value)}/></td></tr>
                        <tr><th>Password:</th><td><input type='text' value={Password} onChange={(e) =>setPassword(e.target.value)} /></td></tr>
                        <tr><th>Age:</th><td><input type='text' value={Age} onChange={(e) =>setAge(e.target.value)}/></td></tr>
                        <tr><th>Gender:</th><td><input type='text' value={Gender} onChange={(e) =>setGender(e.target.value)}/></td></tr>
                        <tr><th>Place:</th><td><input type='text' value={Place} onChange={(e) =>setPlace(e.target.value)}/></td></tr>
                        </tbody>
                    </table>
                </form>
            </Modal.Body>
            <Modal.Footer>
                <button onClick={() => setShow(false)}>close</button> 
                <button onClick={handleUpdate}>save changes</button>
             </Modal.Footer>
        </Modal>
        {/* ADD modal */}
        <Modal show={addshow} onHide={()=>setAddShow(false)}>
        <Modal.Header closeButton>
            <Modal.Title>ADD Details</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <form>
                    <table>
                        <tr><th>S.no:</th><td><input type='text' value={addsno} onChange={(e)=>setAddSno(e.target.value)}/></td></tr>
                        <tr><th>Name:</th><td><input type='text' value={addname} onChange={(e)=>setAddName(e.target.value)}/></td></tr>
                        <tr><th>Password:</th><td><input type='text' value={addpassword} onChange={(e)=>setAddpassword(e.target.value)} /></td></tr>
                        <tr><th>Age:</th><td><input type='text' value={addage} onChange={(e)=>setAddAge(e.target.value)}/></td></tr>
                        <tr><th>Gender:</th><td><input type='text' value={addgender} onChange={(e)=>setAddGender(e.target.value)}/></td></tr>
                        <tr><th>Place:</th><td><input type='text' value={addplace} onChange={(e)=>setAddPlace(e.target.value)}/></td></tr>
                    </table>
                </form>
            </Modal.Body>
            <Modal.Footer>
                <button onClick={()=>setAddShow(false)}>close</button>
                <button onClick={handleAdd}> Add </button>
            </Modal.Footer>
        </Modal>
        </>
    )}
    export default Maintable;