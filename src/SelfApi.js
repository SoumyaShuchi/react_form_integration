import axios from 'axios'
import React, { useState } from 'react'

const SelfApi = () => {
    const [data, setData] = useState()
   const [response, setResponse] = useState()

   const token = localStorage.getItem("token")

    const getData = (e) =>{
        let url= "https://api.staging.paymeindia.in/api/bank_list_fetch_statement/"
        let headers={
            'Authorization':"Token "+token
        }
        axios.get(url,{headers:headers})
        .then((response)=> {
            console.log("soumya", response.data.data)
            setData(response.data.data)
        })
        .catch((err)=>{
            console.log("error",err)
        })
    }
       

    
    
    
    
  return (
    <div>
      <button type="button" onClick={getData} className="getDetail">GetDetail</button>
      <table style={{ width: "100%" }}>
        <tr style={{ textAlign: "center" }}>
          <th>name</th>
          
          
          
        </tr>

        {
          data && data.map((data, index) => (

            <tr style={{ textAlign: "center" }}>
              <td>{data?.name}
              </td>
              
              

            </tr>
          ))
        }


      </table>
    </div>
    
  )
}

export default SelfApi
