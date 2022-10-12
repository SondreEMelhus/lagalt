//Libraries
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

//Components
import Navbar from "../navbar/Navbar";
import ProjectBanner from "../projects/ProjectBanner";
import { selectProjects } from "../redux/slices/ProjectsSlice";
import { updateSkills } from "../redux/slices/filters/lists/SkillsSlice";
import { updateKeywords } from "../redux/slices/filters/lists/KeywordsSlice";
import { generateKeywordState, generateSkillsState } from "../util/StatePopulator";

//Styling
import '../../../css/profile.css'

export default function MyProjects () {

    const projects = useSelector(selectProjects)
    const dispatch = useDispatch();

    //Populate skills and keywords in filter
    useEffect(() => {
        dispatch( updateSkills( generateSkillsState(projects) ));
        dispatch( updateKeywords( generateKeywordState(projects)));
    }, [])

    function sendToAdmin(){
        
    }

    return (
        <>
            <Navbar/>
            <p>Mine prosjekter</p>
            <div className="home-body">
                    {projects.map((project, index) => {
                        return (
                            <ProjectBanner key={index + '-' + project.id} project={project}  onClick={sendToAdmin}/>
                        )
                    })

                    }
                </div>

        </>
    )
}
