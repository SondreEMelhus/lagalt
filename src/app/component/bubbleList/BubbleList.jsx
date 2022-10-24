import React from "react";
import { useSelector } from "react-redux";

import { selectUser } from "../redux/slices/UserSlice";
import { checkSkillMatch } from "../util/CheckSkillMatch";

import '../../../css/bubbleList.css'

/**
 * Component responsible for displaying a list of items in the form of bubbles.
 */
export default function BubbleList ({ list }) {
    
    //Hooks
    const user = useSelector(selectUser);

    //Render function
    return (
        <div className="bubble-items">
            {list !== undefined && list.map((item, index) => {
                return (
                    <div key={index}>
                        {checkSkillMatch(user, item) ? <p className="bubble-item-userMatch">{item}</p> : <p className="bubble-item">{item}</p>}
                    </div>
                )
            })}
        </div>
    )
}