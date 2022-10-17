//Libraries
import React from "react";
import { useDispatch, useSelector } from "react-redux";

//Components
import { addKeyword, removeKeyword, selectProjectKeywords } from "../../redux/slices/createProjectSlices/ProjectKeywordsSlice";
import { addIndustryKeyword, removeIndustryKeyword, selectProjectIndustry } from "../../redux/slices/createProjectSlices/ProjectIndustrySlice";

//Styling
import '../../../../css/projectCreateKeyword.css'


export default function ProjectCreateKeywordRework(){

    const industry = useSelector(selectProjectIndustry)
    const keywords = useSelector(selectProjectKeywords);
    const dispatch = useDispatch();

    return(
        <div className="projectCreateKeywordBoxes">
            <div className="allKeywordBox">
                {industry.keywords !== undefined && industry.keywords.map((keyword, index) => {
                    return(
                        <p className="keywordElementCreateKeyword" onClick={() => {
                            dispatch( addKeyword(keyword))
                            dispatch( removeIndustryKeyword(keyword))
                        }
                        } key={'Add' + '-' + index}>{keyword}</p>
                    )
                })}
            </div>
            <div className="allKeywordBox">
            {keywords !== undefined && keywords.map((keyword, index) => {
                    return(
                        <p className="keywordElementCreateKeyword" onClick={() => {
                            dispatch( removeKeyword(keyword))
                            dispatch( addIndustryKeyword(keyword))
                        }} key={'Remove' + '-' + index}>{keyword}</p>
                    )
                })}
            </div>
        </div>
    )
}