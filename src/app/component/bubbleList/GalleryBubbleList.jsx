import React from "react";

import '../../../css/galleryBubbleList.css'

export default function GalleryBubbleList ({ list }) {


    return (
        <div className="gallery-bubble-listings">
            <div className="gallery-bubble-items">
                {list.map((item, index) => {
                    return (
                        <p className="gallery-bubble-item" key={index + '-' + item}>{item}</p>
                    )
                })}
            </div>
        </div>
    )
}