import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import Header from './Header';


const Form = (props) => {
  const navigate = useNavigate();
  
  const [phoneNo, setPhoneNo] = useState()
  const [psw, setPsw] = useState()
  const [pincode, setPincode] = useState()
  const [token, setToken] = useState()
  const [data, setData] = useState([])
  const[error, setError] = useState()
  //   const handleChange = (e) => {
  //  setData({...data,[e.target.name]:e.target.value})

  //   }
  //   console.log("pramod",data)

  const handleSubmit = (e) => {
    e.preventDefault()
    let requestBody = {
      mpin: psw,
      phone_number: phoneNo,
      type: ""
    }

    let url = "https://api.staging.paymeindia.in/api/authentication/authenticate_mpin/"
    axios.post(url, requestBody)
      .then((res) => {
        console.log("response token", res.data.data.token)
        setToken( res.data.data.token)
        navigate("/user",{token:res.data.data.token});
        localStorage.setItem("token",res.data.data.token)
      }).catch((err) => {
        console.log("error", err)
      })
      if(!phoneNo){
        setError("Name field can not be blank")
        return
      }
      if(!psw){
        setError("Password field can not be blank")
        return
      }

  }
    const getData = (e) => {
    console.log(pincode)
    let url2 = `https://api.postalpincode.in/pincode/${e}`
    axios.get(url2)
      .then((response) => {
        console.log("response", response.data[0].PostOffice)
        setData(response.data[0].PostOffice)
      })
  }


  return (

    <>
    
      <form style={{ border: "1px" }}>

        <div className="container">

          <h1>Sign Up</h1>
          <p>Please fill in this form to create an account.</p>
          <hr></hr>

          <label for="phoneNumbner"><b>Email</b></label>
          <input type= "text" placeholder="Enter the phone Number" name="PhoneNo" on onChange={(e)=>{setPhoneNo(e.target.value)
     setError("")}} required/>
     <span style={{color:"red"}}>{error}</span>
 <br></br>
          <label for="psw"><b>Password</b></label>
          <input type="password" placeholder="Enter Password" name="psw" onChange={(e) => { setPsw(e.target.value) 
           setError("")}} required />

          <span style={{color:"red"}}>{error}</span>
          <label>
            <input type="checkbox" checked="checked" name="remember" style={{ marginBottom: "15px" }} /> Remember me
          </label>

          <p>By creating an account you agree to our <a href="#" style={{ color: "dodgerblue" }}>Terms & Privacy</a>.</p>

          <div className="clearfix">
            <button type="button" className="cancelbtn">Cancel</button>
            <button type="submit" onClick={handleSubmit} className="signupbtn">Login</button>
            <button type="button" onClick={getData} className="getDetail">GetDetail</button>
            <div className="container">
              <label for="pincode"><b>Pincode</b></label>
              <input type="text" placeholder="Enter Pincode" name="pincode" onChange={(e) => {
                setPincode(e.target.value.slice(0, 6))
                if(e.target.value.length===6){
                getData(e.target.value)
              }}} required />
            </div>

            <button type="submit" onClick={getData} className="signupbtn">clickhere</button>

          </div>
        </div>
        <h2>
          token
        </h2>
        <div style={{ width: "10%" }} >
          {
            token
          }
        </div>
      </form>

      <table style={{ width: "100%" }}>
        <tr style={{ textAlign: "center" }}>
          <th>Region</th>
          <th>Block</th>
          <th>BranchType</th>
          <th>Country</th>
          <th>DeliveryStatus</th>
          <th>Description</th>
          <th>District</th>
          <th>Division</th>
          <th>Name</th>
          <th>Pincode</th>
          <th>State</th>
        </tr>

        {
          data && data.map((data, index) => (

            <tr style={{ textAlign: "center" }}>
              <td>{data?.Region}
              </td>
              <td>{data?.Block}
              </td>
              <td>{data?.BranchType}
              </td>
              <td> {data?.Country}
              </td>
              <td> {data?.DeliveryStatus}
              </td>
              <td> {data?.Description || "NULL"}
              </td>
              <td> {data?.District}
              </td>
              <td> {data?.Division}
              </td>
              <td> {data?.Name}
              </td>
              <td> {data?.Pincode}
              </td>
              <td> {data?.State}
              </td>

            </tr>
          ))
        }


      </table>
      <div>

      </div>

    </>

  )
}

export default Form
