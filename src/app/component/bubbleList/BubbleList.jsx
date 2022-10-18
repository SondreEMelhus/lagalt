import React from "react";
import { useSelector } from "react-redux";

import { selectUser } from "../redux/slices/UserSlice";
import { checkSkillMatch } from "../util/CheckSkillMatch";

import '../../../css/bubbleList.css'


export default function BubbleList ({ list }) {
    
    const user = useSelector(selectUser);

    return (
        <div className="bubble-items">
            {list !== undefined && list.map((item, index) => {
                return (
                    <div>
                        {checkSkillMatch(user, item) ? <p className="bubble-item-userMatch" key={index}>{item}</p> : <p className="bubble-item" key={index}>{item}</p>}
                    </div>
                )
            })}
        </div>
    )
}