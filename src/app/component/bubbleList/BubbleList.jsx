import React from "react";

import '../../../css/bubbleList.css'

export default function BubbleList ({ list }) {


    return (
        <div className="bubble-items">
            {list.map((item, index) => {
                return (
                    <p className="bubble-item" key={index + '-' + item}>{item}</p>
                )
            })}
        </div>
    )
}