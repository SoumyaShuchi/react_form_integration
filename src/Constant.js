import axios from 'axios'
import React, { useState } from 'react';

const Constant = () => {

    const [data, setData] = useState([])

  const token = localStorage.getItem("token")
  console.log("constnt",token)

    const getData = (e) => {
        let endpoint = "https://api.staging.paymeindia.in/"
        let url = endpoint + "api/get_document_status/"
        let headers={
            'Authorization':"Token "+token
        }

        axios.get(url,{headers:headers})
            .then((response) => {
                console.log("soumya", response.data.data[0])
                setData(response.data.data[0])


            })
            .catch((err) => {
                console.log(err)

            })

    }



    return (
        <div style={{ textAlign: "center" }}>

            <h1>Welcome to Get User Detail Page</h1>

            <button type="button" style={{ width: "100%" }} onClick={getData} className="cancelbtn">getUserDetail</button>

{ <div>
<table style={{ width: "100%" }}>
        <tr style={{ textAlign: "center" }}>
          <th>key</th>
          <th>value</th>
         
        </tr>

        

              <tr style={{ textAlign: "center" }} >
            
             <td>adhar_card_number</td>
            <td>{data?.adhar_card_number} </td>
             </tr>
             <tr> 
            
            <td>adhar_card_verified</td>
            <td>{data?.adhar_card_verified} </td>
            </tr>
            <tr> 
            
            <td>bank_details_verified</td>
            <td>{data?.bank_details_verified}
              </td>
            </tr>
            <tr> 
            
            <td>bank_statement_verified</td>
            <td> {data?.bank_statement_verified}
              </td>
            </tr>
            <tr> 
            
            <td>adhar_card_verified</td>
            <td>{data?.adhar_card_verified} </td>
            </tr>
            <tr>
            <td>basic_info_verified</td>
            <td> {data?.basic_info_verified}
              </td></tr>
              <tr>
              <td>blocked</td>
              <td> {data?.blocked || "NULL"}
              </td>
              </tr>
            <tr> 
            <td>adhar_card_verified</td>
            <td>{data?.adhar_card_verified} </td>
            </tr>
            <tr>
          
          <td>can_apply_for_loan</td>
          <td> {data.can_apply_for_loan?"True":"false" || "NA"}</td>
          </tr>
           
              
             
             
             
             
              
             
           
       


      </table>
      
</div> }

        </div>
        
        
    )
    


}

export default Constant
