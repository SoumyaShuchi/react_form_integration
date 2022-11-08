import React from 'react'
import { useState } from 'react'

const FormValidatation = () => {
    const[name, setName] = useState()
    const[phoneNo, setPhoneNo] = useState()
    const[email, setEmail] = useState()
    const[error, setError] = useState({})
    
    const handleSubmit = (e) =>{
        if (!name){
        handleError("Name","Name field can not be blank")
        return
        }
        if (!phoneNo){
            handleError("Phone","Phone Number field can not be blank")
           return 
        }
        if (!email){
            handleError("Email","Email field can not be blank")
            return
            
        }


    }
    const handleError =(name,msg) =>{
        setError({...error ,[name]:msg})

    }
    console.log("err",error)
  return (
    <div>
    <label for = "Name"><br></br>Name</label> 
     <input type= "text" placeholder="Enter the name" name="Name" on onChange={(e)=>{setName(e.target.value)
     setError({...error,Name:""})}} required/>
     <span style={{color:"red"}}>{error?.Name}</span>
     <label for = "phoneNo"><br></br>PhoneNo</label> 
     <input type= "number" placeholder="Enter the Phone Number" name="Phone Number" on onChange={(e)=>{setPhoneNo(e.target.value)
    setError({...error,Phone:""})}} required/>
     <span style={{color:"red"}}>{error?.Phone}</span>
     <label for = "Email"><br></br>Email</label> 
     <input type= "text" placeholder="Enter the Email" name="Email" on onChange={(e)=>{setEmail(e.target.value)
    setError({...error,Email:""})}} required/>
     <span style={{color:"red"}}>{error?.Email}</span>
     <button type="submit" onClick={handleSubmit} className= "FormValidation">Submit</button>
    </div>
  )
}

export default FormValidatation

