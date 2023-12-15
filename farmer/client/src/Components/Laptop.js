import React from 'react'
import "../Css/Laptop.css"

const Laptop = () => {
    return (
        <div>
            <div className="wrap">
                <div className="comp">
                    <div className="monitor">
                        <iframe src="/intro" frameborder="0" style={{ width: "98%", height: "100%", overflow: "hidden" }}></iframe>
                    </div>
                    <div className="base">

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Laptop
