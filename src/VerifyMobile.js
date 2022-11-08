import axios from 'axios'
import React, { useState } from 'react'

const VerifyMobile = () => {
    const [phoneNo, setphoneNo] = useState()

    const handleSubmit = (e) => {
        e.preventDefault()
        let requestBody = {
          phone_number: phoneNo,
          type: ""
        }
    const token = localStorage.getItem("token")
    let url = "https://api.staging.paymeindia.in/api/authentication/phone_no_verify/"
    let head = {
        'Authorization' : "token" + token
    }
    axios.post(url,requestBody,{headers:head})
    .then((res) => {
        console.log("ss",res.data)
})
.catch((err) =>{
    console.log("error",err)
})
    }

  return (
    <div>
    <label for="phoneNumner"><b>PhoneNumber</b><br></br></label>
     <input type= "Number" placeholder='Enter the mobile Number' name="phoneNo" onChange={(e)=>{setphoneNo(e.target.value)}} />
     <button type="submit" onClick={handleSubmit} className="VerifyMobile">VerifyMobile</button>
    </div>
  )
}

export default VerifyMobile
