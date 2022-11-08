import React, { useState } from 'react'

const FormValidation2 = () => {
    const[check, setcheck]=useState(false)
    const[error, setError]=useState()
    const[name, setName]=useState()
    const[phoneNumber, setPhoneNumber]=useState()


    const handleSubmit =(e) =>{
        if(!name){
            HandleError("Name", "Name field cannot be empty")
        }
        if(!phoneNumber){
            HandleError("Name", "phoneNumber field cannot be empty")
        } 

    }
    const HandleError =(name,msg) =>{
        setError({...error,[name]:msg})
        

    }
    console.log("err",error)

  return (

    <div>
      <label for= "name">Name</label>
      <input type= "text" placeholder='Enter the Name' name='Name' on onChange={(e)=>{setName(e.target.value)
     setError({...error,Name:""})}} required/>
      <lebel for = "Phone Number">Phone Number</lebel>
      <input type="number" placeholder='Enter the Phone Number'name="Phone Number" on onChange={(e)=>{setPhoneNumber(e.target.value)
    setError({...error,Phone:""})}} required/>
      <lebel type= "checkbox">Salary</lebel>
      <input type="checkbox" id=''  onChange={(e) => setcheck(e.target.checked) }/>
      <lebel type= "checkbox">Bussiness</lebel>
      <input type="checkbox" id=''  onChange={(e) => setcheck(e.target.checked) }/>
      <input type="Button" onClick={handleSubmit} className= "FormValidation2">Submit</input>
    </div>
  )
}

export default FormValidation2
