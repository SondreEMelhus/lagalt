//Libraries
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

//Components
import { addKeyword, removeKeyword, selectProjectKeywords } from "../../redux/slices/createProjectSlices/ProjectKeywordsSlice";
import { addIndustryKeyword, removeIndustryKeyword, selectProjectIndustry } from "../../redux/slices/createProjectSlices/ProjectIndustrySlice";

//Styling
import '../../../../css/projectCreateKeyword.css'
import { getKeyWordsOfIndustry } from "../../../../api/attributes";


export default function ProjectCreateKeywordRework({industry, submitted, setKeywords}){

    const [industryKeywords, setIndustryKeywords] = useState([]);
    const [selectedKeywords, setSelectedKeywords] = useState([]);

    useEffect(() => {
        getKeywords();
    }, [industry])

    useEffect(() => {
        setKeywords(selectedKeywords);
    }, [submitted])

    async function getKeywords(){
        console.log(industry);
        const newKeywords = await getKeyWordsOfIndustry(industry);
        const allKeywords = [];
        console.log("KKKKKKKKKKKKKKKKKKKKKKKKK")
        console.log(newKeywords);
        console.log("KKKKKKKKKKKKKKKKKKKKKKKKK")

        newKeywords.forEach((keyword) => allKeywords.push(keyword));
        setIndustryKeywords(allKeywords);
    }

    function selectKeyword(keyword){
        const newIndustryKeywords = [];
        const newSelectedKeywords = [];

        selectedKeywords.forEach((s => newSelectedKeywords.push(s)));
        newSelectedKeywords.push(keyword);
        setSelectedKeywords(newSelectedKeywords);

        industryKeywords.forEach((s) => s.title !== keyword.title ? newIndustryKeywords.push(s): null);
        setIndustryKeywords(newIndustryKeywords);
    }

    function removeSelectedKeyword(keyword){
        const newIndustryKeywords = [];
        const newSelectedKeywords = [];

        selectedKeywords.forEach((s) => s.title !== keyword.title ? newSelectedKeywords.push(s): null);
        setSelectedKeywords(newSelectedKeywords);

        industryKeywords.forEach((s) => newIndustryKeywords.push(s));
        newIndustryKeywords.push(keyword);
        setIndustryKeywords(newIndustryKeywords);
    }

    function submitted(){
        setKeywords(selectedKeywords);
    }

    return(
        <div className="projectCreateKeywordBoxes">
            <div className="allKeywordBox">
                {industryKeywords !== undefined && industryKeywords.map((keyword) => {
                    return(
                        <p className="keywordElementCreateKeyword" onClick={() => selectKeyword(keyword)}>{keyword.title}</p>
                    )
                })}
            </div>
            <div className="allKeywordBox">
            {selectedKeywords !== undefined && selectedKeywords.map((keyword) => {
                    return(
                        <p className="keywordElementCreateKeyword" onClick={() => removeSelectedKeyword(keyword)}>{keyword.title}</p>
                    )
                })}
            </div>
        </div>
    )
}