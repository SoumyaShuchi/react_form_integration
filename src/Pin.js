import axios from 'axios';
import React, { useState } from 'react'

const Pin = () => {
    const [pin, setpin] = useState([])
    const [data, setData] = useState([])
    const [item, setItem] = useState([])
    const handleSubmit = (e) => {

        var x = document.getElementById("select").value;
        document.getElementById("pin").innerHTML = x;
        let requestBody = {
            pincode: Pin,
            type: ""
        }
    }
    const getData = (e) => {
        console.log(pin)
        let url = `https://api.postalpincode.in/pincode/${e}`

        axios.get(url)
            .then((res) => {
                console.log("pincode", res.data[0].PostOffice)
                setData(res.data[0].PostOffice)
            })
            .catch((err) => {
                console.log("error", err)

            })
    }


    return (
        <div>
            <label for="pincode"><b>Pincode</b></label>
            <input type="text" placeholder="Enter Pincode" name="pincode" onChange={(e) => {
                setpin(e.target.value.slice(0, 6))
                if (e.target.value.length === 6) {
                    getData(e.target.value)
                }
            }} required />
            <form>
                Enter your Pincode:
                <select type="select" onChange={(e) => { setItem(e.target.value) }}>


                    <option defaultValue="">select</option>
                    {data && data.map((data, index) => (
                        <option value={data.Name} onChange={handleSubmit}>{data.Name}</option>

                    ))
                    }

                </select>
                <h1>{item}</h1>
            </form>

        </div>

    )
}

export default Pin