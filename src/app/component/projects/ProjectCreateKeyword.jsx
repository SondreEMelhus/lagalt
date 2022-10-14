import React, { useState, useEffect } from "react";

//Components
import { getKeyWordsOfIndustry } from "../../../api/attributes";

//Styling
import '../../../css/projectCreateKeyword.css'
export default function ProjectCreateKeyword(industry){

    const [selectedKeywords, setSelectedKeywords] = useState([]);
    const [industryKeywords, setIndustryKeywords] = useState([]);

    console.log(industry.industry + " INDUSTRY")

    
    useEffect(() => {
        getKeywords();
    }, [industry])

    async function getKeywords(){
        const allKeywords = await getKeyWordsOfIndustry(industry.industry);
        const newAllKeywords = [];
        allKeywords.forEach((word) => newAllKeywords.push(word.title))
        setIndustryKeywords(newAllKeywords);
    }

    function selectKeyword(keyword){
        const newSelect = [];
        selectedKeywords.forEach((word) => newSelect.push(word));
        newSelect.push(keyword);
        setSelectedKeywords(newSelect)

        const updatedIndustryKeywordArr = [];
        industryKeywords.forEach((word) => word != keyword ? updatedIndustryKeywordArr.push(word) : null);
        setIndustryKeywords(updatedIndustryKeywordArr);
    } 

    function removeKeyword(keyword){
        const newSelect = [];
        selectedKeywords.forEach((word) => word != keyword ? newSelect.push(word) : null);
        setSelectedKeywords(newSelect);

        const updatedIndustryKeywordArr = [];
        industryKeywords.forEach((word) => updatedIndustryKeywordArr.push(word));
        updatedIndustryKeywordArr.push(keyword);
        setIndustryKeywords(updatedIndustryKeywordArr);
         
    }

    return(
        <div className="projectCreateKeywordBoxes">
            <div className="allKeywordBox">
                {industryKeywords.map((keyword) => {
                    return(
                        <div >
                        <p className="keywordElementCreateKeyword" onClick={() => selectKeyword(keyword)}>{keyword}</p>
                        </div>
                    )
                })}
            </div>
            <div className="allKeywordBox">
            {selectedKeywords.map((keyword) => {
                    return(
                        <div >
                        <p className="keywordElementCreateKeyword" onClick={() => removeKeyword(keyword)}>{keyword}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}