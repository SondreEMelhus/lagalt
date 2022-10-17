import React from "react";

export default function ContentBoard ({list}) {

    const handleClick = () => {
        //Navigate to content page
    }

    return (
        <div>
            {list !== undefined && list.map((content, index) => {
                return (
                    <p key={index} onClick={handleClick}>{content}</p>
                )
            })}
        </div>
    )
}