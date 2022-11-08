import React from 'react'

const Dropdown = () => {
    const handleSubmit = () => {
        var x = document.getElementById("mySelect").value;
        document.getElementById("demo").innerHTML = x;
    }
    return (
        <div>
            <form>
                Select your favorite fruit:
                <select id="mySelect">
                    <option value="apple">Apple</option>
                    <option value="orange">Orange</option>
                    <option value="pineapple">Pineapple</option>
                    <option value="banana">Banana</option>
                </select>
            </form>

            <p>Click the button to return the value of the selected fruit.</p>

            <button type="button" onClick={handleSubmit} >Try it</button>

            <p id="demo"></p>
        </div>
    )

}
export default Dropdown
