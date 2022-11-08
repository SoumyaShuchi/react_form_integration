import axios from 'axios'
import React from 'react'

const Pincode = () => {

        const handleSubmit = () => {
            var x = document.getElementById("pincode").value;
            document.getElementById("pin").innerHTML = x;
            let requestBody = {
                pincode: Pincode,
                type: ""
        }
const token = localStorage.getItem("token") 
 let url ="https://api.postalpincode.in/pincode/"
 let head = {
    'Authorization' : "token" + token
 }
    axios.post(url,requestBody,{header:head})
    .then((res) => {
        console.log("pin",res.data)
    })
    .catch((err)=>{
        console.log("error",err)
    })

  return (
    <div>
    <form>
                Select your favorite fruit:
                <select id="pincode">
                    <option value="814147">814147</option>
                    <option value="201301">201301</option>
                    <option value="201307">201307</option>
                    <option value="814142">814142</option>
                    <option value="814154">814154</option>
                </select>
            </form>
    <label for="pincode"><b>Pincode</b></label>
      <input type="number" placeholder='Enter the pincode' className='Pincode'>Pincode onChange{(e)=>{setpincode(e.target.value)}}</input>
      <button type="button"  className='pincode'>Get</button>
      <p id="pin"></p>
    </div>
  )
}
}

export default Pincode
