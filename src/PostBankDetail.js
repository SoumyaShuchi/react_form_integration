import axios from 'axios'
import React from 'react'
import { useState } from 'react'


const PostBankDetail = () => {
    const [ifsc, setIfsc] = useState()
    const [data, setData] = useState()

    
    const handleSubmit = (e) => {
        // e.preventDefault()
        let requestBody = {
            ifsc: e,

        }

    

    const token = localStorage.getItem("token")
        let post = "https://api.staging.paymeindia.in/api/bankdetails_list/"
        let head = {
            'Authorization': "Token " + token
        }
    axios.post(post,requestBody,{headers:head}) 
    .then((res) => {
        console.log("response token", res.data.data)
        setData(res.data.data)
    })
    .catch((err) => {
        console.log("error", err)
    })
}
    
    

    
    
    
    return (
        
        <>
 <label for="phoneNumner"><b>Email</b></label>
          <input type="text" placeholder="Enter IFSC Code" name="IFSC" onChange={(e) => { handleSubmit(e.target.value) }} required />
          <button type="submit" onClick={handleSubmit} className="ifsc">IFSC</button>
          {/* <button type="button" onClick={getData} className="getDetail">GetDetail</button> */}
        
    
      {/* <button type="button" className="IFSC">ifsc</button> */}
      <table style={{ width: "100%" }}>
        <tr style={{ textAlign: "center" }}>
          <th>name</th>
          <th>address</th>
          <th>ifsc</th>
          
          
          
        </tr>

        {
          data && data.map((data, index) => (

            <tr style={{ textAlign: "center" }}>

              <td>{data?.name}
              </td>
              <td>{data?.address}
              </td>
              <td>{data?.ifsc}
              </td>
              
              

            </tr>
          ))
        }


      </table>
    </>
    )
}

export default PostBankDetail
