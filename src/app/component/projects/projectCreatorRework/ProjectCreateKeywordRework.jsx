//Libraries
import React, { useEffect, useState } from "react";

//Styling
import '../../../../css/projectCreateKeyword.css'
import { getKeyWordsOfIndustry } from "../../../../api/attributes";

/**
 * Component used to render and manage keywords in the projectCreatorRework component
 */
export default function ProjectCreateKeywordRework({ industry, submitted, setKeywords }){

    //States
    const [industryKeywords, setIndustryKeywords] = useState([]);
    const [selectedKeywords, setSelectedKeywords] = useState([]);

    //Hooks
    useEffect(() => {
        getKeywords();
    }, [industry])

    useEffect(() => {
        setKeywords(selectedKeywords);
    }, [submitted])

    /**
     * Method used to get all the keywords of a given industry
     */
    const getKeywords = async () => {
        const newKeywords = await getKeyWordsOfIndustry(industry);
        let allKeywords = [];

        newKeywords.forEach((keyword) => allKeywords.push(keyword));
        setIndustryKeywords(allKeywords);
    }

    /**
     * Method used to select a keyword
     */
    const selectKeyword = (keyword) => {
        let newIndustryKeywords = [];
        let newSelectedKeywords = [];

        selectedKeywords.forEach((s => newSelectedKeywords.push(s)));
        newSelectedKeywords.push(keyword);
        setSelectedKeywords(newSelectedKeywords);

        industryKeywords.forEach((s) => s.title !== keyword.title ? newIndustryKeywords.push(s): null);
        setIndustryKeywords(newIndustryKeywords);
    }

    /**
     * Method used to remvoe the selected keyword from the list of selcted keywords
     */
    const removeSelectedKeyword = (keyword) => {
        let newIndustryKeywords = [];
        let newSelectedKeywords = [];

        selectedKeywords.forEach((s) => s.title !== keyword.title ? newSelectedKeywords.push(s): null);
        setSelectedKeywords(newSelectedKeywords);

        industryKeywords.forEach((s) => newIndustryKeywords.push(s));
        newIndustryKeywords.push(keyword);
        setIndustryKeywords(newIndustryKeywords);
    }

    function submitted () {
        setKeywords(selectedKeywords);
    }

    //Render function
    return(
        <div className="projectCreateKeywordBoxes">
            <div className="allKeywordBox">
                {industryKeywords !== undefined && industryKeywords.map((keyword, index) => {
                    return(
                        <p className="keywordElementCreateKeyword" onClick={() => selectKeyword(keyword)} key={index}>{keyword.title}</p>
                    )
                })}
            </div>

            <div className="allKeywordBox">
            {selectedKeywords !== undefined && selectedKeywords.map((keyword, index) => {
                    return(
                        <p className="keywordElementCreateKeyword" onClick={() => removeSelectedKeyword(keyword)} key={index}>{keyword.title}</p>
                    )
                })}
            </div>
        </div>
    )
}