import React from 'react'

const EventBubbeling = () => {
    const Outer = (e) => {
       
        console.log("outer most")
    }
    const middle = () => {
        console.log("middle")
    }
    const inner = (e) => {
        e.stopPropagation();  
        console.log("inner")
    }
    return (
        <div>
            <div style={{ background: "red", height: '200px',cursor:"pointer" }} onClick={Outer}>

                <div style={{ background: "green", height: "150px" }} onClick={middle}>

                    <div style={{ background: "blue", height: "100px" }} onClick={inner}>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default EventBubbeling
